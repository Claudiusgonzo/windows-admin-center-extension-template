import { Component } from '@angular/core';
var FormFieldsExampleComponent = /** @class */ (function () {
    function FormFieldsExampleComponent() {
    }
    FormFieldsExampleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sme-ng2-control-input-form-fields-example',
                    template: "\n      <div class=\"sme-layout-absolute sme-position-inset-none sme-documentation\">\n          <section>\n              <p>\n                  Form Fields are the basis of form controls in Windows Admin Center. They follow the format:\n                  <code>&lt;sme-form-field type=\"[typeName]\"&gt;&lt;/sme-form-field&gt;</code> where [typeName] is a valid field type.\n              </p>\n          </section>\n\n          <h2>Common</h2>\n          <section>\n              <h3>Properties</h3>\n              <section>\n                  <table>\n                      <thead>\n                          <tr>\n                              <th style=\"width: 200px\">Attribute</th>\n                              <th>Type</th>\n                              <th>Description</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                              <td>disabled</td>\n                              <td>boolean</td>\n                              <td>Marks the form field as disabled</td>\n                          </tr>\n                          <tr>\n                              <td>required*</td>\n                              <td>boolean</td>\n                              <td>Marks the form field as required and enables required validation checks</td>\n                          </tr>\n                          <tr>\n                              <td>autofocus</td>\n                              <td>boolean</td>\n                              <td>enables autofocus on the form field</td>\n                          </tr>\n                          <tr>\n                              <td>placeholder*</td>\n                              <td>string</td>\n                              <td>If applicable, identifies the placeholder text to show in the control</td>\n                          </tr>\n                          <tr>\n                              <td>label</td>\n                              <td>string</td>\n                              <td>The label of the field. This is also used for aria-label properties</td>\n                          </tr>\n                          <tr>\n                              <td>description</td>\n                              <td>string</td>\n                              <td>The description of the field. This is also used for aria-description properties where available</td>\n                          </tr>\n                          <tr>\n                              <td>immediateValidation</td>\n                              <td>boolean</td>\n                              <td>Causes validation to occur immediatly when the control loads.</td>\n                          </tr>\n                          <tr>\n                              <td>customValidate*</td>\n                              <td>EventEmitter&lt;CheckValidationEventArgs&gt;</td>\n                              <td>Output for custom validation on this field. Only applies to template driven forms.</td>\n                          </tr>\n                      </tbody>\n                  </table>\n                  <p>* = Not available on all controls.</p>\n              </section>\n          </section>\n\n          <h2>Type: \"checkbox\"</h2>\n          <section>\n              <h3>Value Type</h3>\n              <section>\n                  <p><code>boolean</code></p>\n              </section>\n              <h3>Properties</h3>\n              <section>\n                  <table>\n                      <thead>\n                          <tr>\n                              <th style=\"width: 200px\">Attribute</th>\n                              <th>Type</th>\n                              <th>Description</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                              <td>indeterminate</td>\n                              <td>boolean</td>\n                              <td>Marks the checkbox as indeterminate. Any change to the value will reset this field.</td>\n                          </tr>\n                      </tbody>\n                  </table>\n              </section>\n          </section>\n\n          <h2>Type: \"checklist\"</h2>\n          <section>\n              <h3>Value Type</h3>\n              <section>\n                  <p><code>MsftSme.StringMap&lt;boolean&gt;</code> where the keys are the value properties from each <code>&lt;sme-option&gt;&lt;/sme-option&gt;</code></p>\n              </section>\n              <h3>Content</h3>\n              <section>\n                  <p>The following content types are support inside this form field</p>\n                  <ul>\n                      <li>\n                          <code>&lt;sme-option&gt;&lt;/sme-option&gt;</code> with optional inner <code>&lt;ng-template&gt;&lt;/ng-template&gt;</code> containing additional form elements\n                      </li>\n                  </ul>\n              </section>\n          </section>\n\n          <h2>Type: \"file\"</h2>\n          <section>\n              <h3>Value Type</h3>\n              <section>\n                  <p><code>File</code> if <code>[multiple=false]</code> else <code>FileList</code></p>\n              </section>\n              <h3>Properties</h3>\n              <section>\n                  <table>\n                      <thead>\n                          <tr>\n                              <th style=\"width: 200px\">Attribute</th>\n                              <th>Type</th>\n                              <th>Description</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                              <td>multiple</td>\n                              <td>boolean</td>\n                              <td>Indicates that multiple files are allowed</td>\n                          </tr>\n                          <tr>\n                              <td>fileTypes</td>\n                              <td>string[]</td>\n                              <td>Indicates the type of files that are allowed</td>\n                          </tr>\n                          <tr>\n                              <td>buttonLabel</td>\n                              <td>string</td>\n                              <td>The label to use on the select button</td>\n                          </tr>\n                          <tr>\n                              <td>multipleFileFormat</td>\n                              <td>string</td>\n                              <td>The format to use when multiple files are selected</td>\n                          </tr>\n                      </tbody>\n                  </table>\n              </section>\n          </section>\n\n          <h2>Type: \"number\"</h2>\n          <section>\n              <h3>Value Type</h3>\n              <section>\n                  <p><code>number</code></p>\n              </section>\n              <h3>Properties</h3>\n              <section>\n                  <table>\n                      <thead>\n                          <tr>\n                              <th style=\"width: 200px\">Attribute</th>\n                              <th>Type</th>\n                              <th>Description</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                              <td>step</td>\n                              <td>number</td>\n                              <td>The size of each movement of the slider</td>\n                          </tr>\n                          <tr>\n                              <td>min</td>\n                              <td>number</td>\n                              <td>The minimum value of the slider</td>\n                          </tr>\n                          <tr>\n                              <td>max</td>\n                              <td>number</td>\n                              <td>The maximum value of the slider</td>\n                          </tr>\n                      </tbody>\n                  </table>\n              </section>\n          </section>\n\n          <h2>Type: \"password\"</h2>\n          <section>\n              <h3>Value Type</h3>\n              <section>\n                  <p><code>string</code></p>\n              </section>\n          </section>\n\n          <h2>Type: \"radio-group\"</h2>\n          <section>\n              <h3>Value Type</h3>\n              <section>\n                  <p><code>any</code> where the value is from the currently selected <code>&lt;sme-option&gt;&lt;/sme-option&gt;</code></p>\n              </section>\n              <h3>Content</h3>\n              <section>\n                  <p>The following content types are support inside this form field</p>\n                  <ul>\n                      <li>\n                          <code>&lt;sme-option&gt;&lt;/sme-option&gt;</code> with optional inner <code>&lt;ng-template&gt;&lt;/ng-template&gt;</code> containing additional form elements\n                      </li>\n                  </ul>\n              </section>\n          </section>\n\n          <h2>Type: \"readonly\"</h2>\n          <section>\n              <h3>Value Type</h3>\n              <section>\n                  <p><code>string</code></p>\n              </section>\n          </section>\n\n          <h2>Type: \"search\"</h2>\n          <section>\n              <h3>Value Type</h3>\n              <section>\n                  <p><code>string</code></p>\n              </section>\n          </section>\n\n          <h2>Type: \"select\"</h2>\n          <section>\n              <h3>Value Type</h3>\n              <section>\n                  <p><code>any</code> where the value is from the currently selected <code>&lt;sme-option&gt;&lt;/sme-option&gt;</code></p>\n              </section>\n              <h3>Content</h3>\n              <section>\n                  <p>The following content types are support inside this form field</p>\n                  <ul>\n                      <li>\n                          <code>&lt;sme-option&gt;&lt;/sme-option&gt;</code>\n                      </li>\n                  </ul>\n              </section>\n          </section>\n\n          <h2>Type: \"slider\"</h2>\n          <section>\n              <h3>Value Type</h3>\n              <section>\n                  <p><code>number</code></p>\n              </section>\n              <h3>Properties</h3>\n              <section>\n                  <table>\n                      <thead>\n                          <tr>\n                              <th style=\"width: 200px\">Attribute</th>\n                              <th>Type</th>\n                              <th>Description</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                              <td>step</td>\n                              <td>number</td>\n                              <td>The size of each movement of the slider</td>\n                          </tr>\n                          <tr>\n                              <td>min</td>\n                              <td>number</td>\n                              <td>The minimum value of the slider</td>\n                          </tr>\n                          <tr>\n                              <td>max</td>\n                              <td>number</td>\n                              <td>The maximum value of the slider</td>\n                          </tr>\n                      </tbody>\n                  </table>\n              </section>\n          </section>\n\n          <h2>Type: \"tags\"</h2>\n          <section>\n              <h3>Value Type</h3>\n              <section>\n                  <p><code>string[]</code></p>\n              </section>\n              <h3>Properties</h3>\n              <section>\n                  <table>\n                      <thead>\n                          <tr>\n                              <th style=\"width: 200px\">Attribute</th>\n                              <th>Type</th>\n                              <th>Description</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                              <td>tagSplitCharacter</td>\n                              <td>string</td>\n                              <td>Indicates the character to use to split tags on.</td>\n                          </tr>\n                          <tr>\n                              <td>suggestions</td>\n                              <td>string[]</td>\n                              <td>Suggestions for possible tags that the user could enter</td>\n                          </tr>\n                      </tbody>\n                  </table>\n              </section>\n          </section>\n\n          <h2>Type: \"text\"</h2>\n          <section>\n              <h3>Value Type</h3>\n              <section>\n                  <p><code>string</code></p>\n              </section>\n              <h3>Properties</h3>\n              <section>\n                  <table>\n                      <thead>\n                          <tr>\n                              <th style=\"width: 200px\">Attribute</th>\n                              <th>Type</th>\n                              <th>Description</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                              <td>multiline</td>\n                              <td>boolean</td>\n                              <td>Indicates that multiple lines should be accepted</td>\n                          </tr>\n                          <tr>\n                              <td>rows*</td>\n                              <td>number</td>\n                              <td>Indicates the number of visible rows for multiline text fields</td>\n                          </tr>\n                          <tr>\n                              <td>columns*</td>\n                              <td>number</td>\n                              <td>Indicates the number of visible columns for multiline text fields</td>\n                          </tr>\n                      </tbody>\n                  </table>\n                  <p>* = Only available when <code>multiline=\"true\"</code></p>\n              </section>\n          </section>\n\n          <h2>Type: \"toggle-switch\"</h2>\n          <section>\n              <h3>Value Type</h3>\n              <section>\n                  <p><code>boolean</code></p>\n              </section>\n              <h3>Properties</h3>\n              <section>\n                  <table>\n                      <thead>\n                          <tr>\n                              <th style=\"width: 200px\">Attribute</th>\n                              <th>Type</th>\n                              <th>Description</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                              <td>labelOn</td>\n                              <td>string</td>\n                              <td>The label to show when the switch is on</td>\n                          </tr>\n                          <tr>\n                              <td>labelOff</td>\n                              <td>string</td>\n                              <td>The label to show when the switch is off</td>\n                          </tr>\n                      </tbody>\n                  </table>\n                  <p>* = Only available when <code>multiline=\"true\"</code></p>\n              </section>\n          </section>\n\n          <!-- <h2>Type: \"array\"</h2>\n          <section>\n              <h3>Value Type</h3>\n              <section>\n                  <p><code>any[]</code></p>\n              </section>\n              <h3>Properties</h3>\n              <section>\n                  <table>\n                      <thead>\n                          <tr>\n                              <th style=\"width: 200px\">Attribute</th>\n                              <th>Type</th>\n                              <th>Description</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                              <td>canAdd</td>\n                              <td>boolean</td>\n                              <td>Indicates that the user should be allowed to add elements to this array. Defaults to true</td>\n                          </tr>\n                          <tr>\n                              <td>canRemove</td>\n                              <td>boolean</td>\n                              <td>Indicates that the user should be allowed to remove elements from this array. Defaults to true</td>\n                          </tr>\n                          <tr>\n                              <td>addLabel</td>\n                              <td>string</td>\n                              <td>The label to show on the button to add elements to this array (overrides default)</td>\n                          </tr>\n                          <tr>\n                              <td>removeLabel</td>\n                              <td>string</td>\n                              <td>The label to show on the button to remove elements from this array (overrides default)</td>\n                          </tr>\n                      </tbody>\n                  </table>\n              </section>\n          </section>\n          <h3>Content</h3>\n          <section>\n              <p>The following content types are support inside this form field</p>\n              <ul>\n                  <li>\n                      <code>&lt;ng-template&gt;&lt;/ng-template&gt;</code> containing the subform elements for each item in the array\n                  </li>\n              </ul>\n          </section> -->\n      </div>\n    "
                },] },
    ];
    /** @nocollapse */
    FormFieldsExampleComponent.ctorParameters = function () { return []; };
    return FormFieldsExampleComponent;
}());
export { FormFieldsExampleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kZXYtZ3VpZGUvbW9kdWxlcy9jb250cm9scy9mb3JtL2Zvcm0tZmllbGRzL2Zvcm0tZmllbGRzLWV4YW1wbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFBLEVBQVUsTUFBTyxlQUFBLENBQWdCO0FBRzFDO0lBQUE7SUFpY0EsQ0FBQztJQWpjZ0QscUNBQVUsR0FBMEI7UUFDckYsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDO29CQUN0QixRQUFRLEVBQUUsMkNBQTJDO29CQUNyRCxRQUFRLEVBQUUsa3RqQkF3YlQ7aUJBQ0osRUFBRyxFQUFFO0tBQ0wsQ0FBQztJQUNGLGtCQUFrQjtJQUNYLHlDQUFjLEdBQW1FLGNBQU0sT0FBQSxFQUM3RixFQUQ2RixDQUM3RixDQUFDO0lBQ0YsaUNBQUM7Q0FqY0QsQUFpY0MsSUFBQTtTQWpjWSwwQkFBMEIiLCJmaWxlIjoiZm9ybS1maWVsZHMtZXhhbXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiQzovQkEvNDQ3L3MvaW5saW5lU3JjLyJ9