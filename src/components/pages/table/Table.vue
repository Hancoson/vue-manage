/*
 * @Author: Guoxing.han 
 * @Date: 2017-04-28 14:08:38 
 * @Last Modified by: Guoxing.han 
 * @version 0.0.1 
  */
  <template>
  <div>
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-menu"></i> 表格</el-breadcrumb-item>
        <el-breadcrumb-item>基础表格</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-table :data="tableData" border style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}" v-loading="loading" element-loading-text="拼命加载中">
      <el-table-column prop="id" label="ID" sortable width="150">
      </el-table-column>
      <el-table-column prop="date" label="日期" sortable width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" sortable width="120">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" sortable width="220">
      </el-table-column>
      <el-table-column prop="address" label="地址" :formatter="formatter">
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template scope="props">
          <el-button-group>
            <el-button type="primary" icon="edit" @click="handleEdit(props.$index, props.row)"></el-button>
            <el-button type="primary" icon="delete" @click="handleDelete(props.$index, props.row)"></el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination layout="prev, pager, next" :total="1000" @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cur_page: 1,
      tableData: [],
      loading: false
    }
  },

  created() {
    this.getData();
  },
  methods: {
    getData() {
      let that = this;
      this.$axios.get('/api/table', { page: that.cur_page }).then((res) => {
        that.loading = false;

        that.tableData = res.data.data;
      })
    },
    formatter(row, column) {
      return row.address;
    },
    handleCurrentChange(val) {
      let that = this;
      this.loading = true;
      setTimeout(() => { that.getData(); }, 1000)
      this.cur_page = val;

    },
    handleEdit(id, row) {
      this.msg(`修改了第${id}条数据`)
      console.log(id, row)
    },
    handleDelete(id, row) {
      this.msg(`删除了第${id}条数据`)
      console.log(id, row)
    },

    msg(text) {
      this.$message({
        message: text,
        type: 'warning'
      });
    },
  }
}
</script>
<style>
.pagination {
  margin-top: 20px;
  float: right
}
</style>