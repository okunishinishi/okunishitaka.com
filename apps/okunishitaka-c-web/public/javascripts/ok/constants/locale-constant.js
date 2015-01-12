/**
 * Constant for locale.
 * @ngdoc object
 */
(function (ng) {
    "use strict";

    ng
        .module('ok.constants')
        .constant('localeConstant', {
		    "ja": {
		        "meta": {
		            "NAME": "okunishitaka.com",
		            "DESCRIPTION": "Homepage of Taka Okunishi",
		            "AUTHOR": "Taka Okunishi",
		            "HOMEPAGE": "http://okunishitaka.com",
		            "COPY_RIGHT": "Copyright © 2015 okunishitaka.com"
		        },
		        "pageNames": {
		            "INDEX": "Top",
		            "PROFILE": "Profile",
		            "BLOG": "Blog",
		            "WORK": "Works"
		        },
		        "labels": {},
		        "buttons": {
		            "MORE": "もっと読み込む"
		        },
		        "pages": {
		            "index": {
		                "CAPTION": [
		                    "Homepage of Taka Okunishi"
		                ],
		                "TITLE": "okunishitaka.com"
		            },
		            "profile": {
		                "NAME": "name",
		                "captions": {
		                    "ABOUT": "About",
		                    "DREAM": "Dream",
		                    "BASICS": "Basics",
		                    "EDUCATION": "Education",
		                    "JOB_HISTORY": "Job History",
		                    "QUALIFICATION": "Qualification"
		                }
		            },
		            "blog": {
		                "PREVIEW_LEGEND": "Preview"
		            },
		            "work": {
		                "DESCRIPTION": "Personal works."
		            }
		        },
		        "pageDescriptions": {
		            "INDEX": "Top page.",
		            "PROFILE": "Who am I?",
		            "BLOG": "What I think?",
		            "WORK": "What I've made."
		        },
		        "errors": {
		            "CONFLICT": "コンフリクト（衝突）が発生しました。他の人が更新を行なったようです。",
		            "CONNECTION": "通信に失敗しました。",
		            "UNEXPECTED": "予期せぬエラーが発生しました。",
		            "NOT_FOUND_ERROR": "対象のリソースが見つかりませんでした。",
		            "DUPLICATE_ERROR": "同じ{key}が既に登録されています。",
		            "SIGN_FAIL_ERROR": "undefinedまたはundefinedが違います。",
		            "RETYPE_ERROR": "{key1}と{key2}が一致しません。",
		            "MACHINE_NOT_CONNECTED": "undefinedに接続されていません。",
		            "validationError": {
		                "INVALID_TYPE": "型が不正です。: {type} (期待値： {expected})",
		                "ENUM_MISMATCH": "合致するenumがありません。: {value}",
		                "ANY_OF_MISSING": "\"anyOf\"のうちどれにも当てはまりません",
		                "ONE_OF_MISSING": "\"oneOf\"のうちどれにも当てはまりません",
		                "ONE_OF_MULTIPLE": "\"oneOf\"のうちの複数に該当しています。: 条件{index1}と条件{index2}",
		                "NOT_PASSED": "\"not\"で指定された定義に合致しています。",
		                "NUMBER_MULTIPLE_OF": "値{value}は{multipleOf}の倍数ではありません",
		                "NUMBER_MINIMUM": "値{value}は最小値{minimum}以下です",
		                "NUMBER_MINIMUM_EXCLUSIVE": "値{value}は最小値{minimum}よりも小さいです",
		                "NUMBER_MAXIMUM": "値{value}は最大値{maximum}以上です",
		                "NUMBER_MAXIMUM_EXCLUSIVE": "値{value}は最大値を{maximum}を超えています",
		                "STRING_LENGTH_SHORT": "文字列が短すぎます({length} chars), 最小長は{minimum}です",
		                "STRING_LENGTH_LONG": "文字列が長過ぎます({length} chars), 最大長は{maximum}です",
		                "STRING_PATTERN": "パターンに一致しません: {pattern}",
		                "OBJECT_PROPERTIES_MINIMUM": "項目が少なすぎます ({propertyCount}), 最小 {minimum}",
		                "OBJECT_PROPERTIES_MAXIMUM": "項目が多すぎます ({propertyCount}), 最大 {maximum}",
		                "OBJECT_REQUIRED": "{key}は必須です。",
		                "OBJECT_ADDITIONAL_PROPERTIES": "追加項目は許可されていません",
		                "OBJECT_DEPENDENCY_KEY": "依存関係の解決に失敗しました。 - 必要なキー: {missing} (依存するキー: {key})",
		                "ARRAY_LENGTH_SHORT": "配列が短すぎます({length}), 最小長は{minimum}です",
		                "ARRAY_LENGTH_LONG": "配列が長過ぎます({length}), 最大長は{maximum}です",
		                "ARRAY_UNIQUE": "配列要素が重複しています (要素{match1}と要素{match2}が重複)",
		                "ARRAY_ADDITIONAL_ITEMS": "配列の要素追加は許可されていません",
		                "FORMAT_CUSTOM": "不正なフォーマット ({message})",
		                "KEYWORD_CUSTOM": "不正なキーワード: {key} ({message})",
		                "CIRCULAR_REFERENCE": "相互参照をしています $refs: {urls}",
		                "UNKNOWN_PROPERTY": "不明な項目です。 (not in schema)"
		            }
		        }
		    }
		});

})(angular);

