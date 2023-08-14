<template>
  <div class="app-container">
    <div class="filter-container">
      <el-select v-model="listQuery.proId" :placeholder="$t('table.productName')" clearable style="width: 200px" class="filter-item">
        <el-option v-for="item in productAll" :key="item.id" :label="item.name" :value="item.id" />
      </el-select>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        {{ $t('table.search') }}
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
      <el-table-column label="项目名称">
        <template slot-scope="scope">
          {{ scope.row.productInfo.name }}
        </template>
      </el-table-column>
      <el-table-column label="当前阶段" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.stageInfo.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="阶段比例" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.stageInfo.quotaRadio }}</span>
          <!-- <el-tag :type="scope.row.Sex | SexFilter">{{ scope.row.sexName }}</el-tag> -->
        </template>
      </el-table-column>
      <el-table-column label="阶段预算" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.productStageKpi.stageBudget }}</span>
        </template>
      </el-table-column>
      <el-table-column label="阶段评分" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.productStageKpi.stageScore }}</span>
        </template>
      </el-table-column>
      <el-table-column label="应发比例" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.productStageKpi.shouldSentRadio*100 }}%</span>
        </template>
      </el-table-column>
      <el-table-column label="阶段额度" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.productStageKpi.stageQuota }}</span>
        </template>
      </el-table-column>
      <el-table-column label="团队额度" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.productStageKpi.crewQuota }}</span>
        </template>
      </el-table-column>
      <el-table-column label="团建额度" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.productStageKpi.teamBuildQuota }}</span>
        </template>
      </el-table-column>
      <el-table-column label="业务支持额度" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.productStageKpi.supportQuota }}</span>
        </template>
      </el-table-column>
      <el-table-column label="PM分配比例" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.productStageKpi.pmRadio*100 }}%</span>
        </template>
      </el-table-column>
      <el-table-column label="PM发放基数" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.productStageKpi.pmBase }}</span>
        </template>
      </el-table-column>
      <el-table-column label="PM浮动比例" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.productStageKpi.pmFloatRadio }}</span>
        </template>
      </el-table-column>
      <el-table-column label="PM绩效得分" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.productStageKpi.pmKpiLevelScore }}</span>
        </template>
      </el-table-column>
      <el-table-column label="PM绩效等级" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.productStageKpi.pmKpiLevelName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="PM绩效比例" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.productStageKpi.pmKpiLevelRadio }}</span>
        </template>
      </el-table-column>
      <el-table-column label="PM实际应发额度" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.productStageKpi.pmIncentiveQuota }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="created_at" label="操作" width="200">
        <template slot-scope="scope">
          <span>
            <el-button type="text" size="small" icon="el-icon-edit" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button type="text" size="small" icon="el-icon-edit" @click="handleExport(scope.row)">导出模板</el-button>
            <el-button type="text" size="small" icon="el-icon-edit" @click="handleImport(scope.row)">导入成员绩效</el-button>
            <el-button type="text" size="small" icon="el-icon-edit" @click="handleDetail(scope.row)">绩效详情</el-button>
            <el-button type="text" size="small" icon="el-icon-edit" @click="handlePrize(scope.row)">奖金分配</el-button>
          </span>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :size.sync="listQuery.size" @pagination="fetchData" />

    <el-dialog
      :title="textMap[dialogStatus]"
      :visible.sync="dialogFormVisible"
      width="50%"
    >
      <el-form
        ref="temp"
        :rules="rules"
        :model="temp"
        label-position="left"
        label-width="120px"
        style="margin-left: 50px"
      >
        <el-form-item label="当前阶段" prop="stageId">
          <el-select v-model="temp.stageId" :remote-method="getStage" filterable default-first-option remote placeholder="请选择当前阶段">
            <el-option v-for="(item,index) in stageOptions" :key="item+index" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="阶段评分：" prop="stageScore">
          <el-input
            v-model="temp.stageScore"
            size="small"
            autocomplete="off"
            placeholder="请输入标签名称"
          />
        </el-form-item>
        <el-form-item label="PM分配比例：" prop="pmRadio">
          <el-input
            v-model="temp.pmRadio"
            size="small"
            autocomplete="off"
            placeholder="请输入项目经理分配比例"
          />
        </el-form-item>
        <el-form-item label="PM浮动比例：" prop="pmFloatRadio">
          <el-input
            v-model="temp.pmFloatRadio"
            size="small"
            autocomplete="off"
            placeholder="请输入项目经理浮动比例"
          />
        </el-form-item>
        <el-form-item label="PM绩效得分：" prop="pmKpiLevelScore">
          <el-input
            v-model="temp.pmKpiLevelScore"
            size="small"
            autocomplete="off"
            placeholder="请输入备注信息"
          />
        </el-form-item>
        <!-- <el-form-item label="PM绩效等级：" prop="pmKpiLevelId">
          <el-select v-model="temp.pmKpiLevelId" :remote-method="getKpi" filterable default-first-option remote placeholder="请选择项目经理绩效等级">
            <el-option v-for="(item,index) in kpiOptions" :key="item+index" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item> -->
        <el-form-item label="备注：" prop="remark">
          <el-input
            v-model="temp.remark"
            size="small"
            autocomplete="off"
            placeholder="请输入备注信息"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" size="small" @click="updateStageKpiData"> 确认 </el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
