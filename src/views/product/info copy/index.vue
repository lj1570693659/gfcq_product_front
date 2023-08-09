<template>
  <div class="app-container">
    <div>
      <el-form ref="form" :model="form" label-width="120px">

        <el-form-item label="" prop="fixBudget">
          <el-row>
            <el-col :span="8">
              <el-form-item label-width="90px" label="项目名称:" class="postInfo-container-item">
                <el-input v-model="form.productInfo.name" :readonly="true" />
              </el-form-item>
            </el-col>

            <el-col :span="10">
              <el-form-item label-width="120px" label="项目经理:" prop="fixBudget" class="postInfo-container-item">
                <el-input v-model="form.productPm.userName" :readonly="true" />
                <!-- <el-input v-model="form.productPm.workNumber" :readonly="true" /> -->
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="" prop="fixBudget">
          <el-row>
            <el-col :span="8">
              <el-form-item label-width="90px" label="项目简称:" class="postInfo-container-item">
                <el-input v-model="form.productInfo.subName" :readonly="true" />
              </el-form-item>
            </el-col>

            <el-col :span="10">
              <el-form-item label-width="120px" label="项目经理属性:" prop="fixBudget" class="postInfo-container-item">
                <el-input v-if="form.productInfo.attribute == 2" value="兼职" :readonly="true" />
                <el-input v-if="form.productInfo.attribute == 1" value="全职" :readonly="true" />
              </el-form-item>
            </el-col>

          </el-row>
        </el-form-item>

        <el-form-item label="" prop="fixBudget">
          <el-row>
            <el-col :span="8">
              <el-form-item label-width="90px" label="优先级评分:" class="postInfo-container-item">
                <el-input v-model="form.productInfo.lcScore" :readonly="true" />
              </el-form-item>
            </el-col>

            <el-col :span="10">
              <el-form-item label-width="120px" label="当前阶段:" prop="fixBudget" class="postInfo-container-item">
                <el-input v-model="form.productStage.name" :readonly="true" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="" prop="fixBudget">
          <el-row>
            <el-col :span="8">
              <el-form-item label-width="90px" label="项目类型:" class="postInfo-container-item">
                <el-input v-model="form.productType.name" :readonly="true" />
              </el-form-item>
            </el-col>

            <el-col :span="10">
              <el-form-item label-width="120px" label="首年净利润:" prop="fixBudget" class="postInfo-container-item">
                {{ form.productInfo.netProfit / 10000 }}（万元）
                <!-- <el-input v-model="form.productInfo.netProfit" :readonly="true" /> -->
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="" prop="fixBudget">
          <el-row>
            <el-col :span="8">
              <el-form-item label-width="90px" label="研发模式:" class="postInfo-container-item">
                <el-input v-model="form.productMode.name" :readonly="true" />
              </el-form-item>
            </el-col>

            <el-col :span="10">
              <el-form-item label-width="120px" label="激励预算:" prop="fixBudget" class="postInfo-container-item">
                <el-input v-model="form.productInfo.incentiveBudget" :readonly="true" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </div>
    <el-table v-loading="listLoading" :data="memberList" border highlight-current-row style="width: 100%;margin-top:20px;">
      <el-table-column align="center" label="序号">
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="项目角色">
        <template slot-scope="scope">
          {{ scope.row.productMemberInfo.prName }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="工号">
        <template slot-scope="scope">
          {{ scope.row.productMemberInfo.workNumber }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="姓名">
        <template slot-scope="scope">
          {{ scope.row.employeeInfo.UserName }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="分类">
        <template slot-scope="scope">
          {{ scope.row.productMemberInfo.type }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="投入占比">
        <template slot-scope="scope">
          {{ scope.row.productMemberInfo.putInto.toFixed(2) }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="责任系数">
        <template slot-scope="scope">
          {{ scope.row.productMemberInfo.dutyIndex }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="职级">
        <template slot-scope="scope">
          {{ scope.row.jobLevelInfo.Name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="责任和职务">
        <template slot-scope="scope">
          {{ scope.row.productMemberInfo.specificDuty }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="工作地">
        <template slot-scope="scope">
          {{ scope.row.productMemberInfo.workAddress }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="主导方">
        <template slot-scope="scope">
          <span v-if="scope.row.productMemberInfo.isGuide == 1">是</span>
          <span v-if="scope.row.productMemberInfo.isGuide == 0">否</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="支持方">
        <template slot-scope="scope">
          <span v-if="scope.row.productMemberInfo.isSupport == 1">是</span>
          <span v-if="scope.row.productMemberInfo.isSupport == 0">否</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="备注">
        <template slot-scope="scope">
          {{ scope.row.productMemberInfo.remark }}
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :size.sync="listQuery.size" @pagination="fetchData" />
  </div>
</template>

<script>

import { getDetail, getMemberLists } from '@/api/product/index'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

const defaultForm = {
  id: 0,
  productInfo: {
    name: ''
  },
  productStage: {
    name: ''
  },
  productType: {
    name: ''
  },
  productMode: {
    name: ''
  },
  productPm: {
    userName: ''
  },
  name: '',
  subName: '', // 文章题目
  lcScore: 0, // 文章内容
  tid: 0, // 文章摘要
  modeId: 0, // 文章外链
  pmId: 0, // 文章图片
  attribute: 0, // 前台展示时间
  pmlId: 0,
  status: 1,
  proTypeStageId: 0,
  fixType: 0,
  fixBudget: 0,
  invest: 0,
  netProfit: 0,
  remark: ''
}

export default {
  components: { Pagination },
  proId: 0,
  data() {
    return {
      form: defaultForm,
      memberList: [],
      tableHeader: [],
      total: 0,
      listLoading: true,
      listQuery: {
        proId: 0,
        page: 1,
        size: 10
      }
    }
  },
  created() {
    this.fetchData()
    this.fetchDetailData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      this.proId = this.$route.query.id
      getMemberLists({ page: this.listQuery.page, size: this.listQuery.size, proId: this.proId }).then(response => {
        this.memberList = response.data
        this.total = response.totalSize
        this.size = response.size
        this.listLoading = false
      }).catch(err => {
        console.log(err)
      })
    },
    fetchDetailData() {
      getDetail({ id: this.proId }).then(response => {
        this.form = response
        console.log('form-------', this.form)
      }).catch(err => {
        console.log(err)
      })
    },
    onSubmit() {
      var subData = {
        proId: this.$route.query.id,
        memberList: this.memberList,
        tableHeader: this.tableHeader
      }
      getDetail(subData).then(response => {
        this.$notify({
          title: '成功',
          message: '提交成功',
          type: 'success',
          duration: 2000
        })
        this.loading = false
        this.$router.push({
          path: '/product/index'
        })
      })
    }
  }
}
</script>

