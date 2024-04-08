pipeline {
  agent { label 'DOSS-DCB_PRD_SKT-NDCBDAPI1' }

  stages {
    stage('Build') {
      steps {
        withEnv(["PATH+NODE=/data/nodejs/node-v14.15.3-linux-x64/bin"]) {
            sh 'yarn install'
            sh 'yarn build:prod'
        }              
      }
      post {
        success {
            sh 'tar -zcvf ./dist.tar.gz ./dist'
        }
      }
    }
  }
}