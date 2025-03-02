// 配置：各API提供商信息 & 认证设置
const API_PROVIDERS = {
  OPENAI: {
      BASE_URL: 'https://aihubmix.com/v1',
      API_KEY: 'aihubmix的链接：https://aihubmix.com?aff=QADi',
      MODELS: [
          "Baichuan3-Turbo",
          "Baichuan3-Turbo-128k",
          "Baichuan4",
          "Baichuan4-Air",
          "Baichuan4-Turbo",
          "DeepSeek-R1",
          "DeepSeek-V3",
          "Doubao-1.5-lite-32k",
          "Doubao-1.5-pro-256k",
          "Doubao-1.5-pro-32k",
          "Doubao-1.5-vision-pro-32k",
          "Doubao-lite-128k",
          "Doubao-lite-32k",
          "Doubao-lite-4k",
          "Doubao-pro-128k",
          "Doubao-pro-256k",
          "Doubao-pro-32k",
          "Doubao-pro-4k",
          "Gryphe/MythoMax-L2-13b",
          "MiniMax-Text-01",
          "Mistral-large-2407",
          "Qwen/QVQ-72B-Preview",
          "Qwen/QwQ-32B-Preview",
          "Qwen/Qwen2-72B-Instruct",
          "Qwen/Qwen2-7B-Instruct",
          "Qwen/Qwen2.5-32B-Instruct",
          "Qwen/Qwen2.5-72B-Instruct",
          "Qwen/Qwen2.5-72B-Instruct-128K",
          "Qwen/Qwen2.5-7B-Instruct",
          "Qwen/Qwen2.5-Coder-32B-Instruct",
          "THUDM/chatglm3-6b",
          "THUDM/glm-4-9b-chat",
          "WizardLM/WizardCoder-Python-34B-V1.0",
          "ahm-Phi-3-5-MoE-instruct",
          "ahm-Phi-3-5-mini-instruct",
          "ahm-Phi-3-5-vision-instruct",
          "ahm-Phi-3-medium-128k",
          "ahm-Phi-3-medium-4k",
          "ahm-Phi-3-small-128k",
          "aihub-Phi-4",
          "aihubmix-Codestral-2501",
          "aihubmix-Cohere-command-r",
          "aihubmix-DeepSeek-R1",
          "aihubmix-Jamba-1-5-Large",
          "aihubmix-Llama-3-1-405B-Instruct",
          "aihubmix-Llama-3-1-70B-Instruct",
          "aihubmix-Llama-3-1-8B-Instruct",
          "aihubmix-Llama-3-2-11B-Vision",
          "aihubmix-Llama-3-2-90B-Vision",
          "aihubmix-Llama-3-3-70B-Instruct",
          "aihubmix-Llama-3-70B-Instruct",
          "aihubmix-Mistral-Large-2411",
          "aihubmix-Mistral-large",
          "aihubmix-Mistral-large-2407",
          "aihubmix-command-r-08-2024",
          "aihubmix-command-r-plus",
          "aihubmix-command-r-plus-08-2024",
          "anthropic-3-5-sonnet-20240620",
          "anthropic-3-5-sonnet-20241022",
          "babbage-002",
          "chatgpt-4o-latest",
          "claude-3-5-haiku-20241022",
          "claude-3-5-haiku-latest",
          "claude-3-5-sonnet-20240620",
          "claude-3-5-sonnet-20241022",
          "claude-3-5-sonnet-latest",
          "claude-3-5-sonnet@20240620",
          "claude-3-7-sonnet-20250219",
          "claude-3-7-sonnet-latest",
          "claude-3-haiku-20240307",
          "claude-3-opus-20240229",
          "claude-3-opus-latest",
          "claude-3-sonnet-20240229",
          "codestral-latest",
          "cogview-3-plus",
          "command",
          "command-light",
          "command-light-nightly",
          "command-nightly",
          "command-r",
          "command-r-08-2024",
          "command-r-plus",
          "command-r-plus-08-2024",
          "dall-e-2",
          "dall-e-3",
          "davinci-002",
          "deepseek-ai/DeepSeek-Coder-V2-Instruct",
          "deepseek-ai/DeepSeek-R1",
          "deepseek-ai/DeepSeek-R1-Distill-Llama-70B",
          "deepseek-ai/DeepSeek-R1-Distill-Llama-8B",
          "deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B",
          "deepseek-ai/DeepSeek-R1-Distill-Qwen-14B",
          "deepseek-ai/DeepSeek-R1-Distill-Qwen-32B",
          "deepseek-ai/DeepSeek-R1-Distill-Qwen-7B",
          "deepseek-ai/DeepSeek-R1-Zero",
          "deepseek-ai/DeepSeek-V2-Chat",
          "deepseek-ai/DeepSeek-V2.5",
          "deepseek-ai/DeepSeek-V3",
          "deepseek-ai/Janus-Pro-7B",
          "deepseek-ai/deepseek-vl2",
          "deepseek-chat",
          "deepseek-r1-distill-llama-70b",
          "deepseek-reasoner",
          "distil-whisper-large-v3-en",
          "gemini-1.5-flash",
          "gemini-1.5-flash-002",
          "gemini-1.5-flash-8b-exp-0827",
          "gemini-1.5-flash-exp-0827",
          "gemini-1.5-pro",
          "gemini-1.5-pro-002",
          "gemini-1.5-pro-exp-0801",
          "gemini-1.5-pro-exp-0827",
          "gemini-2.0-flash",
          "gemini-2.0-flash-exp",
          "gemini-2.0-flash-exp-search",
          "gemini-2.0-flash-lite",
          "gemini-2.0-flash-lite-preview-02-05",
          "gemini-2.0-flash-search",
          "gemini-2.0-flash-thinking-exp",
          "gemini-2.0-flash-thinking-exp-01-21",
          "gemini-2.0-flash-thinking-exp-1219",
          "gemini-2.0-pro-exp-02-05",
          "gemini-2.0-pro-exp-02-05-search",
          "gemini-exp-1114",
          "gemini-exp-1121",
          "gemini-exp-1206",
          "gemini-pro",
          "gemma2-9b-it",
          "glm-3-turbo",
          "glm-4",
          "glm-4-flash",
          "glm-4-plus",
          "glm-zero-preview",
          "google/gemma-2-27b-it",
          "gpt-3.5-turbo",
          "gpt-3.5-turbo-0125",
          "gpt-3.5-turbo-0613",
          "gpt-3.5-turbo-16k",
          "gpt-3.5-turbo-instruct",
          "gpt-4",
          "gpt-4-0125-preview",
          "gpt-4-0613",
          "gpt-4-1106-preview",
          "gpt-4-32k",
          "gpt-4-turbo",
          "gpt-4-turbo-preview",
          "gpt-4-vision-preview",
          "gpt-4o",
          "gpt-4o-2024-05-13",
          "gpt-4o-2024-08-06",
          "gpt-4o-2024-11-20",
          "gpt-4o-audio-preview",
          "gpt-4o-mini",
          "gpt-4o-mini-2024-07-18",
          "gpt-4o-zh",
          "grok-2-1212",
          "grok-2-vision-1212",
          "grok-beta",
          "grok-vision-beta",
          "kimi-latest",
          "learnlm-1.5-pro-experimental",
          "llama-3.1-405b-instruct",
          "llama-3.1-70b",
          "llama-3.1-70b-versatile",
          "llama-3.1-8b-instant",
          "llama-3.2-11b-vision-preview",
          "llama-3.2-1b-preview",
          "llama-3.2-3b-preview",
          "llama-3.2-90b-vision-preview",
          "llama-3.3-70b-versatile",
          "llama3-70b-8192",
          "llama3-8b-8192",
          "llama3-groq-8b-8192-tool-use-preview",
          "meta-llama/Llama-3.2-90B-Vision-Instruct",
          "microsoft/WizardLM-2-8x22B",
          "mistral-large-latest",
          "mistral-small-latest",
          "mixtral-8x7b-32768",
          "moonshot-v1-128k",
          "moonshot-v1-128k-vision-preview",
          "moonshot-v1-32k",
          "moonshot-v1-32k-vision-preview",
          "moonshot-v1-8k",
          "moonshot-v1-8k-vision-preview",
          "nvidia/llama-3.1-nemotron-70b-instruct",
          "o1",
          "o1-2024-12-17",
          "o1-mini",
          "o1-mini-2024-09-12",
          "o1-preview",
          "o1-preview-2024-09-12",
          "o3-mini",
          "omni-moderation-latest",
          "qwen-long",
          "qwen-max",
          "qwen-max-0125",
          "qwen-max-longcontext",
          "qwen-plus",
          "qwen-turbo",
          "qwen-turbo-2024-11-01",
          "qwen2.5-14b-instruct",
          "qwen2.5-32b-instruct",
          "qwen2.5-3b-instruct",
          "qwen2.5-72b-instruct",
          "qwen2.5-7b-instruct",
          "qwen2.5-coder-1.5b-instruct",
          "qwen2.5-coder-7b-instruct",
          "qwen2.5-math-72b-instruct",
          "qwen2.5-math-7b-instruct",
          "step-2-16k",
          "text-ada-001",
          "text-babbage-001",
          "text-curie-001",
          "text-davinci-002",
          "text-davinci-003",
          "text-davinci-edit-001",
          "text-embedding-3-large",
          "text-embedding-3-small",
          "text-embedding-ada-002",
          "text-moderation-latest",
          "text-moderation-latest",
          "text-moderation-stable",
          "tts-1",
          "tts-1-hd",
          "whisper-1",
          "whisper-large-v3",
          "whisper-large-v3-turbo",
          "yi-34b-chat-0205",
          "yi-34b-chat-200k",
          "yi-large",
          "yi-large-rag",
          "yi-large-turbo",
          "yi-lightning",
          "yi-medium"
      ]
  },
  DEEPSEEK_by_Tencent: {
      BASE_URL: 'https://api.lkeap.cloud.tencent.com/v1',
      API_KEY: '腾讯原子知识引擎能力的key',
      MODELS: ['deepseek-r1', 'deepseek-v3'] //模型列别
  }
};

