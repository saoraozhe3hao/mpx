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

mock();
