pipeline {
    agent any 
    environment {
    DOCKER_REGISTRY = 099532347933.dkr.ecr.us-east-2.amazonaws.com
    
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
                script{
                    app = docker.build("$DOCKER_REGISTRY/docker-hub:latest","-f Dockerfile .")
                }
//                  sh 'docker build -t $DOCKER_REGISTRY/docker-hub:latest .'
//                 sh 'docker build -t kandula17/nodeapp:${GIT_BRANCH#*/} .'
            }
        }
        stage('login to dockerhub') {
            steps{
                script{
                    docker.withRegistry('https://099532347933.dkr.ecr.us-east-2.amazonaws.com', 'ecr:us-east-2:aws-credentials') {
                        app.push("${env.BUILD_NUMBER}")
                        app.push("latest")
                    }                
//                  docker.withRegistry('https://099532347933.dkr.ecr.us-east-2.amazonaws.com', 'ecr:us-east-2:jenkins_ECR_user')
//                 withAWS(credentials: 'jenkins_ECR_user', region: 'us-east-2') {
//                     sh 'aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 099532347933.dkr.ecr.us-east-2.amazonaws.com'
//                 }
//                 sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
//         stage('push image') {
//             steps{
//                 sh 'docker push $DOCKER_REGISTRY/docker-hub:latest'
//                 sh 'docker push kandula17/nodeapp:${GIT_BRANCH#*/}'
//             }
//         }
}
post {
    always {
        sh 'docker logout'
    }  
}
}    
