# Construir APK

- Abrir terminal em C:\Program Files\Java\jdk-XX\bin como administrador

  - Certifique-se de que este caminho está adicionado em "Path" nas variáveis de ambiente
  - Executar o comando abaixo para gerar a chave de assinatura
  - ```
      keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
    ```
  - Este comando vai solicitar senha e informações do desenvolvedor
  - Ao final, será gerado o arquivo my-upload-key.keystore
  - Mover o arquivo gerado para a pasta android/app
- Editar o arquivo android/gradle.properties e adicionar as linhas abaixo, substituindo os valores dos passwords

  - ```
      MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
      MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
      MYAPP_UPLOAD_STORE_PASSWORD=****
      MYAPP_UPLOAD_KEY_PASSWORD=****
    ```
- Editar o arquivo android/app/build.gradle e altere a seção android { ... } para incluir as configurações de assinatura

  - ```
      ...
      android {
          ...
          defaultConfig { ... }
          signingConfigs {
              release {
                  if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                      storeFile file(MYAPP_UPLOAD_STORE_FILE)
                      storePassword MYAPP_UPLOAD_STORE_PASSWORD
                      keyAlias MYAPP_UPLOAD_KEY_ALIAS
                      keyPassword MYAPP_UPLOAD_KEY_PASSWORD
                  }
              }
          }
          buildTypes {
              release {
                  ...
                  signingConfig signingConfigs.release
              }
          }
      }
      ...
    ```

  ```

  ```
- No diretório android, executar os comandos abaixo para gerar o arquivo .apk

  - Limpar builds anteriores:
    - ```bash
        ./gradlew clean 
      ```
  - Gerar o arquivo .apk:
    - ```bash
        ./gradlew assembleRelease
      ```
    - O arquivo .apk será gerado em android/app/build/outputs/apk/release/app-release.apk
    - Este arquivo pode ser instalado em dispositivos Android
