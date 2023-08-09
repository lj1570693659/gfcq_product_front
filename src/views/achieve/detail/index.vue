<template>
  <div class="icons-container">
    <el-tabs type="border-card">
      <el-tab-pane label="基本信息">
        <el-form ref="form" :model="form" label-width="10px">

          <el-form-item label="" prop="fixBudget">
            <el-row>
              <el-col :span="7">
                <el-form-item label-width="120px" label="项目经理:" prop="fixBudget" class="postInfo-container-item">
                  <el-input v-model="form.pmInfo.userName" :readonly="true" />
                </el-form-item>
              </el-col>

              <el-col :span="7">
                <el-form-item label-width="120px" label="PM分配比例:" prop="fixBudget" class="postInfo-container-item">
                  <el-input v-model="form.productStageKpi.pmRadio" :readonly="true" />
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label-width="90px" label="项目名称:" class="postInfo-container-item">
                  <el-input v-model="form.productInfo.product.name" :readonly="true" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form-item>

          <el-form-item label="" prop="fixBudget">
            <el-row>
              <el-col :span="7">
                <el-form-item label-width="120px" label="项目经理属性:" prop="attribute" class="postInfo-container-item">
                  <el-input v-if="form.productInfo.product.attribute == 2" value="兼职" :readonly="true" />
                  <el-input v-if="form.productInfo.product.attribute == 1" value="全职" :readonly="true" />
                </el-form-item>
              </el-col>

              <el-col :span="7">
                <el-form-item label-width="120px" label="PM发放基数:" prop="fixBudget" class="postInfo-container-item">
                  <el-input v-model="form.productStageKpi.pmBase" :readonly="true" />
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label-width="90px" label="当前阶段:" class="postInfo-container-item">
                  <el-input v-model="form.stageInfo.Single.name" :readonly="true" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form-item>

          <el-form-item label="" prop="fixBudget">
            <el-row>
              <el-col :span="7">
                <el-form-item label-width="120px" label="阶段比例:" prop="attribute" class="postInfo-container-item">
                  <el-input v-model="form.productStageKpi.stageRadio" :readonly="true" />
                </el-form-item>
              </el-col>

              <el-col :span="7">
                <el-form-item label-width="120px" label="PM浮动比例:" prop="fixBudget" class="postInfo-container-item">
                  <el-input v-model="form.productStageKpi.pmFloatRadio" :readonly="true" />
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label-width="90px" label="优先级评分:" class="postInfo-container-item">
                  <el-input v-model="form.productInfo.product.lcScore" :readonly="true" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="" prop="fixBudget">
            <el-row>
              <el-col :span="7">
                <el-form-item label-width="120px" label="阶段预算:" prop="attribute" class="postInfo-container-item">
                  <el-input v-model="form.productStageKpi.stageBudget" :readonly="true" />
                </el-form-item>
              </el-col>

              <el-col :span="7">
                <el-form-item label-width="120px" label="PM绩效等级:" prop="fixBudget" class="postInfo-container-item">
                  <el-input v-model="form.productStageKpi.pmKpiLevelName" :readonly="true" />
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label-width="90px" label="优先级:" class="postInfo-container-item">
                  <el-input v-model="form.productInfo.product.lccName" :readonly="true" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="" prop="fixBudget">
            <el-row>
              <el-col :span="7">
                <el-form-item label-width="120px" label="阶段评分:" prop="attribute" class="postInfo-container-item">
                  <el-input v-model="form.productStageKpi.stageScore" :readonly="true" />
                </el-form-item>
              </el-col>

              <el-col :span="7">
                <el-form-item label-width="120px" label="PM绩效比例:" prop="fixBudget" class="postInfo-container-item">
                  <el-input v-model="form.productStageKpi.pmKpiLevelRadio" :readonly="true" />
                </el-form-item>
              </el-col>

              <el-col :span="7">
                <el-form-item label-width="90px" label="项目类型:" class="postInfo-container-item">
                  <el-input v-model="form.productInfo.productType.name" :readonly="true" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="" prop="fixBudget">
            <el-row>

              <el-col :span="7">
                <el-form-item label-width="120px" label="应发比例:" prop="attribute" class="postInfo-container-item">
                  <el-input v-model="form.productInfo.productMode.name" :readonly="true" />
                </el-form-item>
              </el-col>

              <el-col :span="7">
                <el-form-item label-width="120px" label="PM实发额度:" prop="fixBudget" class="postInfo-container-item">
                  <el-input v-model="form.productStageKpi.pmIncentiveQuota" :readonly="true" />
                </el-form-item>
              </el-col>

              <el-col :span="7">
                <el-form-item label-width="90px" label="研发模式:" class="postInfo-container-item">
                  <el-input v-model="form.productInfo.productMode.name" :readonly="true" />
                </el-form-item>
              </el-col>

            </el-row>
          </el-form-item>
          <el-form-item label="" prop="fixBudget">
            <el-row>
              <el-col :span="7">
                <el-form-item label-width="120px" label="阶段额度:" prop="attribute" class="postInfo-container-item">
                  <el-input v-model="form.productStageKpi.stageQuota" :readonly="true" />
                </el-form-item>
              </el-col>

              <el-col :span="7">
                <el-form-item label-width="120px" label="PM分配比例:" prop="fixBudget" class="postInfo-container-item">
                  <el-input v-model="form.productStageKpi.pmRadio" :readonly="true" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="" prop="fixBudget">
            <el-row>
              <el-col :span="7">
                <el-form-item label-width="120px" label="团队额度:" prop="attribute" class="postInfo-container-item">
                  <el-input v-model="form.productStageKpi.crewQuota" :readonly="true" />
                </el-form-item>
              </el-col>

              <el-col :span="7">
                <el-form-item label-width="120px" label="PM发放基数:" prop="fixBudget" class="postInfo-container-item">
                  <el-input v-model="form.productStageKpi.pmBase" :readonly="true" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="" prop="fixBudget">
            <el-row>
              <el-col :span="7">
                <el-form-item label-width="120px" label="团建额度:" prop="attribute" class="postInfo-container-item">
                  <el-input v-model="form.productStageKpi.teamBuildQuota" :readonly="true" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="" prop="fixBudget">
            <el-row>
              <el-col :span="7">
                <el-form-item label-width="120px" label="业务支持额度:" prop="attribute" class="postInfo-container-item">
                  <el-input v-model="form.productStageKpi.supportQuota" :readonly="true" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="成员绩效">
        <div style="margin:0 0 5px 20px" />
        <fixed-thead />
      </el-tab-pane>
      <el-tab-pane label="关键事件清单">

        <!-- <div class="filter-container">
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
            {{ $t('table.add') }}
          </el-button>
        </div> -->

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
          <el-table-column label="发生日期" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.productMemberKey.happenTime }}</span>
            </template>
          </el-table-column>
          <el-table-column label="关键事件" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.productMemberKey.keyName }}</span>
            </template>
          </el-table-column>
          <el-table-column label="当事人" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.productMemberKey.username }}</span>
            </template>
          </el-table-column>
          <el-table-column label="事件分类" align="center">
            <template slot-scope="scope">
              <span v-if="scope.row.productMemberKey.type == 1">加班贡献</span>
              <span v-if="scope.row.productMemberKey.type == 2">解决问题贡献</span>
              <span v-if="scope.row.productMemberKey.type == 3">其他事件贡献</span>
            </template>
          </el-table-column>
          <el-table-column label="处理结果" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.productMemberKey.result }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="created_at" label="操作" width="200">
            <template slot-scope="scope">
              <span>
                <el-button type="text" size="small" icon="el-icon-edit" @click="handleEdit(scope.row)">编辑</el-button>
                <el-button type="text" size="small" icon="el-icon-delete" @click="handleDelete(scope.row)">删除</el-button>
              </span>
            </template>
          </el-table-column>
        </el-table>
        <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :size.sync="listQuery.size" @pagination="fetchData" />
      </el-tab-pane>
    </el-tabs>

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
        <el-form-item label="事件分类" prop="type">
          <el-select v-model="temp.type" filterable default-first-option remote placeholder="请选择事件分类">
            <el-option v-for="(item,index) in keyTypeOptions" :key="item+index" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="事件性质" prop="property">
          <el-select v-model="temp.property" filterable default-first-option remote placeholder="请选择事件性质">
            <el-option v-for="(item,index) in propertyOptions" :key="item+index" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="关键事件：" prop="keyName">
          <el-input
            v-model="temp.keyName"
            size="small"
            autocomplete="off"
            placeholder="请输入关键事件"
          />
        </el-form-item>
        <el-form-item label="处理结果：" prop="result">
          <el-input
            v-model="temp.result"
            size="small"
            autocomplete="off"
            placeholder="请输入事件处理结果"
          />
        </el-form-item>
        <el-form-item label="发生时间：" prop="happenTime">
          <el-date-picker v-model="temp.happenTime" type="date" placeholder="请选择事件发生时间" />
        </el-form-item>
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
        <el-button type="primary" size="small" @click="dialogStatus === 'create' ? createData() : updateData()"> 确认 </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import clipboard from '@/utils/clipboard'
