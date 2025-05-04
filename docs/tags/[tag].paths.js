import { usePaths } from 'vitepress-openapi'
import spec from '../.vitepress/spec.js'

export default {
    paths() {
        return usePaths({ spec })
            .getTags()
            .map(({ name }) => {
                return {
                    params: {
                        tag: name,
                        pageTitle: `${name} - vitepress-openapi`,
                    },
                }
            })
    },
}
