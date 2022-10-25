pipeline {
    agent any 
    parameters {
    choice(name: 'Branch', choices: ['master', 'dev', 'uat'], description: 'Pick something')
    }
    environment {
    DOCKERHUB_CREDENTIALS = credentials('kandula-dockerhub')
//     BRANCH = "${env.Branch}"
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
                sh 'docker build -t kandula17/nodeapp:${Branch} . '
            }
        }
        stage('login to dockerhub') {
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
//         stage('push image') {
//             steps{
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
