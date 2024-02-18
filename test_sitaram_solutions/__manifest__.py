# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

{
    'name': 'Test Sitaram Solutions',
    'version': '17.0.1.0.0',
    'summary': 'Test Sitaram Solutions',
    'category': 'Hidden',
    'author': 'Test',
    'depends': [
        'sale_product_configurator',
        'stock'
    ],
    'assets': {
        'web.assets_backend': [
            'test_sitaram_solutions/static/src/js/product_configurator_model.js',
        ],
    },
    'data': [
        'views/templates.xml',
    ],

    'application': False,
    'installable': True,
}
