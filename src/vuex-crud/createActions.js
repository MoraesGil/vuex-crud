const createActions = ({ actions, rootUrl, client, only }) => {
  const crudActions = {};

  if (only.includes('FETCH_LIST')) {
    Object.assign(crudActions, {
      /**
       * GET /api/<resourceName>
       *
       * Fetch list of resources.
       */
      fetchList({ commit }, { config } = {}) {
        commit('fetchListStart');

        return client.get(rootUrl, config)
          .then((res) => {
            commit('fetchListSuccess', res);

            return res;
          })
          .catch((err) => {
            commit('fetchListError', err);

            return Promise.reject(err);
          });
      }
    });
  }

  if (only.includes('FETCH_SINGLE')) {
    Object.assign(crudActions, {
      /**
       * GET /api/<resourceName>/:id
       *
       * Fetch single resource.
       */
      fetchSingle({ commit }, { id, config } = {}) {
        commit('fetchSingleStart');

        return client.get(`${rootUrl}/${id}`, config)
          .then((res) => {
            commit('fetchSingleSuccess', res);

            return res;
          })
          .catch((err) => {
            commit('fetchSingleError', err);

            return Promise.reject(err);
          });
      }
    });
  }

  if (only.includes('CREATE')) {
    Object.assign(crudActions, {
      /**
       * POST /api/<resourceName>
       *
       * Create a new reource.
       */
      create({ commit }, { data, config } = {}) {
        commit('createStart');

        return client.post(rootUrl, data, config)
          .then((res) => {
            commit('createSuccess', res);

            return res;
          })
          .catch((err) => {
            commit('createError', err);

            return Promise.reject(err);
          });
      }
    });
  }

  if (only.includes('UPDATE')) {
    Object.assign(crudActions, {
      /**
       * PATCH /api/<resouceName>/:id
       *
       * Update a single resource.
       */
      update({ commit }, { id, data, config } = {}) {
        commit('updateStart');

        return client.patch(`${rootUrl}/${id}`, data, config)
          .then((res) => {
            commit('updateSuccess', res);

            return res;
          })
          .catch((err) => {
            commit('updateError', err);

            return Promise.reject(err);
          });
      }
    });
  }

  if (only.includes('REPLACE')) {
    Object.assign(crudActions, {
      /**
       * PUT /api/<resouceName>/:id
       *
       * Update a single resource.
       */
      replace({ commit }, { id, data, config } = {}) {
        commit('replaceStart');

        return client.put(`${rootUrl}/${id}`, data, config)
          .then((res) => {
            commit('replaceSuccess', res);

            return res;
          })
          .catch((err) => {
            commit('replaceError', err);

            return Promise.reject(err);
          });
      }
    });
  }

  if (only.includes('DESTROY')) {
    Object.assign(crudActions, {
      /**
       * DELETE /api/<resouceName>/:id
       *
       * Destroy a single resource.
       */
      destroy({ commit }, { id, config } = {}) {
        commit('destroyStart');

        return client.delete(`${rootUrl}/${id}`, config)
          .then((res) => {
            commit('destroySuccess', id, res);

            return res;
          })
          .catch((err) => {
            commit('destroyError', err);

            return Promise.reject(err);
          });
      }
    });
  }

  return Object.assign(crudActions, actions);
};

export default createActions;
