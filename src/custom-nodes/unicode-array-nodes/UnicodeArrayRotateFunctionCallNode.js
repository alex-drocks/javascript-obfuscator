"use strict";
const NodeType_1 = require("../../enums/NodeType");
const Node_1 = require('../Node');
const NodeUtils_1 = require("../../NodeUtils");
class UnicodeArrayRotateFunctionCallNode extends Node_1.Node {
    constructor(unicodeArrayRotateFunctionName, unicodeArrayName, unicodeArrayRotateValue) {
        super();
        this.unicodeArrayRotateFunctionName = unicodeArrayRotateFunctionName;
        this.unicodeArrayName = unicodeArrayName;
        this.unicodeArrayRotateValue = unicodeArrayRotateValue;
        this.node = this.getNodeStructure();
    }
    appendNode(blockScopeNode) {
        NodeUtils_1.NodeUtils.prependNode(blockScopeNode.body, this.getNode());
    }
    getNodeStructure() {
        return {
            'type': NodeType_1.NodeType.ExpressionStatement,
            'expression': {
                'type': NodeType_1.NodeType.CallExpression,
                'callee': {
                    'type': NodeType_1.NodeType.Identifier,
                    'name': this.unicodeArrayRotateFunctionName
                },
                'arguments': [
                    {
                        'type': NodeType_1.NodeType.Identifier,
                        'name': this.unicodeArrayName
                    },
                    {
                        'type': NodeType_1.NodeType.Literal,
                        'value': this.unicodeArrayRotateValue,
                        'raw': `'${this.unicodeArrayRotateValue}'`
                    },
                    {
                        'type': NodeType_1.NodeType.Literal,
                        'value': true,
                        'raw': 'true'
                    }
                ]
            }
        };
    }
}
exports.UnicodeArrayRotateFunctionCallNode = UnicodeArrayRotateFunctionCallNode;