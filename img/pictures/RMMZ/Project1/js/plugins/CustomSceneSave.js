//=============================================================================
// RPG Maker MZ - CustomSceneSave
//=============================================================================

/*:
 *
 * @plugindesc セーブ・ロード画面の変更
 * @target MZ
 * @author sun_dandy
 * @url https://star-write-dream.com/
 *
 * @help CustomSceneSave.js(ver1.0.0)
 *
 * セーブ・ロード画面を変更します。
 *
 * --------------------------
 * ■利用規約
 * Copyright (c) 2024 sund_dandy
 * https://star-write-dream.com/
 *
 * 以下に定める条件に従い、本プラグインファイル（以下「ソフトウェア」）の
 * 制作依頼者に対し、ソフトウェアを変更し、
 * 制作依頼者の制作する作品（以下、制作物）に組み込むことを許可します。
 * 制作物の内容および公開形式に制約はありません。
 *
 * ソフトウェア単体で掲載、頒布、共有することはできません。
 * 上記の著作権表示および本許諾表示は変更できず、削除もできません。
 * 別途、制作物の重要な箇所にソフトウェアの著作権表示をする必要はありません。
 *
 * ソフトウェアは「現状のまま」で、明示であるか暗黙であるかを問わず、
 * 何らの保証もなく提供されます。ここでいう保証とは、商品性、
 * 特定の目的への適合性、および権利非侵害についての保証も含みますが、
 * それに限定されるものではありません。作者または著作権者は、契約行為、
 * 不法行為、またはそれ以外であろうと、ソフトウェアに起因または関連し、
 * あるいはソフトウェアの使用またはその他の扱いによって生じる一切の請求、
 * 損害、その他の義務について何らの責任も負わないものとします。
 * --------------------------
 *
 * @param daysVar
 * @text 日付変数
 * @desc 日付変数を指定します。
 * @type variable
 * @default 0
 *
 * @param timeZoneVar
 * @text 時間帯変数
 * @desc 時間帯変数を指定します。
 * @type variable
 * @default 0
 *
 * @param saveBack
 * @text セーブ画面の背景画像
 * @desc セーブ画面の背景画像を指定します。
 * @type file
 * @dir img/system
 * @default
 *
 * @param saveBack
 * @text セーブ画面の背景画像
 * @desc セーブ画面の背景画像を指定します。
 * @type file
 * @dir img/system
 * @default
 *
 * @param loadBack
 * @text ロード画面の背景画像
 * @desc ロード画面の背景画像を指定します。
 * @type file
 * @dir img/system
 * @default
 *
 * @param backButtonPosition
 * @text 戻るボタンの位置調整
 * @desc 戻るボタンの位置を調整する値をX,Yで指定します。（0,0で画面右下）
 * @type string
 * @default 0,0
 *
 */

/*
    ■更新履歴
    v1.0.0 初版
*/

(() => {
    "use strict";

    const pluginName = "CustomSceneSave";
    const params = PluginManager.parameters(pluginName);
    const saveBack = params.saveBack;
    const loadBack = params.loadBack;
    const daysVar = Number(params.daysVar) || 0;
    const timeZoneVar = Number(params.timeZoneVar) || 0;
    const backButtonPosition = (() => {
        const arr = params.backButtonPosition.split(",").map(Number);
        return { x: arr[0], y: arr[1] };
    })();

    // -----------
    // DataManager

    const _DataManager_makeSavefileInfo = DataManager.makeSavefileInfo;
    DataManager.makeSavefileInfo = function () {
        const info = _DataManager_makeSavefileInfo.apply(this, arguments);
        info.days = $gameVariables.value(daysVar);
        info.timeZone = $gameVariables.value(timeZoneVar);
        return info;
    };

    // -------------
    // Scene_File

    const _Scene_File_initialize = Scene_File.prototype.initialize;
    Scene_File.prototype.initialize = function () {
        _Scene_File_initialize.apply(this, arguments);
        this._loadedImageCSS = false;
    };

    const _Scene_File_isReady = Scene_File.prototype.isReady;
    Scene_File.prototype.isReady = function () {
        if (!this._loadedImageCSS) {
            ImageManager.loadSystem(saveBack);
            ImageManager.loadSystem(loadBack);
            this._loadedImageCSS = true;
        }
        return _Scene_File_isReady.apply(this, arguments);
    };

    Scene_File.prototype.listWindowRect = function () {
        const wy = 16;
        const ww = 270;
        const wh = Graphics.height - wy * 2;
        const wx = Graphics.width / 2 - ww / 2;
        return new Rectangle(wx, wy, ww, wh);
    };

    const _Scene_File_create = Scene_File.prototype.create;
    Scene_File.prototype.create = function () {
        _Scene_File_create.apply(this, arguments);

        this._listWindow.setBackgroundType(2);
        this._helpWindow.visible = false;
    };

    Scene_File.prototype.createCancelButton = function () {
        this._cancelButton = new Sprite_Button("cancel");
        this._cancelButton.x = Graphics.width - this._cancelButton.width - 16 + backButtonPosition.x;
        this._cancelButton.y = Graphics.height - this._cancelButton.height - 16 + backButtonPosition.y;
        this.addWindow(this._cancelButton);
    };

    const _Scene_File_createBackground = Scene_File.prototype.createBackground;
    Scene_File.prototype.createBackground = function () {
        _Scene_File_createBackground.apply(this, arguments);

        if (!this._backImageNameEx) return;

        const sp = new Sprite();
        this._backSpriteEx = sp;
        sp.bitmap = ImageManager.loadSystem(this._backImageNameEx);
        this.addChild(sp);
    };

    // ------------
    // Scene_Save

    const _Scene_Save_initialize = Scene_Save.prototype.initialize;
    Scene_Save.prototype.initialize = function () {
        _Scene_Save_initialize.apply(this, arguments);
        this._backImageNameEx = saveBack;
    };

    // --------------
    // Scene_Load

    const _Scene_Load_initialize = Scene_Load.prototype.initialize;
    Scene_Load.prototype.initialize = function () {
        _Scene_Load_initialize.apply(this, arguments);
        this._backImageNameEx = loadBack;
    };

    // -----------
    // Window_SavefileList

    Window_SavefileList.prototype.drawTitle = function (savefileId, x, y) {
        this.contents.fontSize = 16;
        if (savefileId === 0) {
            this.drawText(TextManager.autosave, x, y, 180);
        } else {
            this.drawText("絵日記" + " " + savefileId, x, y, 180);
        }
    };

    Window_SavefileList.prototype.drawContents = function (info, rect) {
        const bottom = rect.y + rect.height;
        const lineHeight = this.lineHeight();
        let x = 30;
        const y = rect.y + 34;

        this.contents.fontSize = 22;
        const days = info.days ? info.days : 1;
        const daysStr = "8月" + ("" + days).padStart(2, " ") + "日";
        this.drawText(daysStr, x, y, rect.width);
        x += this.textWidth(daysStr + " ");

        const timeZone = info.timeZone;
        let timeZoneStr;
        switch (timeZone) {
            case 1:
                timeZoneStr = "朝";
                break;
            case 2:
                timeZoneStr = "昼";
                break;
            case 3:
                timeZoneStr = "夜";
                break;
            default:
                timeZoneStr = "朝";
        }
        this.drawText(timeZoneStr, x, y, rect.width);

        this.contents.fontSize = 16;
        const y2 = bottom - lineHeight;
        this.drawPlaytime(info, rect.x, y2, rect.width);
    };
})();
