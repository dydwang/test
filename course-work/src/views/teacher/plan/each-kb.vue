<template>
    <div>
      <table class="table1">
        <tr>
          <td>{{list[0]}}</td>
          <td>{{list[1]}}</td>
          <td>{{list[2]}}</td>
          <td>{{list[3]}}</td>
          <td>{{list[4]}}</td>
          <td>{{list[5]}}</td>
          <td>{{list[6]}}</td>
          <td>{{list[7]}}</td>
        </tr>
      </table>
    </div>
</template>

<script>
export default {
  name: 'each-kb',
  data () {
    return {}
  },
  props: {
    list: {
      type: Array
    }
  }
}
</script>

<style scoped>
.table1{
  width: 100%;
  min-height: 25px;
  line-height: 25px;
  text-align: center;
  border-collapse: collapse;
}
.table1 td{
  width: 12.5%;
  border:1px solid #0094ff;
}
</style>
