<template lang="html">
  <div class="">
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-date"></i> Mock开发</el-breadcrumb-item>
            <el-breadcrumb-item>接口编辑</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="接口编辑" name="first">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm dictory">
          <el-form-item label="接口名称" prop="name">
            <el-input class="smInput" v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="接口方式" prop="type">
            <el-select v-model="ruleForm.type" placeholder="请选择">
              <el-option label="GET" value="GET"></el-option>
              <el-option label="POST" value="POST"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="接口描述" prop="desc">
            <el-input class="smInput" type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item label="接口路径" prop="path">
            <el-input class="smInput" v-model="ruleForm.path"></el-input>
          </el-form-item>
          <el-form-item label="负责人" prop="staff">
            <el-input class="smInput" v-model="ruleForm.staff"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import api from '../../api/index.js';
export default {
  data() {
    const checkName = function(rule,value,callback){
      if (value === '') {
        callback(new Error('请输入接口名称'));
      }else{
        callback()
      }
      // else{
      //   self.$store.dispatch('selectInterfaceByName',{'name':value,'belong':self.ruleForm.belong})
      //   .then(()=>{
      //     if(self.use){
      //       callback();
      //     }else{
      //       callback(new Error('该接口名称已在本项目存在'))
      //     }
      //   })
      // }
    };
    return {
      activeName:'first',
      value:'',
      ruleForm:{
        name:'',
        type:'',
        desc:'',
        path:'',
        staff:'',
        tag:'',
        belong:''
      },
      rules:{
        name: [
          { validator: checkName, trigger: 'submit' }
        ],
        type: [
          { required: true, message: '请选择接口类型', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请填写接口描述', trigger: 'blur' }
        ],
        path: [
          { required: true, message: '请填写接口路径', trigger: 'blur' }
        ],
        staff: [
          { required: true, message: '请填写负责人', trigger:'blur' }
        ],
        tag: [
          { required: true, message: '请选择接口类别', trigger:'blur' }
        ],
        belong: [
          { required: true, message: '请选择所属项目', trigger:'blur'}
        ]
      }
    }
  },
  computed:{
  },
  methods:{
    submitForm(formName) {
      const self = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(123)
          api.addIntf({
            'name':self.ruleForm.name,
            'type':self.ruleForm.type,
            'desc':self.ruleForm.desc,
            'path':self.ruleForm.path,
            'staff':self.ruleForm.staff
          }).then((res)=>{
            console.log(res)
            // if(self.newInterfaceMsg == 'success'){
            //   self.$message.success('新建接口成功')
            //   self.resetForm('ruleForm')
            // }else{
            //   const h = self.$createElement;
            //   self.$notify({
            //     title: '失败提示',
            //     message: h('p', { style: 'color: red'}, '新建接口失败')
            //   });
            // }
          })
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
}
</script>

<style lang="css">
  .smInput{
    width: 50%;
  }
</style>