// import { getList } from '@/api/auth'
import { getLists, exportMemberList, modifyData } from '@/api/achieve/product/stage'
import { computeMemberPrize } from '@/api/achieve/product/prize'
import { getAll } from '@/api/product/index'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination'
import { getAll as getStageAll } from '@/api/product/stage'
import { getAll as getKpiAll } from '@/api/config/inspirit/kpi'
// import { validAuth } from '@/utils/validate'

export default {
  components: { Pagination },
  directives: { waves },
  data() {
    const validateStageIdRequire = (rule, value, callback) => {
      if (value === '' || value === 0 || value === undefined) {
        this.$message({
          message: '项目阶段为必选项',
          type: 'error'
        })
        callback(new Error('请选择项目阶段'))
      } else {
        var numReg = /^[0-9]*$/
        var numRe = new RegExp(numReg)
        if (!numRe.test(value)) {
          this.$message({
            message: '请选择正确的项目阶段',
            type: 'error'
          })
          callback(new Error('请选择正确的项目阶段'))
        }
        callback()
      }
    }
    const validateStageScoreRequire = (rule, value, callback) => {
      if (value === '' || value === 0 || value === undefined) {
        this.$message({
          message: '阶段评分为必选项',
          type: 'error'
        })
        callback(new Error('请输入阶段评分'))
      } else {
        var numReg = /^[0-9]*$/
        var numRe = new RegExp(numReg)
        if (!numRe.test(value)) {
          this.$message({
            message: '请输入正确的阶段评分',
            type: 'error'
          })
          callback(new Error('请输入正确的阶段评分'))
        }
        callback()
      }
    }
    const validatePmRadioRequire = (rule, value, callback) => {
      if (value === '' || value === 0 || value === undefined) {
        this.$message({
          message: 'PM分配比例为必选项',
          type: 'error'
        })
        callback(new Error('请输入PM分配比例'))
      } else {
        callback()
      }
    }
    const validatePmFloatRadioRequire = (rule, value, callback) => {
      if (value === '' || value === undefined) {
        this.$message({
          message: 'PM浮动比例为必选项',
          type: 'error'
        })
        callback(new Error('请输入PM浮动比例'))
      } else {
        callback()
      }
    }
    const validatePmKpiLevelIdRequire = (rule, value, callback) => {
      if (value === '' || value === 0 || value === undefined) {
        this.$message({
          message: 'PM绩效等级为必选项',
          type: 'error'
        })
        callback(new Error('请选择PM绩效等级'))
      } else {
        var numReg = /^[0-9]*$/
        var numRe = new RegExp(numReg)
        if (!numRe.test(value)) {
          this.$message({
            message: '请选择正确的PM绩效等级',
            type: 'error'
          })
          callback(new Error('请选择正确的PM绩效等级'))
        }
        callback()
      }
    }
    return {
      textMap: {
        update: '编辑',
        create: '录入阶段绩效'
      },
      dialogStatus: '',
      temp: {},
      dialogFormVisible: false,
      list: null,
      total: 0,
      productAll: [],
      stageOptions: [],
      kpiOptions: [],
      listLoading: true,
      listQuery: {
        page: 1,
        size: 10
      },
      rules: {
        stageId: [{ validator: validateStageIdRequire }],
        stageScore: [{ validator: validateStageScoreRequire }],
        pmRadio: [{ validator: validatePmRadioRequire }],
        pmFloatRadio: [{ validator: validatePmFloatRadioRequire }],
        pmKpiLevelId: [{ validator: validatePmKpiLevelIdRequire }]
      }
    }
  },
  created() {
    this.fetchData()
    this.getProductAll()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getLists(this.listQuery).then(response => {
        this.list = response.data
        this.total = response.totalSize
        this.listLoading = false
      })
    },
    getProductAll() {
      getAll().then(response => {
        this.productAll = response
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.fetchData()
    },
    getStage(id) {
      getStageAll({ proId: id }).then(response => {
        if (!response) return
        this.stageOptions = []
        this.stageOptions.push({ id: 0, name: '请选择' })
        response.forEach((k, v) => {
          this.stageOptions.push({ id: k.id, name: k.name })
        })
      })
    },
    getKpi() {
      getKpiAll().then(response => {
        if (!response.Data) return
        this.kpiOptions = []
        this.kpiOptions.push({ id: 0, name: '请选择' })
        response.Data.forEach((k, v) => {
          this.kpiOptions.push({ id: k.Id, name: k.LevelName })
        })
      })
    },
    handleExport(row) {
      exportMemberList({ proId: row.productStageKpi.proId }).then(response => {
        // console.log('response----------------', response)
        // var path = 'http://10.24.12.84:8199' + response
        var path = 'http://localhost:8199' + response
        window.open(path, '_blank')
        this.fetchData()
      })
    },
    handleImport(row) {
      this.$router.push({
        path: '/achieve/import',
        query: {
          proId: row.productInfo.id,
          stageId: row.productInfo.proTypeStageId
        }
      })
    },
    handleDetail(row) {
      this.$router.push({
        path: '/achieve/detail',
        query: {
          id: row.productStageKpi.id,
          stageId: row.productStageKpi.stageId,
          proId: row.productInfo.id
        }
      })
    },
    handlePrize(row) {
      computeMemberPrize({ proId: row.productInfo.id, stageId: row.productStageKpi.stageId }).then(response => {
        this.$notify({
          title: '成功',
          message: '提交成功',
          type: 'success',
          duration: 2000
        })
        this.fetchData()
      })

      this.$router.push({
        path: '/achieve/prize',
        query: {
          id: row.productStageKpi.id,
          stageId: row.productStageKpi.stageId
        }
      })
    },
    handleEdit(row) {
      console.log('row---------------', row)
      this.temp = {
        id: row.productStageKpi.id,
        proId: row.productInfo.id,
        stageId: row.productStageKpi.stageId,
        stageScore: row.productStageKpi.stageScore,
        pmRadio: row.productStageKpi.pmRadio,
        pmFloatRadio: row.productStageKpi.pmFloatRadio,
        pmKpiLevelScore: row.productStageKpi.pmKpiLevelScore,
        remark: row.productStageKpi.remark
      }
      this.dialogFormVisible = true
      this.dialogStatus = 'modify'
      this.getStage(row.productInfo.id)
      this.getKpi()
      this.$nextTick(() => {
        this.$refs['temp'].clearValidate()
      })
    },
    updateStageKpiData() {
      console.log('this.temp---------------', this.temp)
      this.$refs.temp.validate(valid => {
        if (valid) {
          modifyData(this.temp).then(response => {
            this.$notify({
              title: '成功',
              message: '提交成功',
              type: 'success',
              duration: 2000
            })
            this.dialogFormVisible = false
            this.loading = false
            this.fetchData()
          })
        }
      })
    }
  }
}
</script>

