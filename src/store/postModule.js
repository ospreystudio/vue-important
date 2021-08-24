import axios from "axios";

export default {
    state: () => ({
        posts: [],
        isPostsLoading: false,
        selectedSort: '',
        searchQuery:'',
        page: 1,
        limit: 10,
        totalPages: 0,
        sortOptions: [
            {
                value: 'title', name: 'По названию'
            },
            {
                value: 'body', name: 'По содержимому'
            }
        ]
    }),
    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },
        setPage(state, page) {
            state.posts = page
        },
        setLoading(state,bool) {
            state.isPostsLoading = bool
        },
        setTotalPages(state, totalPages) {
            state.isPostsLoading = totalPages
        },
        setSelectedSort(state, SelectedSort) {
            state.isPostsLoading = SelectedSort
        },
        setSearchQuery(state, searchQuery) {
            state.isPostsLoading = searchQuery
        },


    },
    actions: {
        async fetchPosts({state, commit}) {
            try {
                commit('setLoading', true)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                })
                commit('setTotalPages' , Math.ceil(response.headers['x-total-count'] / this.limit))
                commit('setPosts', response.data)

            } catch (e) {
                alert('Ошибка')
            } finally {
                commit('setLoading', false)
            }
        },
        async loadMorePosts({state, commit}) {
            try {
                commit('setPage', state.page + 1)

                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                })
                commit('setTotalPages',  Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', [...state.posts, ...response.data])
            } catch (e) {
                alert('Ошибка')
            }
        },
    },
    getters: {
        sortedPost(state) {
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        },
        sortedAndSearchedPost(state, getters) {
            return getters.sortedPost.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    namespaced: true
}