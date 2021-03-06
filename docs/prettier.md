# prettier

## prettier とは

Node.js 上で動作する、コードフォーマッターのこと。

prettier を使用するメリットを一言でいうと、コードの品質向上。
具体的には、以下のようなメリットがある。

- 複数人開発におけるコードの書き方の差異をなくすことができる
- 書き方の差異がなくなるためコードレビュー時に、設計・ロジックの部分に集中出来る
- フォーマットを自動化することで、細かなコーディング規約に囚われなくなる

## 利用方法

npm で、prettier のライブラリをインストール
prettier の利用は開発環境のみで良いため、--save-dev オプションを付けるのが望ましい。

```
$ npm install --save-dev prettier
```

インストール出来たら、以下コマンドで確認。

```
$ prettier -v
X.X.X
```

## ESLint の fix オプションとの違い

リンターである ESLint にも、自動でコードをフォーマットしてくれる fix コマンドが用意されているが、  
以下の理由から prettier と併用することが望ましい。

- リントツールでは整形が行えない箇所がある
- リントツールは設定が細かいため、フォーマット用に設定を組むのが大変
- prettier では、可読性を意識した整形も行うことが出来る（ESLint では、あくまでエラー箇所のみ）

## ESLint との併存設定について

ESLint と prettier を併用する場合、うまく設定を合わせないとお互いが干渉し合ってしまい、挙動がおかしくなることがある。
現時点で、併用する際の最善策は、eslint-config-prettier というライブラリを使用すること。

詳しくは、prettier 公式を参照。
(Integrating with Linters)[https://prettier.io/docs/en/integrating-with-linters.html]

参考ページ）
(prettier ことはじめ)[https://qiita.com/shinshin86/items/c8b1f6b22b1bef3074c7#prettier%E3%81%AF%E3%81%98%E3%82%81%E3%81%BE%E3%81%97%E3%81%9F]
