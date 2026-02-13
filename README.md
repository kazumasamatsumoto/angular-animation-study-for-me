# Angular Animations サンプルアプリ

Angular v21 の `animate.enter` と `animate.leave` API を使用したアニメーションデモアプリケーションです。

## デモ内容

- **Enter/Leave デモ**: ボタンで要素の表示/非表示を切り替え、スライド＆フェードのアニメーションを確認できます
- **リストデモ**: アイテムの追加・削除時にアニメーションが適用されます

## 技術スタック

- Angular v21
- [animate.enter](https://angular.dev/guide/animations#animateenter) / [animate.leave](https://angular.dev/guide/animations#animateleave) - Angular コンパイラが直接サポートする API
- CSS キーフレームアニメーション & トランジション
- Angular Signals

## 開発サーバーの起動

```bash
npm start
# または
ng serve
```

ブラウザで `http://localhost:4200/` を開いてください。

## ビルド

```bash
npm run build
# または
ng build
```

## 参考

- [Angular Animations - Enter and Leave animations](https://angular.dev/guide/animations)
