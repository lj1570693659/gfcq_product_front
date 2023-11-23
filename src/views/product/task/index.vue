<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.subName" :placeholder="$t('table.productSubName')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.proNumber" :placeholder="$t('table.productNumber')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.taskName" :placeholder="$t('table.productTask')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-select v-model="listQuery.dutyWorkNumber" :placeholder="$t('table.dutyWorkNumber')" clearable filterable style="width: 300px" class="filter-item">
        <el-option v-for="item in employeeAll" :key="item.WorkNumber" :label="item.UserName" :value="item.WorkNumber" />
      </el-select>

      <el-select v-model="listQuery.joinWorkNumber" :placeholder="$t('table.joinWorkNumber')" clearable filterable style="width: 300px" class="filter-item">
        <el-option v-for="item in employeeAll" :key="item.WorkNumber" :label="item.UserName" :value="item.WorkNumber" />
      </el-select>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        {{ $t('table.search') }}
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        {{ $t('table.add') }}
      </el-button>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column label="项目简称" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.subName }} / {{ scope.row.proNumber }}</span>
        </template>
      </el-table-column>
      <el-table-column label="任务分类" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.taskCate }}</span>
        </template>
      </el-table-column>
      <el-table-column label="任务描述" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.taskDesc }}</span>
        </template>
      </el-table-column>
      <el-table-column label="任务状态">
        <template slot-scope="{row}">
          <template v-if="row.edit">
            <el-select v-model="row.taskStatus" :placeholder="$t('table.dutyWorkNumber')" clearable style="width: 300px" class="filter-item">
              <el-option label="未开启" :value="1" />
              <el-option label="运行中" :value="2" />
              <el-option label="已完成" :value="3" />
              <el-option label="暂停" :value="4" />
            </el-select>
            <el-button
              class="cancel-btn"
              size="small"
              icon="el-icon-refresh"
              type="warning"
              @click="cancelEdit(row)"
            >
              cancel
            </el-button>
          </template>
          <span v-else-if="row.taskStatus == 1">未开启</span>
          <span v-else-if="row.taskStatus == 2">运行中</span>
          <span v-else-if="row.taskStatus == 3">已完成</span>
          <span v-else-if="row.taskStatus == 4">暂停</span>
        </template>
      </el-table-column>
      <el-table-column label="责任人" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.dutyWorkNumber }}</span>
        </template>
      </el-table-column>
      <el-table-column label="关联责任人" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.joinWorkNumber }}</span>
        </template>
      </el-table-column>
      <el-table-column label="计划时间" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.palnStartTime }} ~ {{ scope.row.palnEndTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="实际时间" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.realStartTime }} ~ {{ scope.row.realEndTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="备注">
        <template slot-scope="{row}">
          <template v-if="row.edit">
            <el-input v-model="row.remark" class="edit-input" size="small" />
          </template>
          <span v-else>{{ row.remark }}</span>
        </template>
      </el-table-column>
      <el-table-column label="未完成升级" align="center" width="310">
        <template slot-scope="scope">
          <span>{{ scope.row.upgradeStep }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="操作" width="200">
        <template slot-scope="{row}">
          <el-button
            v-if="row.edit"
            type="success"
            size="small"
            icon="el-icon-circle-check-outline"
            @click="confirmEdit(row)"
          >
            Ok
          </el-button>
          <el-button
            v-else
            type="primary"
            size="small"
            icon="el-icon-edit"
            @click="row.edit=!row.edit"
          >
            Edit
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :size.sync="listQuery.size" @pagination="fetchData" />
  </div>
</template>

<script>

import moment from 'moment'
import { deleteData } from '@/api/product/index'
import { getProductLists, modifyData } from '@/api/product/task'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import { getEmployeeAll } from '@/api/system//organize/employee'

export default {
  components: { Pagination },
  filters: {
    SexFilter(status) {
      const sexMap = {
        0: '未知',
        1: '男',
        2: '女'
      }
      return sexMap[status]
    }
  },
  data() {
    return {
      employeeAll: [],
      list: null,
      stageOptions: [],
      kpiOptions: [],
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        size: 10,
        proId: this.$route.query.proId,
        subName: this.$route.query.name
      },
      textMap: {
        update: '编辑',
        create: '录入阶段绩效'
      },
      dialogStatus: '',
      dialogFormVisible: false,
      temp: {},
      rules: {
      }
    }
  },
  created() {
    this.fetchData()
    this.getProductMembereAll()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getProductLists(this.listQuery).then(response => {
        this.list = response.data
        this.total = response.totalSize
        this.listLoading = false
        if (this.total > 0) {
          for (var index2 in this.list) {
            this.list[index2].palnStartTime = moment(this.list[index2].palnStartTime).format('YYYY-MM-DD')
            this.list[index2].palnEndTime = moment(this.list[index2].palnEndTime).format('YYYY-MM-DD')
            if (this.list[index2].realStartTime !== null && this.list[index2].realStartTime !== undefined) {
              this.list[index2].realStartTime = moment(this.list[index2].realStartTime).format('YYYY-MM-DD')
            }
            if (this.list[index2].realEndTime !== null && this.list[index2].realEndTime !== undefined) {
              this.list[index2].realEndTime = moment(this.list[index2].realEndTime).format('YYYY-MM-DD')
            }
            this.list[index2].originalTaskStatus = this.list[index2].taskStatus
            this.list[index2].originalRemark = this.list[index2].remark
            if (this.list[index2].upgradeFirstTime !== null) {
              this.list[index2].upgradeStep = '第一次升级：' + this.list[index2].upgradeFirstTime + '给' + this.list[index2].upgradeFirst + '' + '第二次升级：' + this.list[index2].upgradeTwoTime + '给' + this.list[index2].upgradeTwo + '第三次升级：' + this.list[index2].upgradeThreeTime + '给' + this.list[index2].upgradeThree
            } else {
              this.list[index2].upgradeStep = '不升级'
            }
          }
        }
      })
    },
    getProductMembereAll() {
      getEmployeeAll().then(response => {
        this.employeeAll = response.Data
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.fetchData()
    },
    cancelEdit(row) {
      row.taskStatus = row.originalTaskStatus
      row.remark = row.originalRemark
      row.edit = false
      this.$message({
        message: '任务信息未做变更',
        type: 'warning'
      })
    },
    confirmEdit(row) {
      row.edit = false
      modifyData({ id: row.id, taskStatus: row.taskStatus, remark: row.remark }).then(response => {
        this.$message({
          message: '任务信息变更',
          type: 'success'
        })
      })
    },
    handleDelete(row) {
      deleteData({ id: row.productInfo.id }).then(response => {
        this.$notify({
          title: '成功',
          message: '提交成功',
          type: 'success',
          duration: 2000
        })
        this.fetchData()
      })
    },
    handleImport(row) {
      this.$router.push({
        path: '/product/import',
        query: {
          id: row.productInfo.id
        }
      })
    },
    handleDetail(row) {
      this.$router.push({
        path: '/product/info',
        query: {
          id: row.productInfo.id
        }
      })
    },
    handleCreate(row) {
      this.$router.push({
        path: '/product/create',
        query: {
          id: row.id,
          name: row.name
        }
      })
    },
    handleEdit(row) {
      this.$router.push({
        path: '/product/create',
        query: {
          id: row.productInfo.id
        }
      })
    }
  }
}
</script>
