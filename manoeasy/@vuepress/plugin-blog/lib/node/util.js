"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_utils_1 = require("@vuepress/shared-utils");
const Classifier_1 = require("./interface/Classifier");
function curryFrontmatterHandler(scope, map, path) {
    return (key, pageKey) => {
        if (key) {
            if (!map[key]) {
                map[key] = {};
                map[key].key = key;
                map[key].scope = scope;
                map[key].path = `${path}${key}/`;
                map[key].pageKeys = [];
            }
            map[key].pageKeys.push(pageKey);
        }
    };
}
exports.curryFrontmatterHandler = curryFrontmatterHandler;
function PluginBlogLog(title) {
    const chalk = require('chalk');
    console.log();
    console.log(chalk.cyan(`[@vuepress/plugin-blog] ====== ${title} ======`));
}
function logObject(title, o, spread = false) {
    if (shared_utils_1.env.isDebug) {
        PluginBlogLog(title);
        if (spread) {
            for (const key in o) {
                console.log(key, o[key]);
                console.log();
            }
        }
        else {
            console.log(o);
            console.log();
        }
    }
}
exports.logObject = logObject;
function logTable(title, data) {
    if (shared_utils_1.env.isDebug) {
        PluginBlogLog(title);
        console.table(data);
        console.log();
    }
}
exports.logTable = logTable;
function logPages(title, pages) {
    if (shared_utils_1.env.isDebug) {
        const table = require('text-table');
        PluginBlogLog(title);
        const data = [['permalink', 'meta', 'pid', 'id', 'frontmatter']];
        data.push(...pages.map(({ path, permalink, meta, pid, id, frontmatter }) => [
            permalink || path || '',
            JSON.stringify(meta) || '',
            pid || '',
            id || '',
            JSON.stringify(frontmatter) || '',
        ]));
        console.log(table(data));
        console.log();
    }
}
exports.logPages = logPages;
function resolvePaginationConfig(classifierType, globalPagination, pagination, indexPath, ctx, keys = ['']) {
    return Object.assign({}, {
        lengthPerPage: 10,
        layout: ctx.getLayout(Classifier_1.DefaultLayoutEnum.DirectoryPagination),
        getPaginationPageUrl(index) {
            if (index === 0) {
                return indexPath;
            }
            return `${indexPath}page/${index + 1}/`;
        },
        filter: classifierType === Classifier_1.ClassifierTypeEnum.Directory
            ? function (page, id, pid) {
                return page.pid === pid && page.id === id;
            }
            : getFrontmatterClassifierPageFilter(keys),
        sorter: (prev, next) => {
            const dayjs = require('dayjs');
            const prevTime = dayjs(prev.frontmatter.date);
            const nextTime = dayjs(next.frontmatter.date);
            return prevTime - nextTime > 0 ? -1 : 1;
        },
    }, globalPagination, pagination);
}
exports.resolvePaginationConfig = resolvePaginationConfig;
function getFrontmatterClassifierPageFilter(keys) {
    return new Function('page', 'id', 'pid', `
const keys = ${JSON.stringify(keys)};
const value = id;
return keys.some(key => {
  const _value = page.frontmatter[key]
  if (Array.isArray(_value)) {
    return _value.some(i => i == value)
  }
  return _value == value
})
    `);
}
function UpperFirstChar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.UpperFirstChar = UpperFirstChar;
