# ESLint

## ESLint とは

javascript のリンター（静的開発ツール）。
現在の javascript 開発で使用されるリンターのデファクトスタンダード。

ESLint のメリットを一言でいうと、ソースコードの品質が向上すること。

具体的には、以下のようなメリットが挙げられる。

- 複数人開発の際に、コーディングのフォーマットを統一出来る
- コーディング規約の違反箇所を検知
- バグになりそうな箇所を事前に検知できる

## ESLint の特色

- 各プロジェクトごとに固有の設定を行うことが出来る。
- プラグインが多数開発されており、プロジェクト環境にあった設定が容易

## 利用方法

npm で、ESLint のライブラリをインストール
ESLint の利用は開発環境のみで良いため、--save-dev オプションを付けるのが望ましい。

```
$ npm install --save-dev eslint
```

インストール出来たら、以下コマンドで確認。

```
$ eslint -v
v6.0.0
```

## 設定方法

設定方法は、以下の２通りが存在する。

- package.json 内に、eslintConfig というフィールドを用意し、設定を記述
- ルートディレクトリに、.eslintrc.{json | yml | js}という名前で設定ファイルを作成

以下コマンドを使用すると、対話形式で設定ファイルを作成可能

```
$ eslint --init
```

## 備考

ESLint のルール数は、多すぎて把握しきれない（１から作り上げるのはコスパが悪い）ため、共有設定を使用すると手間を省くことが出来る。
共有設定とは、ESLint を導入している各企業が、設定を npm のプラグインとして提供してくれているもの。
ESLint の開発元や、Google などが ESLint の設定を公開してくれているので、信頼性も高い。

参考ページ）
[ESLint ことはじめ](https://qiita.com/mysticatea/items/f523dab04a25f617c87d)
[ESLint と「eslint --init」による「.eslintrc.json」の生成](https://www.konosumi.net/entry/2019/09/01/165449)
[共有設定でらくらく ESLint](https://qiita.com/mysticatea/items/dc35ced6bd5e782f50cd)
