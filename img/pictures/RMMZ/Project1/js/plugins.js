// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"PluginCommonBase","status":true,"description":"パラメータ解析を提供する共通基盤です","parameters":{}},
{"name":"LL_StandingPicture","status":true,"description":"メッセージウィンドウ表示時に立ち絵を表示します。","parameters":{"sPictures":"[\"{\\\"id\\\":\\\"k\\\",\\\"imageName\\\":\\\"こはるpng\\\",\\\"origin\\\":\\\"1\\\",\\\"x\\\":\\\"560\\\",\\\"y\\\":\\\"420\\\",\\\"x2\\\":\\\"20\\\",\\\"y2\\\":\\\"96\\\",\\\"x3\\\":\\\"50\\\",\\\"y3\\\":\\\"96\\\",\\\"x4\\\":\\\"50\\\",\\\"y4\\\":\\\"96\\\",\\\"reverse\\\":\\\"1\\\",\\\"scaleX\\\":\\\"100\\\",\\\"scaleY\\\":\\\"100\\\",\\\"opacity\\\":\\\"255\\\",\\\"blendMode\\\":\\\"0\\\"}\",\"{\\\"id\\\":\\\"m\\\",\\\"imageName\\\":\\\"美岬\\\",\\\"origin\\\":\\\"0\\\",\\\"x\\\":\\\"560\\\",\\\"y\\\":\\\"420\\\",\\\"x2\\\":\\\"20\\\",\\\"y2\\\":\\\"96\\\",\\\"x3\\\":\\\"364\\\",\\\"y3\\\":\\\"96\\\",\\\"x4\\\":\\\"120\\\",\\\"y4\\\":\\\"96\\\",\\\"reverse\\\":\\\"1\\\",\\\"scaleX\\\":\\\"100\\\",\\\"scaleY\\\":\\\"100\\\",\\\"opacity\\\":\\\"255\\\",\\\"blendMode\\\":\\\"0\\\"}\",\"{\\\"id\\\":\\\"s\\\",\\\"imageName\\\":\\\"涼風\\\",\\\"origin\\\":\\\"0\\\",\\\"x\\\":\\\"560\\\",\\\"y\\\":\\\"420\\\",\\\"x2\\\":\\\"20\\\",\\\"y2\\\":\\\"96\\\",\\\"x3\\\":\\\"364\\\",\\\"y3\\\":\\\"96\\\",\\\"x4\\\":\\\"120\\\",\\\"y4\\\":\\\"96\\\",\\\"reverse\\\":\\\"1\\\",\\\"scaleX\\\":\\\"100\\\",\\\"scaleY\\\":\\\"100\\\",\\\"opacity\\\":\\\"255\\\",\\\"blendMode\\\":\\\"0\\\"}\"]","picture1Settings":"","transition":"1","foreFront":"false","picture2Settings":"","transition2":"1","foreFront2":"false","picture3Settings":"","transition3":"1","foreFront3":"false","picture4Settings":"","transition4":"1","foreFront4":"false","focusToneAdjust":"-96","catheBootPicture":"true"}},
{"name":"PictureCallCommon","status":true,"description":"ピクチャのボタン化プラグイン","parameters":{"PictureIdVariable":"0","InvalidSwitchId":"0","FlickDistance":"60","FlickTimeVariable":"0","FlickDegreeVariable":"0"}},
{"name":"DTextPicture","status":true,"description":"動的文字列ピクチャ生成プラグイン","parameters":{"frameWindowSkin":"","frameWindowPadding":"18","padCharacter":"0","prefixText":"","widthVariable":"0","heightVariable":"0"}},
{"name":"ChangeWindowTouchPolicy","status":false,"description":"ウィンドウタッチ仕様変更プラグイン","parameters":{"枠外タッチ動作":"キャンセル"}},
{"name":"MessageSkip","status":true,"description":"メッセージスキッププラグイン","parameters":{"スキップキー":"S","オートキー":"A","スキップスイッチ":"1","オートスイッチ":"2","スキップアイコン":"140","オートアイコン":"75","アイコンX":"0","アイコンY":"0","押し続けスキップ":"true","ピクチャは押し続け対象外":"true","オート待機フレーム":"100 + textSize * 10","終了解除スイッチID":"0","スキップピクチャ":"","スキップピクチャX":"500","スキップピクチャY":"0","オートピクチャ":"","オートピクチャX":"750","オートピクチャY":"0","スイッチピクチャ":"","スイッチピクチャトリガー":"0","スイッチピクチャX":"750","スイッチピクチャY":"0","ボタン原点":"0","ボタン表示スイッチID":"0","ピクチャ座標タイプ":"relative","無効化スイッチ":"0","skipWait":"false"}},
{"name":"SaveInEvent","status":false,"description":"イベント実行中にメニューを開いたりセーブできるようにするプラグインです","parameters":{}},
{"name":"Saba_BackLog","status":false,"description":"バックログを表示するプラグインです。","parameters":{"backLogButton":"pageup","marginLeft":"70","marginRight":"30","nameLeft":"20","fontSize":"24","scrollSpeed":"5","windowHeight":"2000","maxLogCount":"50","bottmMargin":"50","logMargin":"44","windowSkin":"WindowBacklog","backOpacity":"230"}},
{"name":"SkipAlreadyReadMessage","status":true,"description":"既読メッセージスキップの機能を提供します。","parameters":{"メッセージスキップキー":"control","既読メッセージスキップキー":"control","既読フラグ保存用変数ID":"1","未読スキップ判定用スイッチID":"0","既読メッセージ文字色":"6","既読メッセージ文字色制御用スイッチID":"0","修正前文章判定用タグ":"**修正前**"}},
{"name":"ButtonPicture","status":true,"description":"ピクチャをクリック可能にします。","parameters":{}},
{"name":"TextPicture","status":true,"description":"テキストをピクチャとして表示します。","parameters":{}},
{"name":"PictureAnimation","status":true,"description":"ピクチャのアニメーションプラグイン","parameters":{"returnToFirstCell":"true"}},
{"name":"LL_GalgeChoiceWindow","status":true,"description":"ノベルゲーム風選択肢ウィンドウプラグイン","parameters":{}},
{"name":"KMS_MapActiveMessage","status":false,"description":"[v0.3.2] プレイヤーが近付いたときに、自動的にメッセージを表示するイベントを作成します。","parameters":{"Balloon offset Y":"20","Balloon margin":"-8","Default range":"4","Display duration":"300","Max message count":"10","Message skin":"ActiveMessageSkin"}},
{"name":"KZM_MenuCommand","status":true,"description":"メニュー項目の文字サイズと間隔を調整","parameters":{"commandFontSize":"0.00","commandSpacing":"0.00"}},
{"name":"SceneCustomMenu","status":true,"description":"カスタムメニュー作成プラグイン","parameters":{"Scene1":"{\"Id\":\"Scene_ActorList\",\"UseHelp\":\"true\",\"HelpRows\":\"0\",\"InitialEvent\":\"\",\"WindowList\":\"[\\\"{\\\\\\\"Id\\\\\\\":\\\\\\\"member_window\\\\\\\",\\\\\\\"x\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"RelativeWindowIdX\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"y\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"RelativeWindowIdY\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"width\\\\\\\":\\\\\\\"480\\\\\\\",\\\\\\\"height\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ColumnNumber\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"RowNumber\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"ItemHeight\\\\\\\":\\\\\\\"111\\\\\\\",\\\\\\\"CommandList\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DataScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ListWindowId\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ListScript\\\\\\\":\\\\\\\"$gameParty.members(); // パーティメンバー\\\\\\\",\\\\\\\"FilterScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"MappingScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ItemDrawScript\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"this.drawActorSimpleStatus(item, r.x, r.y, r.width); // アクターのステータス\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"IsEnableScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"CommonHelpText\\\\\\\":\\\\\\\"アクターを選択してください。\\\\\\\",\\\\\\\"DecisionEvent\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"CommandId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"FocusWindowId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"confirm\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"FocusWindowIndex\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"-1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Script\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"SwitchId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"CancelEvent\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"CursorEvent\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"FontSize\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"WindowSkin\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"VisibleSwitchId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ShowOpenAnimation\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"RefreshSwitchId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"IndexVariableId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemVariableId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Cancelable\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"ActorChangeable\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"HiddenNoFocus\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"MaskingText\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Id\\\\\\\":\\\\\\\"detail_window\\\\\\\",\\\\\\\"x\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"RelativeWindowIdX\\\\\\\":\\\\\\\"member_window\\\\\\\",\\\\\\\"y\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"RelativeWindowIdY\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"width\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"height\\\\\\\":\\\\\\\"300\\\\\\\",\\\\\\\"ColumnNumber\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"RowNumber\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemHeight\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"CommandList\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DataScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ListWindowId\\\\\\\":\\\\\\\"member_window\\\\\\\",\\\\\\\"ListScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FilterScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"MappingScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ItemDrawScript\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"this.drawFace(item.faceName(), item.faceIndex(), r.x, r.y); // フェイスグラフィック\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"IsEnableScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"CommonHelpText\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DecisionEvent\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"CancelEvent\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"CursorEvent\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"FontSize\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"WindowSkin\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"VisibleSwitchId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ShowOpenAnimation\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"RefreshSwitchId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"IndexVariableId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemVariableId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Cancelable\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"ActorChangeable\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"HiddenNoFocus\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"MaskingText\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Id\\\\\\\":\\\\\\\"confirm\\\\\\\",\\\\\\\"x\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"RelativeWindowIdX\\\\\\\":\\\\\\\"member_window\\\\\\\",\\\\\\\"y\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"RelativeWindowIdY\\\\\\\":\\\\\\\"detail_window\\\\\\\",\\\\\\\"width\\\\\\\":\\\\\\\"130\\\\\\\",\\\\\\\"height\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ColumnNumber\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"RowNumber\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"ItemHeight\\\\\\\":\\\\\\\"36\\\\\\\",\\\\\\\"CommandList\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"{\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Text\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"はい\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"VisibleSwitchId\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"EnableSwitchId\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"HelpText\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"CancelChoice\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"{\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Text\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"いいえ\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"VisibleSwitchId\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"EnableSwitchId\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"HelpText\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"CancelChoice\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"true\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"DataScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ListScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FilterScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"MappingScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ItemDrawScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"IsEnableScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"CommonHelpText\\\\\\\":\\\\\\\"本当によろしいですか？\\\\\\\",\\\\\\\"DecisionEvent\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"CommandId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"FocusWindowId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"FocusWindowIndex\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"-1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Script\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"SceneManager.callCustomMenu('Scene_ActorListNext'); //\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"SwitchId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"CancelEvent\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"CursorEvent\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"FontSize\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"WindowSkin\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"VisibleSwitchId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ShowOpenAnimation\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"RefreshSwitchId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"IndexVariableId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Cancelable\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"ActorChangeable\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"HiddenNoFocus\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"MaskingText\\\\\\\":\\\\\\\"\\\\\\\"}\\\"]\",\"Panorama\":\"\"}","Scene2":"{\"Id\":\"Scene_ActorListNext\",\"UseHelp\":\"true\",\"InitialEvent\":\"\",\"WindowList\":\"[\\\"{\\\\\\\"Id\\\\\\\":\\\\\\\"window1\\\\\\\",\\\\\\\"x\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"RelativeWindowIdX\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"y\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"RelativeWindowIdY\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"width\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"height\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ColumnNumber\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"RowNumber\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemHeight\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"CommandList\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DataScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ListScript\\\\\\\":\\\\\\\"$dataClasses.filter(data => !!data); // データベースの職業\\\\\\\",\\\\\\\"FilterScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"MappingScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ItemDrawScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"IsEnableScript\\\\\\\":\\\\\\\"item.meta['value']; // メモ欄に<value>の記述がある\\\\\\\",\\\\\\\"CommonHelpText\\\\\\\":\\\\\\\"メモ欄に<value>と書いた職業だけ選択できます。\\\\\\\",\\\\\\\"DecisionEvent\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"CommandId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"FocusWindowId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"FocusWindowIndex\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"-1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Script\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"this.popScene(); // 元のシーンに戻る\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"SwitchId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"CancelEvent\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"FontSize\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"WindowSkin\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"VisibleSwitchId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ShowOpenAnimation\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"RefreshSwitchId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"IndexVariableId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Cancelable\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"ActorChangeable\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"HiddenNoFocus\\\\\\\":\\\\\\\"false\\\\\\\"}\\\"]\"}","Scene3":"{\"Id\":\"Scene_ActorDetail\",\"UseHelp\":\"true\",\"InitialEvent\":\"\",\"WindowList\":\"[\\\"{\\\\\\\"Id\\\\\\\":\\\\\\\"actor_name\\\\\\\",\\\\\\\"x\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"RelativeWindowIdX\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"y\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"RelativeWindowIdY\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"width\\\\\\\":\\\\\\\"420\\\\\\\",\\\\\\\"height\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ColumnNumber\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"RowNumber\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"ItemHeight\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"CommandList\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DataScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ListScript\\\\\\\":\\\\\\\"[this._actor]; // メインメニューで選択したアクター\\\\\\\",\\\\\\\"FilterScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"MappingScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ItemDrawScript\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"this.drawActorSimpleStatus(item, r.x, r.y, r.width); // アクターのステータス\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"IsEnableScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"CommonHelpText\\\\\\\":\\\\\\\"PgUp, PgDnキーでアクターを変更できます。\\\\\\\",\\\\\\\"DecisionEvent\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"CommandId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"FocusWindowId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"actor_name\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"FocusWindowIndex\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"-1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"Script\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"SwitchId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"CancelEvent\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"FontSize\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"WindowSkin\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"VisibleSwitchId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ShowOpenAnimation\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"RefreshSwitchId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"IndexVariableId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Cancelable\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"ActorChangeable\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"HiddenNoFocus\\\\\\\":\\\\\\\"false\\\\\\\"}\\\",\\\"{\\\\\\\"Id\\\\\\\":\\\\\\\"slot\\\\\\\",\\\\\\\"x\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"RelativeWindowIdX\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"y\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"RelativeWindowIdY\\\\\\\":\\\\\\\"actor_name\\\\\\\",\\\\\\\"width\\\\\\\":\\\\\\\"200\\\\\\\",\\\\\\\"height\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ColumnNumber\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"RowNumber\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemHeight\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"CommandList\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DataScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ListScript\\\\\\\":\\\\\\\"this._actor.equipSlots(); // メインメニューで選択したアクターの装備スロット\\\\\\\",\\\\\\\"FilterScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"MappingScript\\\\\\\":\\\\\\\"$dataSystem.equipTypes[item]; // 装備スロットIDを装備スロット名称に変換\\\\\\\",\\\\\\\"ItemDrawScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"IsEnableScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"CommonHelpText\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DecisionEvent\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"CancelEvent\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"FontSize\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"WindowSkin\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"VisibleSwitchId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ShowOpenAnimation\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"RefreshSwitchId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"IndexVariableId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Cancelable\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"ActorChangeable\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"HiddenNoFocus\\\\\\\":\\\\\\\"false\\\\\\\"}\\\",\\\"{\\\\\\\"Id\\\\\\\":\\\\\\\"equip\\\\\\\",\\\\\\\"x\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"RelativeWindowIdX\\\\\\\":\\\\\\\"slot\\\\\\\",\\\\\\\"y\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"RelativeWindowIdY\\\\\\\":\\\\\\\"actor_name\\\\\\\",\\\\\\\"width\\\\\\\":\\\\\\\"400\\\\\\\",\\\\\\\"height\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ColumnNumber\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"RowNumber\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ItemHeight\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"CommandList\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DataScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ListScript\\\\\\\":\\\\\\\"this._actor.equips(); // メインメニューで選択したアクターの装備スロットID\\\\\\\",\\\\\\\"FilterScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"MappingScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ItemDrawScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"IsEnableScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"CommonHelpText\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DecisionEvent\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"CancelEvent\\\\\\\":\\\\\\\"{}\\\\\\\",\\\\\\\"FontSize\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"WindowSkin\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"VisibleSwitchId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"ShowOpenAnimation\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"RefreshSwitchId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"IndexVariableId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Cancelable\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"ActorChangeable\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"HiddenNoFocus\\\\\\\":\\\\\\\"false\\\\\\\"}\\\"]\"}","Scene4":"{}","Scene5":"{}","Scene6":"{}","Scene7":"{}","Scene8":"{}","Scene9":"{}","Scene10":"{}","Scene11":"{}","Scene12":"{}","Scene13":"{}","Scene14":"{}","Scene15":"{}","Scene16":"{}","Scene17":"{}","Scene18":"{}","Scene19":"{}","Scene20":"{}","ReplacementList":"[]"}},
{"name":"Chronus","status":false,"description":"ゲーム内時間の導入プラグイン","parameters":{"月ごとの日数配列":"31,28,31,30,31,30,31,31,30,31,30,31","月名配列":"Jan.,Feb.,Mar.,Apr.,May.,Jun.,Jul.,Aug.,Sep.,Oct.,Nov.,Dec.","曜日配列":"(日),(月),(火),(水),(木),(金),(土)","自然時間加算":"5","自然時間加算間隔":"60","場所移動時間加算":"30","戦闘時間加算(固定)":"30","戦闘時間加算(ターン)":"5","年のゲーム変数":"0","月のゲーム変数":"0","日のゲーム変数":"0","曜日IDのゲーム変数":"0","曜日名のゲーム変数":"0","時のゲーム変数":"0","分のゲーム変数":"0","累計時間のゲーム変数":"0","累計日数のゲーム変数":"0","時間帯IDのゲーム変数":"0","天候IDのゲーム変数":"0","フォーマット時間の変数":"0","フォーマット時間の計算式":"HH24 * 60 + MI","日時フォーマット1":"YYYY年 MM月 DD日 DY","日時フォーマット2":"AMHH時 MI分","日時フォーマット行間":"0","カレンダー表示X座標":"0","カレンダー表示Y座標":"0","カレンダー横幅":"0","カレンダーフォントサイズ":"0","カレンダー不透明度":"192","カレンダー枠の非表示":"false","カレンダーの非表示":"false","カレンダー余白":"8","文字盤画像ファイル":"","長針画像ファイル":"","短針画像ファイル":"","24hourClock":"true","時計X座標":"84","時計Y座標":"156","イベント中時間経過":"false","天候補正無効":"false"}},
{"name":"CBR_EroStatus","status":true,"description":"エロステータスを追加します","parameters":{"SE":"Cursor3","SEvol":"100","window":"true","font":""}},
{"name":"MNKR_HzTimingBarMZ","status":true,"description":"タイミングを合わせてボタン入力するタイミングバーを実行します。","parameters":{"bar width":"500","required SE":"Decision2","hit SE":"Attack2","critical SE":"Attack3","miss SE":"Buzzer1"}},
{"name":"111_InputForm","status":true,"description":"フォーム作って文字入力（修正版）","parameters":{}},
{"name":"TextPicture","status":false,"description":"テキストをピクチャとして表示します。","parameters":{}},
{"name":"Mihil_NamedGameVariables","status":true,"description":"ゲーム内変数を名前で呼べるように","parameters":{}},
{"name":"Torigoya_InputNamePrompt","status":false,"description":"名前入力ダイアログ機能を追加します","parameters":{"Max Length":"10","Message":"名前を入力してください","Maximum Message":"(%1 文字以内で入力)"}},
{"name":"111_InputFormMZ","status":true,"description":"[Ver1.1.0]ゲーム画面上にHTMLの入力フォームを表示します","parameters":{"OK Button Text":"決定","Display Cancel Button":"false","Cancel Button Text":"キャンセル","Judge Switch Interval":"100","Switch ID Selected OK":"0","Force OK Switch ID":"0","Force Cancel Switch ID":"0"}},
{"name":"CustomSceneSave","status":true,"description":"セーブ・ロード画面の変更","parameters":{"daysVar":"2","timeZoneVar":"3","saveBack":"Balloon","loadBack":"ButtonSet","backButtonPosition":"0,0"}}
];
