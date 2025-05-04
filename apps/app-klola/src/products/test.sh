#!/bin/bash


# =============================================
# MODULE: BUILDER
# =============================================
mkdir -p klolaform/builder/components/QuestionTypes
mkdir -p klolaform/builder/services
mkdir -p klolaform/builder/entities
mkdir -p klolaform/builder/infra/repositories
mkdir -p klolaform/builder/infra/api
mkdir -p klolaform/builder/hooks

# Buat file-file components
touch klolaform/builder/components/FormBuilder.tsx
touch klolaform/builder/components/FormDesigner.tsx
touch klolaform/builder/components/LogicBuilder.tsx
touch klolaform/builder/components/PageManager.tsx
touch klolaform/builder/components/FormSettings.tsx

# Buat file-file question types
touch klolaform/builder/components/QuestionTypes/MultipleChoice.tsx
touch klolaform/builder/components/QuestionTypes/TextInput.tsx
touch klolaform/builder/components/QuestionTypes/Rating.tsx
touch klolaform/builder/components/QuestionTypes/Matrix.tsx
touch klolaform/builder/components/QuestionTypes/Dropdown.tsx

# Buat file-file services
touch klolaform/builder/services/formService.ts
touch klolaform/builder/services/questionService.ts
touch klolaform/builder/services/logicService.ts
touch klolaform/builder/services/templateService.ts

# Buat file-file entities
touch klolaform/builder/entities/Form.ts
touch klolaform/builder/entities/Question.ts
touch klolaform/builder/entities/Logic.ts
touch klolaform/builder/entities/Template.ts

# Buat file-file infra
touch klolaform/builder/infra/repositories/formRepository.ts
touch klolaform/builder/infra/repositories/templateRepository.ts
touch klolaform/builder/infra/api/formsApi.ts

# Buat file-file hooks
touch klolaform/builder/hooks/useFormBuilder.ts
touch klolaform/builder/hooks/useFormTemplate.ts
touch klolaform/builder/hooks/useFormList.ts

# =============================================
# MODULE: RESPONSES
# =============================================
mkdir -p klolaform/responses/components/Collector
mkdir -p klolaform/responses/components/Results
mkdir -p klolaform/responses/components/Share
mkdir -p klolaform/responses/services
mkdir -p klolaform/responses/entities
mkdir -p klolaform/responses/infra/repositories
mkdir -p klolaform/responses/infra/api
mkdir -p klolaform/responses/hooks

# Buat file-file Collector components
touch klolaform/responses/components/Collector/FormRenderer.tsx
touch klolaform/responses/components/Collector/QuestionRenderer.tsx
touch klolaform/responses/components/Collector/ProgressBar.tsx
touch klolaform/responses/components/Collector/ThankYouScreen.tsx

# Buat file-file Results components
touch klolaform/responses/components/Results/ResponseList.tsx
touch klolaform/responses/components/Results/ResponseDetail.tsx
touch klolaform/responses/components/Results/ResponseFilters.tsx

# Buat file-file Share components
touch klolaform/responses/components/Share/ShareOptions.tsx
touch klolaform/responses/components/Share/EmailInvitations.tsx
touch klolaform/responses/components/Share/EmbedForm.tsx
touch klolaform/responses/components/Share/QRCodeGenerator.tsx

# Buat file-file services
touch klolaform/responses/services/responseService.ts
touch klolaform/responses/services/validationService.ts
touch klolaform/responses/services/distributionService.ts

# Buat file-file entities
touch klolaform/responses/entities/Response.ts
touch klolaform/responses/entities/Answer.ts
touch klolaform/responses/entities/Distribution.ts

# Buat file-file infra
touch klolaform/responses/infra/repositories/responseRepository.ts
touch klolaform/responses/infra/repositories/distributionRepository.ts
touch klolaform/responses/infra/api/responsesApi.ts

# Buat file-file hooks
touch klolaform/responses/hooks/useResponseCollection.ts
touch klolaform/responses/hooks/useResponseView.ts
touch klolaform/responses/hooks/useValidation.ts
touch klolaform/responses/hooks/useDistribution.ts

# =============================================
# MODULE: ANALYTICS
# =============================================
mkdir -p klolaform/analytics/components/Dashboard
mkdir -p klolaform/analytics/components/Charts
mkdir -p klolaform/analytics/components/Reports
mkdir -p klolaform/analytics/components/Export
mkdir -p klolaform/analytics/services
mkdir -p klolaform/analytics/entities
mkdir -p klolaform/analytics/infra/repositories
mkdir -p klolaform/analytics/infra/api
mkdir -p klolaform/analytics/hooks

