package tech.becoming.medical.crm.config.vavr;

import com.fasterxml.jackson.core.Version;
import com.fasterxml.jackson.databind.Module;

class TryModule extends Module {
    @Override
    public String getModuleName() {
        return "vavr-try";
    }

    @Override
    public Version version() {
        return new Version(0, 0, 0, "", null, null);
    }

    @Override
    public void setupModule(SetupContext context) {
        context.addSerializers(new TrySerializerBase());
    }
}
