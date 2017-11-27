package io.syndesis.connector.salesforce.springboot;

import java.util.HashMap;
import java.util.Map;
import javax.annotation.Generated;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Generated("org.apache.camel.maven.connector.SpringBootAutoConfigurationMojo")
@ConfigurationProperties(prefix = "salesforce-get-sobject")
public class SalesforceGetSObjectConnectorConfiguration
        extends
            SalesforceGetSObjectConnectorConfigurationCommon {

    /**
     * Define additional configuration definitions
     */
    private Map<String, SalesforceGetSObjectConnectorConfigurationCommon> configurations = new HashMap<>();

    public Map<String, SalesforceGetSObjectConnectorConfigurationCommon> getConfigurations() {
        return configurations;
    }
}