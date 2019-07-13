const preApi = '/server/api/v1/';

export default function ({
  $axios
}) {
  $axios.$get = function (api, data, $f) {
    $axios.get(`${preApi}${api}`, {
      params: data
    }).then(res => {
      if (res.status === 200) {
        $f && $f(res.data.obj, res.data.total, res.data.msg);
      } else {
        console.error('请求错误...');
      }
    });
  }

  $axios.$post = function (api, data, $f) {
    $axios.post(`${preApi}${api}`, data).then(res => {
      if (res.status === 200) {
        $f && $f(res.data.obj, res.total, res.msg);
      } else {
        console.error('请求错误...');
      }
    });
  }
}
