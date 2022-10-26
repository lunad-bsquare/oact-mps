import { ILogger } from '../interfaces/ILogger'
import { ISecretManagerService } from '../interfaces/ISecretManagerService'
import { Environment } from '../utils/Environment'

export class SecretManagerCreatorFactory {
  static instance: ISecretManagerService

  async getSecretManager (logger: ILogger): Promise<ISecretManagerService> {
    if (SecretManagerCreatorFactory.instance == null) {
      const { default: Provider }: { default: new (logger: ILogger) => ISecretManagerService } =
        await import(`../secrets/${Environment.Config.secrets_provider}`)

      SecretManagerCreatorFactory.instance = new Provider(logger)
    }

    return SecretManagerCreatorFactory.instance
  }
}