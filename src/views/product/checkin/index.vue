<template>
  <div class="app-container">
    <div class="filter-container">
      <el-select v-model="listQuery.proId" :placeholder="$t('table.product')" clearable style="width: 300px" class="filter-item">
        <el-option v-for="item in productAll" :key="item.id" :label="item.name" :value="item.id" />
      </el-select>
      <el-select v-model="listQuery.useridList" :placeholder="$t('table.productMember')" multiple clearable filterable style="width: 300px" class="filter-item">
        <el-option v-for="item in employeeAll" :key="item.WorkNumber" :label="item.UserName" :value="item.WorkNumber" />
      </el-select>

      <el-col :span="3">
        <el-date-picker v-model="listQuery.startTime" value-format="yyyy-MM-dd" type="date" placeholder="开始日期" style="width: 100%;" />
      </el-col>
      <el-col :span="3">
        <el-date-picker v-model="listQuery.endTime" value-format="yyyy-MM-dd" type="date" placeholder="结束日期" style="width: 100%;" />
      </el-col>
      <br>
      <el-select v-model="pname" placeholder="一级部门" @change="choseProvince">
        <el-option
          v-for="(item,$index) in departAll"
          :key="$index"
          :label="item.name"
          :value="item.id"
        /></el-select>
      <el-select v-model="cname" placeholder="二级部门" @change="choseCity">
        <el-option v-for="(item,$index) in city" :key="$index" :label="item.name" :value="item.id" />
      </el-select>
      <el-select v-model="bname" placeholder="三级部门" @change="choseBlock">
        <el-option
          v-for="(item,$index) in block"
          :key="$index"
          :label="item.name"
          :value="item.id"
        />
      </el-select>

      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        {{ $t('table.search') }}
      </el-button>
      <!-- </el-select> -->
    </div>
    <el-table
      v-loading="listLoading"
      :data="memberList"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="打卡日期">
        <template slot-scope="scope">
          {{ scope.row.BaseInfo.Date }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="工号">
        <template slot-scope="scope">
          {{ scope.row.BaseInfo.Acctid }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="姓名">
        <template slot-scope="scope">
          {{ scope.row.BaseInfo.Name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="部门">
        <template slot-scope="scope">
          {{ scope.row.BaseInfo.DepartsName }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="加班时长">
        <template slot-scope="scope">
          <span v-if="scope.row.OtInfo.OtDuration > 0">{{ scope.row.OtInfo.OtDuration }}H</span>
          <span v-else>--</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="记录类型">
        <template slot-scope="scope">
          <span v-if="scope.row.BaseInfo.RecordType == 1">固定上下班</span>
          <span v-if="scope.row.BaseInfo.RecordType == 2">外出</span>
          <span v-if="scope.row.BaseInfo.RecordType == 3">按班次上下班</span>
          <span v-if="scope.row.BaseInfo.RecordType == 4">自由签到</span>
          <span v-if="scope.row.BaseInfo.RecordType == 5">加班</span>
          <span v-if="scope.row.BaseInfo.RecordType == 7">无规则</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="打卡时间">
        <template slot-scope="scope">
          {{ scope.row.SummaryInfo.EarliestTime }} ~ {{ scope.row.SummaryInfo.LastestTime }}
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :size.sync="listQuery.size" @pagination="fetchData" />

  </div>
</template>

<script>
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import { getCheckinDayData } from '@/api/product/checkin'
import { getEmployeeAll } from '@/api/system//organize/employee'
import { getDepartmentLists } from '@/api/system//organize/department'
import { getAll } from '@/api/product/index'

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
      pname: '',
      cname: '',
      bname: '',
      list: null,
      memberList: [],
      productAll: [],
      departAll: [],
      block: [],
      employeeAll: [],
      city: [],
      attributeOptions: [],
      typeOptions: [],
      supportOptions: [],
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        size: 10,
        proId: 0,
        departId: 0,
        useridList: [],
        dateRange: '',
        startTime: '',
        endTime: ''
      },
      dialogStatus: '',
      dialogFormVisible: false,
      temp: {}
    }
  },
  created() {
    this.listQuery.proId = this.$route.query.proId
    this.fetchData()
    this.getProductAll()
    this.getProductMembereAll()
    this.getDepartAll()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getCheckinDayData({ proId: this.listQuery.proId, startTime: this.listQuery.startTime, endTime: this.listQuery.endTime, useridList: this.listQuery.useridList, departId: this.listQuery.departId }).then(response => {
        this.memberList = response.Data
        this.listLoading = false
      }).catch(err => {
        console.log(err)
      })
    },
    getProductAll() {
      getAll().then(response => {
        this.productAll = response
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
    getDepartAll() {
      getDepartmentLists().then(response => {
        this.departAll = response
      })
    },

    choseProvince(e) {
      const that = this
      that.city = []
      that.block = []
      that.name = ''
      that.bname = ''
      for (var index2 in that.departAll) {
        if (e === that.departAll[index2].id) {
          that.shi1 = that.departAll[index2].children
          that.shi1.forEach(function(citem, cindex) {
            that.city.push({
              id: citem.id,
              name: citem.name,
              children: citem.children
            })
          })
        }
      }
    },
    // 选市
    choseCity(e) {
      const that = this
      that.block = []

      for (var index3 in that.city) {
        if (e === that.city[index3].id) {
          that.qu1 = that.city[index3].children
          that.name = that.city[index3].name
          that.E = that.qu1[0].id
          that.qu1.forEach(function(bitem, bindex) {
            that.block.push({
              id: bitem.id,
              name: bitem.name,
              children: []
            })
          })
        }
      }
    },
    // 选区
    choseBlock(e) {
      this.bname = e
      this.listQuery.departId = e
    }

  }
}
</script>

