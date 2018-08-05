import React, { Component } from "react";
import { translate, Trans } from "react-i18next";

class Block extends Component {
  render() {
    const { t, i18n } = this.props;
    return (
      <div>
        {t('thi is from the block namespace')}
        <Trans i18nKey="differentstuff">this is from the block namespace</Trans>
      </div>
    );
  }
}

// extended main view with translate hoc
export default translate("block")(Block);
