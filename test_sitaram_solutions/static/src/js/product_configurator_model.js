/** @odoo-module **/
import { OptionalProductsModal } from "@sale_product_configurator/js/product_configurator_modal";

OptionalProductsModal.include({

    _onChangeCombination: function (ev, $parent, combination) {
        this._super.apply(this, arguments);

        const variant_att_vals = $('.js_variant_att_vals')
        if (combination.product_template_id === $('.js_variant_att_vals').data('productTmplId')) {
            variant_att_vals.text(combination.variant_attribute_vals);
            $('.js_variant_qty_available').text(combination.qty_available);
            $('.js_variant_virtual_available').text(combination.virtual_available);

            var parentAttr = $parent.find('input.js_variant_change');
            var selectedItems = $parent.find('input.js_variant_change:checked');

            selectedItems.each(function() {
                var selectedItem = $(this);
                $('li input.js_variant_change').not(parentAttr).each(function() {
                    var item = $(this);
                    var similarItems = $('li input.js_variant_change[name="' + item.attr('name') + '"]');

                    if (item.attr('type') === selectedItem.attr('type') &&
                        item.data('value_name') === selectedItem.data('value_name') &&
                        item.data('attribute_name') === selectedItem.data('attribute_name')) {

                        similarItems.prop('checked', false);
                        item.prop('checked', true);
                        item.trigger('change');
                    };
                });
            });
        };
    },

});