# Buat file-file Dashboard components
touch klolaform/analytics/components/Dashboard/AnalyticsDashboard.tsx
touch klolaform/analytics/components/Dashboard/ResponseMetrics.tsx
touch klolaform/analytics/components/Dashboard/CompletionRate.tsx

# Buat file-file Charts components
touch klolaform/analytics/components/Charts/BarChart.tsx
touch klolaform/analytics/components/Charts/PieChart.tsx
touch klolaform/analytics/components/Charts/LineChart.tsx
touch klolaform/analytics/components/Charts/WordCloud.tsx

# Buat file-file Reports components
touch klolaform/analytics/components/Reports/ReportBuilder.tsx
touch klolaform/analytics/components/Reports/ReportTemplate.tsx
touch klolaform/analytics/components/Reports/ReportViewer.tsx

# Buat file-file Export components
touch klolaform/analytics/components/Export/ExportOptions.tsx
touch klolaform/analytics/components/Export/DataExporter.tsx

# Buat file-file services
touch klolaform/analytics/services/analyticsService.ts
touch klolaform/analytics/services/chartService.ts
touch klolaform/analytics/services/exportService.ts

# Buat file-file entities
touch klolaform/analytics/entities/Report.ts
touch klolaform/analytics/entities/Chart.ts
touch klolaform/analytics/entities/Metric.ts

# Buat file-file infra
touch klolaform/analytics/infra/repositories/analyticsRepository.ts
touch klolaform/analytics/infra/api/analyticsApi.ts

# Buat file-file hooks
touch klolaform/analytics/hooks/useAnalytics.ts
touch klolaform/analytics/hooks/useCharts.ts
touch klolaform/analytics/hooks/useReporting.ts

# =============================================
# MODULE: DISTRIBUTION
# =============================================
mkdir -p klolaform/distribution/components
mkdir -p klolaform/distribution/services
mkdir -p klolaform/distribution/entities
mkdir -p klolaform/distribution/infra/repositories
mkdir -p klolaform/distribution/infra/api
mkdir -p klolaform/distribution/hooks

# Buat file-file components
touch klolaform/distribution/components/ShareOptions.tsx
touch klolaform/distribution/components/EmailCampaign.tsx
touch klolaform/distribution/components/EmbedGenerator.tsx
touch klolaform/distribution/components/QRCodeGenerator.tsx

# Buat file-file services
touch klolaform/distribution/services/distributionService.ts
touch klolaform/distribution/services/emailService.ts
touch klolaform/distribution/services/trackingService.ts

# Buat file-file entities
touch klolaform/distribution/entities/Distribution.ts
touch klolaform/distribution/entities/Campaign.ts
touch klolaform/distribution/entities/Recipient.ts

# Buat file-file infra
touch klolaform/distribution/infra/repositories/distributionRepository.ts
touch klolaform/distribution/infra/api/distributionApi.ts

# Buat file-file hooks
touch klolaform/distribution/hooks/useDistribution.ts
touch klolaform/distribution/hooks/useEmailCampaign.ts
touch klolaform/distribution/hooks/useTracking.ts

# =============================================
# MODULE: INTEGRATIONS
# =============================================
mkdir -p klolaform/integrations/components
mkdir -p klolaform/integrations/services
mkdir -p klolaform/integrations/entities
mkdir -p klolaform/integrations/infra/repositories
mkdir -p klolaform/integrations/infra/api
mkdir -p klolaform/integrations/hooks

# Buat file-file components
touch klolaform/integrations/components/IntegrationList.tsx
touch klolaform/integrations/components/IntegrationSetup.tsx
touch klolaform/integrations/components/WebhookConfig.tsx
touch klolaform/integrations/components/APIKeys.tsx

# Buat file-file services
touch klolaform/integrations/services/integrationService.ts
touch klolaform/integrations/services/webhookService.ts

# Buat file-file entities
touch klolaform/integrations/entities/Integration.ts
touch klolaform/integrations/entities/Webhook.ts

# Buat file-file infra
touch klolaform/integrations/infra/repositories/integrationRepository.ts
touch klolaform/integrations/infra/api/integrationsApi.ts

# Buat file-file hooks
touch klolaform/integrations/hooks/useIntegrations.ts
touch klolaform/integrations/hooks/useWebhooks.ts

echo "Struktur folder dan file untuk direktori 'klolaform' telah dibuat."