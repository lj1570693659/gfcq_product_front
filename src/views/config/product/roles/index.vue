<template>
  <div class="app-container">
    <el-button type="primary" size="small" icon="el-icon-circle-plus-outline" style="margin: 10px 0" @click="handleCreate">添加</el-button>
    <el-table v-loading="listLoading" :data="tableData" style="width: 100%; margin-bottom: 20px  margin-bottom: 20px" row-key="value" stripe size="medium" :tree-props="{ children: 'children' }">
      <el-table-column prop="label" label="角色名称" />
      <el-table-column prop="explain" label="角色与职责说明" />
      <el-table-column prop="remark" label="备注" />
      <el-table-column label="操作" :align="alignDir" width="180">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleUpdate(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="deleteClick(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :title="textMap[dialogStatus]"
      :visible.sync="dialogFormVisible"
      width="50%"
    >
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="left"
        label-width="120px"
        style="margin-left: 50px"
      >
        <el-form-item v-if="dialogStatus !== 'update'" label="层级：" prop="pid">
          <el-select v-model="temp.pid" placeholder="请选择层级" size="small" @change="locationChange">
            <el-option key="0" label="顶层标准" value="0" />
            <el-option v-for="item in locationData" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="角色名称：" prop="label">
          <el-input
            v-model="temp.label"
            size="small"
            autocomplete="off"
            placeholder="请输入角色名称"
          />
        </el-form-item>
        <el-form-item label="角色与职责说明" prop="explain">
          <el-input
            v-model="temp.explain"
            size="small"
            autocomplete="off"
            placeholder="请输入角色与职责说明"
          />
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input
            v-model="temp.remark"
            size="small"
            autocomplete="off"
            placeholder="请输入备注"
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
import Vue from 'vue'
import { getLists, createData, modifyData, deleteData } from '@/api/config/product/roles'

export default {
  name: 'Tag',
  data() {
    return {
      alignDir: 'center',
      textMap: {
        update: '编辑',
        create: '添加'
      },
      dialogStatus: '',
      parentId: 0,
      dialogFormVisible: false,
      temp: {},
      isResouceShow: 1,
      sonStatus: false,
      casArr: [],
      idx: '',
      childKey: [],
      rules: {
        location: [
          {
            required: true,
            message: '请选择层级',
            trigger: 'blur'
          }
        ],
        label: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        children: [
          {
            required: true,
            message: '请选择子位置',
            trigger: 'blur'
          }
        ]
      },
      locationData: [],
      tableData: [],
      listLoading: true
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      this.listLoading = true
      getLists().then(response => {
        this.listLoading = false
        response.forEach((k, v) => {
          var item = { tagId: k.id, label: k.name, parent: k.pid, explain: k.explain, remark: k.remark, value: k.id, children: [] }
          var children = []
          var childKey = []
          if (k.childLevel.length > 0) {
            k.childLevel.forEach((kc, vc) => {
              childKey[k.id] = 0
              childKey[kc.id] = vc + 1
              var itemc = { tagId: kc.id, label: kc.name, parent: kc.pid, remark: kc.remark, explain: kc.explain, value: String(k.id) + '-' + String(kc.id), children: [], childKey: childKey }
              children[kc.id] = itemc
            })
            item.children = children
          }
          Vue.set(this.tableData, k.id, item)
          Vue.set(this.locationData, v, { id: k.id, name: k.name })
        },
        )
      })
    },
    // 递归寻找同级
    findSameTable(arr, i, casArr) {
      if (i === casArr.length - 1) {
        return arr
      } else {
        return this.findTable(
          arr[casArr[i].substr(casArr[i].length - 1, 1)].children,
          (i += 1),
          casArr
        )
      }
    },
    // 寻找父级
    findTable(arr, i, casArr) {
      if (i === casArr.length - 1) {
        const index = casArr[i].substr(casArr[i].length - 1, 1)
        return arr[index]
      } else {
        return this.findTable(
          arr[casArr[i].substr(casArr[i].length - 1, 1)].children,
          (i += 1),
          casArr
        )
      }
    },
    // 递归表格数据(添加)
    find(arr, i) {
      if (i === this.casArr.length - 1) {
        return arr[this.casArr[i].substr(this.casArr[i].length - 1, 1)]
          .children
      } else {
        return this.find(
          arr[this.casArr[i].substr(this.casArr[i].length - 1, 1)]
            .children,
          (i += 1)
        )
      }
    },
    // 递归表格数据(编辑)
    findSd(arr, i, casArr) {
      if (i === casArr.length - 1) {
        const index = casArr[i]
        return arr.splice(index, 1, this.temp)
      } else {
        return this.findSd(
          arr[casArr[i]].children,
          (i += 1),
          casArr
        )
      }
    },
    // 递归寻找同步名称
    findLable(arr, i, casArr) {
      if (casArr[i] !== 0) {
        if (typeof (this.parent) !== 'undefined') {
          return arr[i]
        } else {
          const index = casArr[i]
          return arr[index]
        }
      } else {
        this.parent = i
        return this.findLable(
          arr[i].children,
          (i += 1),
          casArr
        )
      }
    },
    // 同步子名称
    useChildLable(arr) {
      if (arr !== []) {
        arr.parent = this.temp.label
        arr.forEach((item) => {
          item.parent = this.temp.label
        })
      }
    },
    // 递归表格数据(删除)
    findDel(arr, i, item) {
      const casArr = item.childKey
      if (i === casArr.length - 2) {
        const index = casArr[i].substr(casArr[i].length - 1, 1)
        arr[index].children.forEach((it, ix, arrs) => {
          if (it === item) {
            return arrs.splice(ix, 1)
          }
        })
      } else {
        return this.findDel(
          arr[casArr[i].substr(casArr[i].length - 1, 1)].children,
          (i += 1),
          item
        )
      }
    },
    // 置空
    resetTemp() {
      this.temp = {}
    },
    // 打开添加
    handleCreate() {
      this.resetTemp()
      this.dialogFormVisible = true
      this.dialogStatus = 'create'
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    // 添加
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          if (this.sonStatus === false) {
            this.temp.value = String(this.tableData.length)
            const obj = Object.assign({}, this.temp)
            obj.children = []
            obj.parent = ''
            this.tableData.push(obj)
            this.$message({
              type: 'success',
              message: '添加成功'
            })
            this.dialogFormVisible = false
          } else {
            const arr = this.find(this.tableData, 0)
            this.temp.value =
                                String(this.casArr[this.casArr.length - 1]) +
                                '-' +
                                String(arr.length)
            delete this.temp.children

            const obj = Object.assign({}, this.temp)
            obj.children = []
            obj.childKey = [...this.casArr, String(arr.length)]
            obj.parent = this.findTable(
              this.tableData,
              0,
              this.casArr
            ).label
            if (this.temp.location === '2') {
              obj.location = String(
                [...this.casArr, String(arr.length)].length
              )
            }
            arr.push(obj)
            this.$message({
              type: 'success',
              message: '添加成功'
            })
            this.dialogFormVisible = false
          }
          console.log('this.temp.location--------------', this.temp)
          var data = {
            id: 0,
            pid: this.temp.pid,
            name: this.temp.label,
            explain: this.temp.explain,
            remark: this.temp.remark
          }
          // if (this.temp.pid === '0') {
          //   data.name = this.temp.label
          // } else {
          //   data.name = this.tableData[this.temp.pid].label
          // }
          createData(data).then(response => {
            location.reload()
          })
        } else {
          return false
        }
      })
    },
    // 打开更新
    handleUpdate(row) {
      console.log('row---------------', row)
      row.value.length !== 1
        ? (this.sonStatus = true)
        : (this.sonStatus = false)
      this.temp = Object.assign({}, row) // copy obj
      if (row.childKey) {
        this.childKey = row.childKey
        this.idx = row.childKey[row.childKey.length - 1]
      } else {
        this.idx = row.value
      }
      console.log(this.idx)
      this.parentId = row.parent
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    // 更新
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          if (this.temp.parent === 0) {
            this.tableData.splice(this.idx, 1, this.temp)
            this.$message({
              type: 'success',
              message: '编辑成功'
            })
            this.dialogFormVisible = false
          } else {
            this.findLable(this.tableData, this.parentId, this.childKey)
            this.tableData[this.parentId].children[this.temp.tagId] = this.temp
            this.$message({
              type: 'success',
              message: '编辑成功'
            })
            this.dialogFormVisible = false
          }
          var data = {
            pid: this.temp.parent,
            name: this.temp.label,
            explain: this.temp.explain,
            remark: this.temp.remark,
            id: this.temp.tagId
          }
          if (this.temp.parent === 0) {
            data.name = this.temp.label
          }

          modifyData(data).then(response => {
            location.reload()
          })
        } else {
          return false
        }
      })
    },
    // 删除父级节点
    deleteParent(item) {
      this.tableData.forEach((it, ix, arrs) => {
        if (it === item) {
          return arrs.splice(ix, 1)
        }
      })
    },
    // 删除
    deleteClick(item) {
      this.$confirm(`此操作将删除该标签, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          if (item.children.length !== 0) {
            this.$message.warning({
              message: '请删除子节点',
              duration: 1000
            })
          } else {
            ++this.isResouceShow
            deleteData({ id: item.tagId }).then(response => {
              this.$message({
                type: 'success',
                message: '删除成功'
              })
            })
            location.reload()
          }
        })
        .catch((err) => {
          console.log(err)
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    // 是否显示次位置
    locationChange(v) {
      if (v === 2) {
        this.sonStatus = true
      } else {
        this.sonStatus = false
      }
    },
    // 获取次位置
    getCasVal(v) {
      this.casArr = v
    }
  }
}
</script>

