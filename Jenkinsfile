node {
    def app
    
    environment {
    DOCKER_REGISTRY = 099532347933.dkr.ecr.us-east-2.amazonaws.com   
    }

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    stage('Build image') {
				sh 'ls'
        app = docker.build("$DOCKER_REGISTRY/docker-hub:latest","-f Dockerfile .")
    }

    stage('login to ECR') {
        script{
            docker.withRegistry('https://099532347933.dkr.ecr.us-east-2.amazonaws.com', 'ecr:us-east-2:aws-credentials') {
                app.push("${env.BUILD_NUMBER}")
                app.push("latest")
            }
        }
    }
}
