pipeline {
    agent any 
    environment {
    DOCKER_REGISTRY = 099532347933.dkr.ecr.us-east-2.amazonaws.com   
    }
    
    stages { 
        stage('SCM Checkout') {
            steps{
            git 'https://github.com/kandula1578/nodejs.git'
            }
        }

        stage('Build docker image') {
            steps {
                script{
                    app = docker.build("$DOCKER_REGISTRY/docker-hub:latest","-f Dockerfile .")
                }
            }
        }
        stage('login to dockerhub') {
            steps{
                script{
                    docker.withRegistry('https://099532347933.dkr.ecr.us-east-2.amazonaws.com', 'ecr:us-east-2:aws-credentials') {
                        app.push("${env.BUILD_NUMBER}")
                        app.push("latest")
                    } 
                }
            }
        }
}
post {
    always {
        sh 'docker logout'
    }  
}   
