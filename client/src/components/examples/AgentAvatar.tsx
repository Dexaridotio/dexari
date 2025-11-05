import { AgentAvatar } from '../AgentAvatar'

export default function AgentAvatarExample() {
  return (
    <div className="flex gap-4 items-center">
      <AgentAvatar address="0x742d35Cc6634C0532925a3b844Bc454e4438f44e" name="Alice Agent" size="sm" />
      <AgentAvatar address="0x853d955aCEf822Db058eb8505911ED77F175b99e" name="Bob Agent" size="md" />
      <AgentAvatar address="0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984" size="lg" />
    </div>
  )
}
