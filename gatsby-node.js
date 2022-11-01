exports.createPages = async ({ actions: { createSlice } }) => {
  createSlice({
    id: 'header',
    component: require.resolve('./src/components/header.js')
  });
};
