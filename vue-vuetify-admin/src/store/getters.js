const getters = {
  // user
  name: state => state.user.name,
  // tagView
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
};
export default getters;