// 认证密钥
const AUTH_KEY = '请求本页面需要的api key';

// 找到匹配模型的提供商
function findProviderForModel(modelName) {
    // 如果是空字符串，返回null
    if (!modelName) return null;
    
    for (const [provider, config] of Object.entries(API_PROVIDERS)) {
        // 精确匹配（区分大小写）
        if (config.MODELS.includes(modelName)) {
            return { provider, config, requestedModel: modelName };
        }
        
        // 不区分大小写匹配
        const lowerModelName = modelName.toLowerCase();
        const matchedModel = config.MODELS.find(model => 
            model.toLowerCase() === lowerModelName
        );
        
        if (matchedModel) {
            return { provider, config, requestedModel: matchedModel };
        }
    }
    
    // 没有找到匹配的提供商
    return null;
}

// 生成模型列表响应
function generateModelsResponse() {
    const models = [];

    // 遍历所有提供商的模型并添加到列表
    for (const [provider, config] of Object.entries(API_PROVIDERS)) {
        for (const model of config.MODELS) {
            models.push({
                id: model,
                object: "model",
                created: Math.floor(Date.now() / 1000), // 当前时间戳
                owned_by: provider.toLowerCase(),
                permission: [{
                    id: `modelperm-${model}`,
                    object: "model_permission",
                    created: Math.floor(Date.now() / 1000),
                    allow_create_engine: false,
                    allow_sampling: true,
                    allow_logprobs: true,
                    allow_search_indices: false,
                    allow_view: true,
                    allow_fine_tuning: false,
                    organization: "*",
                    group: null,
                    is_blocking: false
                }],
                root: model,
                parent: null
            });
        }
    }

    return { object: "list", data: models };
}

