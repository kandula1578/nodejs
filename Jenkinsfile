pipeline {
    agent any 
    environment {
    DOCKER_REGISTRY = 099532347933.dkr.ecr.us-east-2.amazonaws.com
    APP_NAME = docker-hub
    
//     DOCKERHUB_CREDENTIALS = credentials('kandula-dockerhub')
//     BRANCH = "${env.GIT_BRANCH}.${BUILD_NUMBER}"
//     TAG = BRANCH.substring(7,BRANCH.length())   
    }
    stages { 
        stage('SCM Checkout') {
            steps{
            git 'https://github.com/kandula1578/nodejs.git'
            }
        }

        stage('Build docker image') {
            steps {
                sh 'docker build -t $DOCKER_REGISTRY/$APP_NAME:latest .'
//                 sh 'docker build -t kandula17/nodeapp:${GIT_BRANCH#*/} .'
            }
        }
        stage('login to dockerhub') {
            steps{
                withAWS(credentials: 'jenkins-test-user', region: 'us-east-1') {
                    aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 099532347933.dkr.ecr.us-east-2.amazonaws.com
                }
//                 sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('push image') {
            steps{
                sh 'docker push $DOCKER_REGISTRY/$APP_NAME:latest'
//                 sh 'docker push kandula17/nodeapp:${GIT_BRANCH#*/}'
            }
        }
}
post {
        always {
            sh 'docker logout'
        }
    }    
}
