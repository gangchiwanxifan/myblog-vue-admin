// module.exports = {
//   css: {
//     loaderOptions: {
//       less: {
//         lessOptions: {
//           modifyVars: {
//             "primary-color": "#FA541C"
//           },
//           javascriptEnabled: true
//         },
//         javascriptEnabled: true
//       }
//     }
//   }
// };

module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          //在此处设置，也可以设置直角、边框色、字体大小等
          "primary-color": "#FA541C"
        },
        javascriptEnabled: true
      }
    }
  }
};
