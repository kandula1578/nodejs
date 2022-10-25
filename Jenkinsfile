pipeline {
    agent any

    environment {
        COMMIT_HASH = sh(returnStdout: true, script: 'git rev-parse --short=4 HEAD').trim()
        BRANCH = "${env.GIT_BRANCH}"
        TAG = "${env.BRANCH}.${env.COMMIT_HASH}.${env.BUILD_NUMBER}".drop(15)
        DEV_TAG = "${env.BRANCH}.${env.COMMIT_HASH}.${env.BUILD_NUMBER}".drop(7)
        VERSION = "${env.TAG}"
    }
    
    stages {
        stage("checkout") {
            when {
                    branch "origin/develop"
                }
            steps {
                sh "printenv | sort"
                echo "Dev Tag is -- ${env.DEV_TAG}"
                echo "Version is -- ${env.$VERSION}"
                VERSION = "${env.DEV_TAG}"
            }
        }
    }
}
