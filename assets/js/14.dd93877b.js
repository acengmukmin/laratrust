(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{173:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"seeder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seeder","aria-hidden":"true"}},[s._v("#")]),s._v(" Seeder")]),s._v(" "),a("p",[s._v("Laratrust comes with a database seeder, this seeder helps you fill the permissions for each role depending on the module, and creates one user for each role.")]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("NOTE")]),s._v(" "),a("p",[s._v("Laratrust now accepts multiple user models so the seeder is going to work with the first user model inside the user_models array.")])]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("NOTE")]),s._v(" "),a("p",[s._v("Laratrust now has teams feature, the seeder doesn't support it.")])]),s._v(" "),a("p",[s._v("To generate the seeder you have to run")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("php artisan laratrust:seeder\n")])])]),a("p",[s._v("and")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("composer dump-autoload\n")])])]),a("p",[s._v("And in the "),a("code",[s._v("database/seeds/DatabaseSeeder.php")]),s._v(" file you have to add this to the "),a("code",[s._v("run")]),s._v(" method:")]),s._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$this")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("call")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LaratrustSeeder"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token keyword"}},[s._v("class")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("NOTE")]),s._v(" "),a("p",[s._v("If you "),a("strong",[s._v("have not")]),s._v(" run "),a("code",[s._v('php artisan vendor:publish --tag="laratrust"')]),s._v(" you should run it in order to customize the roles, modules and permissions in each case.")])]),s._v(" "),a("p",[s._v("Your "),a("code",[s._v("config/laratrust_seeder.php")]),s._v(" file looks like this:")]),s._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'role_structure'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'superadministrator'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'users'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'c,r,u,d'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'acl'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'c,r,u,d'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'profile'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'r,u'")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'administrator'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'users'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'c,r,u,d'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'profile'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'r,u'")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'user'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'profile'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'r,u'")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'permission_structure'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'cru_user'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'profile'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'c,r,u'")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("To understand the "),a("code",[s._v("role_structure")]),s._v(" you must know:")]),s._v(" "),a("ul",[a("li",[s._v("The first level is the roles.")]),s._v(" "),a("li",[s._v("The second level is the modules.")]),s._v(" "),a("li",[s._v("The second level assignments are the permissions.")])]),s._v(" "),a("p",[s._v("With that in mind, you should arrange your roles, modules and permissions like this:")]),s._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'role_structure'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'role'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'module'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'permissions'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("To understand the "),a("code",[s._v("permission_structure")]),s._v(" you must know:")]),s._v(" "),a("ul",[a("li",[s._v("The first level is the users.")]),s._v(" "),a("li",[s._v("The second level is the modules.")]),s._v(" "),a("li",[s._v("The second level assignments are the permissions.")])]),s._v(" "),a("p",[s._v("With that in mind, you should arrange your users, modules and permissions like this:")]),s._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'permission_structure'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'user'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'module'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'permissions'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permissions","aria-hidden":"true"}},[s._v("#")]),s._v(" Permissions")]),s._v(" "),a("p",[s._v("In case that you do not want to use the "),a("code",[s._v("c,r,u,d")]),s._v(" permissions, in the "),a("code",[s._v("config/laratrust_seeder.php")]),s._v(" there the "),a("code",[s._v("permissions_map")]),s._v(" where you can change the permissions mapping.")])])}],!1,null,null,null);e.options.__file="seeder.md";t.default=e.exports}}]);