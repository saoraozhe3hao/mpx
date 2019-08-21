import Mock from '@mpxjs/mock'

function mock() {
  Mock([
    {
      url: /\/product$/,
      rule: {
        data: [
          {
            name: '小六打野'
          },
          {
            name: '野食小子'
          }
        ]
      }
    },
    {
      url: /\/login$/,
      rule: {
        header: {}
      }
    }
    ]);
}

if (window.location && window.location.hostname === "127.0.0.1") {
  mock();
}