// 创建错误响应（双语）
function createErrorResponse(status, message, details = {}) {
    let errorMessage;
    
    switch(status) {
        case 401:
            errorMessage = "未授权：身份验证失败\nUnauthorized: Authentication failed";
            break;
        case 404:
            errorMessage = `未找到模型：${message}\nModel not found: ${message}`;
            break;
        case 400:
            errorMessage = `请求错误：${message}\nRequest error: ${message}`;
            break;
        case 500:
        default:
            errorMessage = `服务器错误：${message}\nServer error: ${message}`;
    }
    
    return new Response(JSON.stringify({
        error: {
            message: errorMessage,
            type: "error",
            status,
            details
        }
    }), {
        status,
        headers: { 'Content-Type': 'application/json' }
    });
}

export default {
    async fetch(request, env) {
        // 生成请求ID用于日志追踪
        const requestId = crypto.randomUUID();
        console.log(`[${requestId}] 收到请求: ${request.method} ${request.url}`);
        
        try {
            const url = new URL(request.url);
            
            //验证认证密钥
            const authHeader = request.headers.get('Authorization');
            if (!authHeader || authHeader !== `Bearer ${AUTH_KEY}`) {
                return createErrorResponse(401, "Invalid authentication");
            }
            
            // 2. 处理GET请求 - 获取模型列表
            if (request.method === 'GET' && url.pathname === '/v1/models') {
                const modelsResponse = generateModelsResponse();
                return new Response(JSON.stringify(modelsResponse), {
                    headers: { 'Content-Type': 'application/json' }
                });
            }
            
            //只处理POST请求 - 聊天完成接口
            if (request.method !== 'POST' || !url.pathname.endsWith('/chat/completions')) {
                return createErrorResponse(405, "Method not allowed or invalid endpoint");
            }
            
            //解析请求体
            const requestData = await request.json();
            const modelName = requestData.model;
            
            console.log(`[${requestId}] 请求模型: ${modelName}`);
            
            //寻找匹配的模型提供商
            const providerInfo = findProviderForModel(modelName);
            
            if (!providerInfo) {
                console.log(`[${requestId}] 未找到匹配的模型: ${modelName}`);
                return createErrorResponse(404, modelName, {
                    requested_model: modelName,
                    available_providers: Object.keys(API_PROVIDERS)
                });
            }
            
            const { provider, config, requestedModel } = providerInfo;
            console.log(`[${requestId}] 匹配到提供商: ${provider}, 模型: ${requestedModel}`);
            
            //如果模型名称不完全匹配（大小写不同），使用正确的模型名称
            if (requestedModel !== modelName) {
                requestData.model = requestedModel;
                console.log(`[${requestId}] 修正模型名称: ${modelName} -> ${requestedModel}`);
            }
            
            //构建API请求
            const apiUrl = `${config.BASE_URL}/chat/completions`;
            const headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Authorization', `Bearer ${config.API_KEY}`);
            
            console.log(`[${requestId}] 转发请求到: ${apiUrl}`);
            
            //发送请求到API提供商
            const apiResponse = await fetch(apiUrl, {
                method: 'POST',
                headers,
                body: JSON.stringify(requestData)
            });
            
            console.log(`[${requestId}] 提供商响应状态: ${apiResponse.status}`);
            
            //处理错误响应
            if (!apiResponse.ok) {
                let errorInfo = "Unknown error";
                let errorDetails = {};
                
                try {
                    const errorData = await apiResponse.json();
                    errorInfo = errorData.error?.message || JSON.stringify(errorData);
                    errorDetails = errorData;
                } catch (e) {
                    errorInfo = await apiResponse.text();
                }
                
                console.log(`[${requestId}] 提供商返回错误: ${errorInfo}`);
                
                return createErrorResponse(apiResponse.status, errorInfo, {
                    provider,
                    model: requestedModel,
                    details: errorDetails,
                    requestId
                });
            }
            
            //处理流式响应
            if (requestData.stream) {
                console.log(`[${requestId}] 返回流式响应`);
                return new Response(apiResponse.body, {
                    headers: {
                        'Content-Type': 'text/event-stream',
                        'Cache-Control': 'no-cache',
                        'X-Request-ID': requestId
                    }
                });
            }
            
            //处理标准响应
            console.log(`[${requestId}] 返回标准响应`);
            return new Response(apiResponse.body, {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'X-Request-ID': requestId
                }
            });
            
        } catch (error) {
            console.error(`[${requestId}] 处理请求时发生错误:`, error);
            
            return createErrorResponse(500, error.message, {
                requestId,
                stack: error.stack
            });
        }
    }
};
