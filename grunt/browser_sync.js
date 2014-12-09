module.exports = {
    dev: {
        files: {
            src : ['<%= appConfig.rutadev %>/css/commons.css']
        },
        options: {
            watchTask: true
        } 
    },
    pro: {
        files: {
            src : ['<%= appConfig.rutapro %>/css/commons.min.css']
        }
    }
}