import elementIcons from './element-icons'
import FixedThead from './dynamic-table/components/FixedThead'
import { getStageKpiInfo } from '@/api/achieve/product/stage'
import { getProductMemberKeyLists, createProductMemberKey, modifyProductMemberKey } from '@/api/achieve/product/prize'

const defaultKeyTypeOptions = [
  { id: 1, name: '加班贡献' },
  { id: 2, name: '解决问题贡献' },
  { id: 3, name: '其他事件贡献' }
]
// 1：正向激励 2：有待提高
const defaultPropertyOptions = [
  { id: 1, name: '正向激励' },
  { id: 2, name: '有待提高' }
]

export default {
  name: 'Icons',
  components: { FixedThead, Pagination },
  kpiId: 0,
  stageId: 0,
  data() {
    return {
      textMap: {
        update: '编辑',
        create: '录入阶段绩效'
      },
      rules: {},
      dialogStatus: '',
      temp: {},
      dialogFormVisible: false,
      form: {},
      list: [],
      keyTypeOptions: defaultKeyTypeOptions,
      propertyOptions: defaultPropertyOptions,
      listLoading: true,
      elementIcons,
      total: 0,
      listQuery: {
        page: 1,
        size: 10
      }
    }
  },
  created() {
    this.kpiId = this.$route.query.id
    this.stageId = this.$route.query.stageId
    this.fetchData()
    this.fetchKeyList()
  },
  methods: {
    fetchData() {
      getStageKpiInfo({ id: this.kpiId }).then(response => {
        this.form = response
      }).catch(err => {
        console.log(err)
      })
      this.listLoading = false
    },
    fetchKeyList() {
      getProductMemberKeyLists({ proStageId: this.stageId, page: this.listQuery.page, size: this.listQuery.size }).then(response => {
        this.total = response.totalSize
        this.list = response.data
      }).catch(err => {
        console.log(err)
      })
    },
    generateElementIconCode(symbol) {
      return `<i class="el-icon-${symbol}" />`
    },
    handleClipboard(text, event) {
      clipboard(text, event)
    },
    handleCreate(row) {
      this.temp = {}
      this.dialogFormVisible = true
      this.dialogStatus = 'create'
      this.$nextTick(() => {
        this.$refs['temp'].clearValidate()
      })
    },
    handleEdit(row) {
      this.dialogFormVisible = true
      this.dialogStatus = 'update'
      this.temp = {
        proId: row.productMemberKey.proId,
        stageKpiId: row.productMemberKey.stageKpiId,
        id: row.productMemberKey.id,
        keyName: row.productMemberKey.keyName,
        happenTime: row.productMemberKey.happenTime,
        type: row.productMemberKey.type,
        property: row.productMemberKey.property,
        result: row.productMemberKey.result,
        remark: row.productMemberKey.remark
      }
      this.dialogFormVisible = true
      this.dialogStatus = 'modify'
      this.$nextTick(() => {
        this.$refs['temp'].clearValidate()
      })
    },
    updateData() {
      modifyProductMemberKey(this.temp).then(response => {
        this.$notify({
          title: '成功',
          message: '编辑成功',
          type: 'success',
          duration: 2000
        })
        this.dialogFormVisible = false
        this.fetchKeyList()
      }).catch(err => {
        console.log(err)
      })
    },
    createData() {
      createProductMemberKey().then(response => {
        this.form = response
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

  <style lang="scss" scoped>
  .icons-container {
    margin: 10px 20px 0;
    overflow: hidden;

    .grid {
      position: relative;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }

    .icon-item {
      margin: 20px;
      height: 85px;
      text-align: center;
      width: 100px;
      float: left;
      font-size: 30px;
      color: #24292e;
      cursor: pointer;
    }

    span {
      display: block;
      font-size: 16px;
      margin-top: 10px;
    }

    .disabled {
      pointer-events: none;
    }
  }
  </style>

