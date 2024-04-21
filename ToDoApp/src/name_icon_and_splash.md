# Editar nome, ícone e splash

## Editar o nome exibido do app

  - Abrir o arquivo `android/app/src/main/res/values/strings.xml`
  - Alterar o valor da chave `app_name` para o nome desejado

## Editar ícone

  - Os ícones ficam salvos em `android/app/src/main/res/mipmap-*/` nos arquivos `ic_launcher.png` e `ic_launcher_round.png`
  - Substituir os arquivos pelos ícones desejados, mantendo o mesmo nome
  - Para criar os ícones, recomendo os sites:
    - [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html)
    - [IconKitchen](https://icon.kitchen/)
    - Nestes sites, os ícones já são gerados nos tamanhos corretos e com a mesma estrutura de pasta

## Editar splash

  - Criar o arquivo `splash.xml` em `android/app/src/main/res/drawable/` com o conteúdo:

    - ```xml
        <?xml version="1.0" encoding="utf-8"?>
        <layer-list xmlns:android="http://schemas.android.com/apk/res/android">
          <item android:drawable="@color/splash_background"/>
          <item
            android:drawable="@mipmap/logo"
            android:height="150dp"
            android:width="150dp"
            android:gravity="center"
          />
        </layer-list>
      ```
    - Alterar o valor da chave `android:height` e `android:width` para o tamanho desejado
  - Criar o arquivo `colors.xml` em `android/app/src/main/res/values/` com o conteúdo:

    - ```xml
        <?xml version="1.0" encoding="utf-8"?>
        <resources>
          <color name="splash_background">#fff</color>
        </resources>
      ```
    - Alterar o valor da chave `splash_background` para a cor desejada
  - Adicionar a imagem do logo em `android/app/src/main/res/mipmap-*/` com o nome `logo.png`
  - Editar o arquivo `styles.xml` em `android/app/src/main/res/values/` e inserir os itens abaixo:

    - ```xml
        <item name="android:statusBarColor">
            @color/splash_background
        </item>
        <item name="android:windowBackground">
            @drawable/splash
        </item>
      ```
  - Para que as mudanças tenham efeito, é necessário reinstalar o app
