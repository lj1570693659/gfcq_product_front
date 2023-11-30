<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="项目名称" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="项目简称" prop="subName">
        <el-input v-model="form.subName" />
      </el-form-item>
      <el-form-item label="项目编号" prop="proNumber">
        <el-input v-model="form.proNumber" />
      </el-form-item>

      <el-form-item v-for="(item,index) in getRoleLists" :key="item+index" prop="fixBudget" :label="item.name" :value="item.id">
        <el-row v-for="(itemc,indexc) in item.children" :key="itemc+indexc" :label="itemc.name" :value="itemc.id">
          <el-col :span="8">
            <el-form-item label-width="80px" class="postInfo-container-item">
              <el-input v-if="itemc.isSpecial == 2" :label="itemc.name" :value="itemc.name" />
            </el-form-item>
          </el-col>

          <el-col v-if="itemc.isSpecial == 2" :span="10">
            <el-form-item label-width="120px" label="项目成员:" prop="fixBudget" class="postInfo-container-item">
              <el-select v-model="formSub[itemc.id]" placeholder="请选择项目成员" multiple clearable filterable style="width: 300px" class="filter-item">
                <el-option v-for="iteme in employeeAll" :key="iteme.WorkNumber" :label="iteme.UserName" :value="iteme.WorkNumber" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getInfo, webImportMember } from '@/api/product/index'
import { getEmployeeAll } from '@/api/system/organize/employee'
import { getLists } from '@/api/config/product/roles'

const defaultForm = {}

export default {
  isEdit: false,
  data() {
    return {
      id: 0,
      form: defaultForm,
      formSub: defaultForm,
      getRoleLists: [],
      typeOptions: [],
      employeeAll: [],
      stageOptions: [],
      instructorOptions: [],
      modeOptions: [],
      attributeOptions: [],
      statusOptions: [],
      rules: {
      }
    }
  },
  created() {
    // 初始化职级信息
    this.getProductMembereAll()
    this.getRoleAll()
    if (this.$route.query.id) {
      this.id = this.$route.query && this.$route.query.id
      this.fetchData(this.id)
    }
    this.tempRoute = Object.assign({}, this.$route)
  },
  methods: {
    onSubmit() {
      console.log('this.formSub---------', this.formSub)
      this.loading = true
      webImportMember({ proId: this.id, useridList: this.formSub }).then(response => {
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
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    getProductMembereAll() {
      getEmployeeAll().then(response => {
        this.employeeAll = response.Data
      })
    },
    getRoleAll() {
      getLists().then(response => {
        this.getRoleLists = response
      })
    },
    handleChangeType(e) {
      this.getStage(e)
    },
    fetchData(id) {
      getInfo({ id: id }).then(response => {
        this.isEdit = true
        this.form = response
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

  <style scoped>
  .line{
    text-align: center;
  }
  </style>

