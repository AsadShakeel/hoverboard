import '@material/mwc-button';
import '@material/mwc-dialog';
// import { Dialog } from '@material/mwc-dialog';
import { property } from '@polymer/decorators';
import '@polymer/iron-icon';
import '@polymer/paper-button';
import { html, PolymerElement } from '@polymer/polymer';
import { RootState } from '../../store';
// import { mergeAccounts, signIn } from '../../store/auth/actions';
// import { selectAuthMergeable } from '../../store/auth/selectors';
import { initialAuthState } from '../../store/auth/state';
import { selectIsDialogOpen } from '../../store/dialogs/selectors';
import { DIALOG } from '../../store/dialogs/types';
import { ReduxMixin } from '../../store/mixin';
import { initialUserState } from '../../store/user/state';
import '../../utils/icons';

class SigninDialog extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          --mdc-theme-primary: var(--primary-text-color);
        }

        .sign-in-button {
          margin: 16px 0;
          display: block;
          color: var(--primary-text-color);
        }

        .merge-content .subtitle,
        .merge-content .explanation {
          margin-bottom: 16px;
        }

        .icon-twitter {
          color: var(--twitter-color);
        }

        .icon-facebook {
          color: var(--facebook-color);
        }
      </style>

      <mwc-dialog id="dialog" open="[[open]]" heading="[[signInText]]">
        <div hidden$="[[isMergeState]]">
          <template is="dom-repeat" items="[[signInProviders.providersData]]" as="provider">
            <paper-button
              class="sign-in-button"
              on-click="signIn"
              provider-url="[[provider.url]]"
              flex
            >
              <iron-icon
                icon="hoverboard:[[provider.name]]"
                class="icon-[[provider.name]]"
              ></iron-icon>
              <span provider-url$="[[provider.url]]">[[provider.label]]</span>
            </paper-button>
          </template>
        </div>
        <div class="merge-content" hidden$="[[!isMergeState]]">
          <h3 class="subtitle">[[signInDialog.alreadyHaveAccount]]</h3>
          <div class="explanation">
            <div class="row-1">[[signInDialog.alreadyUsed]] <b>[[email]]</b>.</div>
            <div class="row-2">
              [[signInDialog.signInToContinue.part1]] [[providerCompanyName]]
              [[signInDialog.signInToContinue.part2]]
            </div>
          </div>

          <div class="action-button" layout horizontal end-justified>
            <paper-button class="merge-button" on-click="mergeAccounts" primary>
              <span>[[signInDialog.signInToContinue.part1]] [[providerCompanyName]]</span>
            </paper-button>
          </div>
        </div>

        <mwc-button slot="primaryAction" dialogAction="close">Close</mwc-button>
      </mwc-dialog>
    `;
  }

  static get is() {
    return 'signin-dialog';
  }

  @property({ type: Object })
  private user = initialUserState;
  @property({ type: Object })
  private auth = initialAuthState;
  @property({ type: Boolean })
  private open = false;
  @property({ type: String })
  private email = '';
  @property({ type: String })
  private providerCompanyName = '';


  override ready() {
    super.ready();
    // this.dialog.addEventListener('closed', () => closeDialog());
  }

  override stateChanged(state: RootState) {
    this.user = state.user;
    this.auth = state.auth;
    // this.isMergeState = selectAuthMergeable(state);
    this.open = selectIsDialogOpen(state, DIALOG.SIGNIN);
  }




}

window.customElements.define(SigninDialog.is, SigninDialog);
