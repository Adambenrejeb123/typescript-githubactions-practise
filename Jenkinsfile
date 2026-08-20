pipeline {
    agent {
        docker {
            image 'node:24-alpine'
        }
    }

    stages {
        stage('Show environment') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Verify') {
            steps {
                sh 'npm run verify'
            }
        }
    }
}