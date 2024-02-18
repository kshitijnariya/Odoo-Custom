from odoo import models


class ProductTemplate(models.Model):
    _inherit = 'product.template'

    def _get_combination_info(self, combination=False, product_id=False, add_qty=1, pricelist=False, parent_combination=False, only_template=False):
        res = super()._get_combination_info(combination=combination, product_id=product_id, add_qty=add_qty, pricelist=pricelist, parent_combination=parent_combination, only_template=only_template)

        product = self.env['product.product'].browse(res['product_id'])
        res.update({
            'variant_attribute_vals': ', '.join(product.product_template_attribute_value_ids.mapped('name')),
            'qty_available': product.qty_available or 0,
            'virtual_available': product.virtual_available or 0,
        })

        return res
