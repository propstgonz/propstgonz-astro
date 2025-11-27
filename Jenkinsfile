pipeline {
  agent any

  environment {
    DEPLOY_DIR = "/home/docker/webservice/propstgonz-web/propstgonz-astro"
  }

  stages {

    stage('Checkout') {
      steps {
        git url: 'https://github.com/propstgonz/propstgonz-portfolio.git', branch: 'main'
      }
    }

    stage('Install Node & Dependencies') {
      steps {
        sh '''
          # Check Node, install if not present
          if ! command -v node >/dev/null 2>&1; then
            echo "Node not found. Installing Node 20..."
            curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
            sudo apt-get install -y nodejs
          fi

          npm install
        '''
      }
    }

    stage('Build Astro') {
      steps {
        sh '''
          npm run build
        '''
      }
    }

    stage('Deploy to production directory') {
      steps {
        sh '''
          echo "Deploying build to ${DEPLOY_DIR}"

          sudo mkdir -p "${DEPLOY_DIR}"

          # Remove everything except docker-compose.yml
          sudo find "${DEPLOY_DIR}" -mindepth 1 ! -name "docker-compose.yml" -exec rm -rf {} +

          # Copy Astro build
          sudo cp -r dist/* "${DEPLOY_DIR}/"
        '''
      }
    }

    stage('Recreate web container') {
      steps {
        sh '''
          echo "Recreating container in ${DEPLOY_DIR}"

          cd "${DEPLOY_DIR}"
          sudo docker compose up -d --force-recreate
        '''
      }
    }
  }

  post {
    success {
      echo "Deployment completed successfully."
    }
    failure {
      echo "Deployment failed."
    }
  }
}
