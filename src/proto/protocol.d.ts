//import * as protobuf from "protobufjs";
export = P;
/*export = P;*/type Long = number/*dcodeIO.Long*/;
declare namespace P {


    interface Ip_kv {
        key: number;
        value: number;
    }

    class p_kv implements Ip_kv {
        constructor(p?: Ip_kv);
        public key: number;
        public value: number;
        public static encode(m: Ip_kv, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_kv;
    }

    interface Ic2s_keepalive_request {
        time?: (number|Long|null);
    }

    class c2s_keepalive_request implements Ic2s_keepalive_request {
        public static cmd: number;
        constructor(p?: Ic2s_keepalive_request);
        public time: (number|Long);
        public static encode(m: Ic2s_keepalive_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_keepalive_request;
    }

    interface Is2c_keepalive_reply {
        time?: (number|Long|null);
    }

    class s2c_keepalive_reply implements Is2c_keepalive_reply {
        public static cmd: number;
        constructor(p?: Is2c_keepalive_reply);
        public time: (number|Long);
        public static encode(m: Is2c_keepalive_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_keepalive_reply;
    }

    interface Is2c_request_sucess {
    }

    class s2c_request_sucess implements Is2c_request_sucess {
        public static cmd: number;
        constructor(p?: Is2c_request_sucess);
        public static encode(m: Is2c_request_sucess, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_request_sucess;
    }

    interface Is2c_request_fail {
        code?: (number|null);
        reason?: (string|null);
    }

    class s2c_request_fail implements Is2c_request_fail {
        public static cmd: number;
        constructor(p?: Is2c_request_fail);
        public code: number;
        public reason: string;
        public static encode(m: Is2c_request_fail, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_request_fail;
    }

    interface Ic2s_gm_command {
        command: string;
    }

    class c2s_gm_command implements Ic2s_gm_command {
        public static cmd: number;
        constructor(p?: Ic2s_gm_command);
        public command: string;
        public static encode(m: Ic2s_gm_command, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_gm_command;
    }

    interface Ic2s_calc_formula_request {
        formulaId: number;
        paramList?: (number[]|null);
    }

    class c2s_calc_formula_request implements Ic2s_calc_formula_request {
        public static cmd: number;
        constructor(p?: Ic2s_calc_formula_request);
        public formulaId: number;
        public paramList: number[];
        public static encode(m: Ic2s_calc_formula_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_calc_formula_request;
    }

    interface Is2c_calc_formula_reply {
        formulaId: number;
        value: number;
    }

    class s2c_calc_formula_reply implements Is2c_calc_formula_reply {
        public static cmd: number;
        constructor(p?: Is2c_calc_formula_reply);
        public formulaId: number;
        public value: number;
        public static encode(m: Is2c_calc_formula_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_calc_formula_reply;
    }

    interface Ic2s_upload_client_error_request {
        errorMsg: string;
    }

    class c2s_upload_client_error_request implements Ic2s_upload_client_error_request {
        public static cmd: number;
        constructor(p?: Ic2s_upload_client_error_request);
        public errorMsg: string;
        public static encode(m: Ic2s_upload_client_error_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_upload_client_error_request;
    }

    interface Is2c_request_fail_member_notify {
        cmd: number;
        code: number;
        argsStr?: (string[]|null);
        argsInt?: ((number|Long)[]|null);
    }

    class s2c_request_fail_member_notify implements Is2c_request_fail_member_notify {
        public static cmd: number;
        constructor(p?: Is2c_request_fail_member_notify);
        public cmd: number;
        public code: number;
        public argsStr: string[];
        public argsInt: (number|Long)[];
        public static encode(m: Is2c_request_fail_member_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_request_fail_member_notify;
    }

    interface Ip_gameplay_info {
        id: number;
        prepareTime: number;
        beginTime: number;
        endTime: number;
        status: number;
    }

    class p_gameplay_info implements Ip_gameplay_info {
        constructor(p?: Ip_gameplay_info);
        public id: number;
        public prepareTime: number;
        public beginTime: number;
        public endTime: number;
        public status: number;
        public static encode(m: Ip_gameplay_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_gameplay_info;
    }

    interface Ic2s_gameplay_info_request {
    }

    class c2s_gameplay_info_request implements Ic2s_gameplay_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_gameplay_info_request);
        public static encode(m: Ic2s_gameplay_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_gameplay_info_request;
    }

    interface Is2c_gameplay_info_notify {
        list?: (Ip_gameplay_info[]|null);
    }

    class s2c_gameplay_info_notify implements Is2c_gameplay_info_notify {
        public static cmd: number;
        constructor(p?: Is2c_gameplay_info_notify);
        public list: Ip_gameplay_info[];
        public static encode(m: Is2c_gameplay_info_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_gameplay_info_notify;
    }

    interface Is2c_world_level_notify {
        level: number;
    }

    class s2c_world_level_notify implements Is2c_world_level_notify {
        public static cmd: number;
        constructor(p?: Is2c_world_level_notify);
        public level: number;
        public static encode(m: Is2c_world_level_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_world_level_notify;
    }

    interface Ic2s_whiteip_request {
    }

    class c2s_whiteip_request implements Ic2s_whiteip_request {
        public static cmd: number;
        constructor(p?: Ic2s_whiteip_request);
        public static encode(m: Ic2s_whiteip_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_whiteip_request;
    }

    interface Is2c_whiteip_notify {
        type: number;
    }

    class s2c_whiteip_notify implements Is2c_whiteip_notify {
        public static cmd: number;
        constructor(p?: Is2c_whiteip_notify);
        public type: number;
        public static encode(m: Is2c_whiteip_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_whiteip_notify;
    }

    interface Ic2s_pannel_contrl_request {
    }

    class c2s_pannel_contrl_request implements Ic2s_pannel_contrl_request {
        public static cmd: number;
        constructor(p?: Ic2s_pannel_contrl_request);
        public static encode(m: Ic2s_pannel_contrl_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_pannel_contrl_request;
    }

    interface Is2c_pannel_contrl_notify {
        pannelContrlList?: (Ip_kv[]|null);
    }

    class s2c_pannel_contrl_notify implements Is2c_pannel_contrl_notify {
        public static cmd: number;
        constructor(p?: Is2c_pannel_contrl_notify);
        public pannelContrlList: Ip_kv[];
        public static encode(m: Is2c_pannel_contrl_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_pannel_contrl_notify;
    }

    interface Ic2s_local_server_list_request {
    }

    class c2s_local_server_list_request implements Ic2s_local_server_list_request {
        public static cmd: number;
        constructor(p?: Ic2s_local_server_list_request);
        public static encode(m: Ic2s_local_server_list_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_local_server_list_request;
    }

    interface Is2c_local_server_list_reply {
        masterServerId: number;
        slaveServerId?: (number[]|null);
    }

    class s2c_local_server_list_reply implements Is2c_local_server_list_reply {
        public static cmd: number;
        constructor(p?: Is2c_local_server_list_reply);
        public masterServerId: number;
        public slaveServerId: number[];
        public static encode(m: Is2c_local_server_list_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_local_server_list_reply;
    }

    interface Ic2s_role_list_request {
        account: string;
        serverId: number;
    }

    class c2s_role_list_request implements Ic2s_role_list_request {
        public static cmd: number;
        constructor(p?: Ic2s_role_list_request);
        public account: string;
        public serverId: number;
        public static encode(m: Ic2s_role_list_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_role_list_request;
    }

    interface Irole_brief {
        id: (number|Long);
        account: string;
        name: string;
        serverId: number;
    }

    class role_brief implements Irole_brief {
        constructor(p?: Irole_brief);
        public id: (number|Long);
        public account: string;
        public name: string;
        public serverId: number;
        public static encode(m: Irole_brief, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): role_brief;
    }

    interface Irole_brief_info {
        id: (number|Long);
        name: string;
        sex: number;
        trans: number;
        level: number;
        combat: number;
        online: number;
    }

    class role_brief_info implements Irole_brief_info {
        constructor(p?: Irole_brief_info);
        public id: (number|Long);
        public name: string;
        public sex: number;
        public trans: number;
        public level: number;
        public combat: number;
        public online: number;
        public static encode(m: Irole_brief_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): role_brief_info;
    }

    interface Is2c_role_list_reply {
        roles?: (Irole_brief[]|null);
    }

    class s2c_role_list_reply implements Is2c_role_list_reply {
        public static cmd: number;
        constructor(p?: Is2c_role_list_reply);
        public roles: Irole_brief[];
        public static encode(m: Is2c_role_list_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_list_reply;
    }

    interface Ic2s_create_role_request {
        serverId: number;
        authType: number;
        sex: number;
        name: string;
        version: string;
        args?: (string[]|null);
        channel: string;
        phoneInfo?: (string|null);
        head: string;
        fromUrl?: (string|null);
        source?: (string|null);
    }

    class c2s_create_role_request implements Ic2s_create_role_request {
        public static cmd: number;
        constructor(p?: Ic2s_create_role_request);
        public serverId: number;
        public authType: number;
        public sex: number;
        public name: string;
        public version: string;
        public args: string[];
        public channel: string;
        public phoneInfo: string;
        public head: string;
        public fromUrl: string;
        public source: string;
        public static encode(m: Ic2s_create_role_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_create_role_request;
    }

    interface Ic2s_login_request {
        serverId: number;
        roleId: (number|Long);
        authType: number;
        args?: (string[]|null);
        channel: string;
        loginFlag?: (number|null);
        phoneInfo?: (string|null);
        head: string;
        version: string;
    }

    class c2s_login_request implements Ic2s_login_request {
        public static cmd: number;
        constructor(p?: Ic2s_login_request);
        public serverId: number;
        public roleId: (number|Long);
        public authType: number;
        public args: string[];
        public channel: string;
        public loginFlag: number;
        public phoneInfo: string;
        public head: string;
        public version: string;
        public static encode(m: Ic2s_login_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_login_request;
    }

    interface Is2c_login_reply {
        code: number;
        roleId?: (number|Long|null);
        level?: (number|null);
        sharelvl?: (number|null);
    }

    class s2c_login_reply implements Is2c_login_reply {
        public static cmd: number;
        constructor(p?: Is2c_login_reply);
        public code: number;
        public roleId: (number|Long);
        public level: number;
        public sharelvl: number;
        public static encode(m: Is2c_login_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_login_reply;
    }

    interface Is2c_kick_out_notify {
        code: number;
        reason?: (string|null);
    }

    class s2c_kick_out_notify implements Is2c_kick_out_notify {
        public static cmd: number;
        constructor(p?: Is2c_kick_out_notify);
        public code: number;
        public reason: string;
        public static encode(m: Is2c_kick_out_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_kick_out_notify;
    }

    interface Ip_role_info {
        id: (number|Long);
        account: string;
        serverId: number;
        name: string;
        sex: number;
        trans: number;
        level: number;
        exp: (number|Long);
        title: number;
        goldUnbound: (number|Long);
        goldBound: (number|Long);
        coin: (number|Long);
        hp: number;
        combat: number;
        vip: number;
        expPerMinute: (number|Long);
        expAdditionRate: number;
        pk: number;
        pkEndTime: number;
        charm: number;
        gangId: number;
        gangName: string;
        overflowExp: (number|Long);
        dragonSoulLv: number;
        coinInvit?: (number|Long|null);
        createAt: number;
        dayOnlineDuration: number;
    }

    class p_role_info implements Ip_role_info {
        constructor(p?: Ip_role_info);
        public id: (number|Long);
        public account: string;
        public serverId: number;
        public name: string;
        public sex: number;
        public trans: number;
        public level: number;
        public exp: (number|Long);
        public title: number;
        public goldUnbound: (number|Long);
        public goldBound: (number|Long);
        public coin: (number|Long);
        public hp: number;
        public combat: number;
        public vip: number;
        public expPerMinute: (number|Long);
        public expAdditionRate: number;
        public pk: number;
        public pkEndTime: number;
        public charm: number;
        public gangId: number;
        public gangName: string;
        public overflowExp: (number|Long);
        public dragonSoulLv: number;
        public coinInvit: (number|Long);
        public createAt: number;
        public dayOnlineDuration: number;
        public static encode(m: Ip_role_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_role_info;
    }

    interface Ip_fight_attribute {
        attack: number;
        hpMax: number;
        "break": number;
        defense: number;
        hit: number;
        dodge: number;
        crit: number;
        tenacity: number;
        elementAttack: number;
        elementDefense: number;
        damageDeepen: number;
        damageReduction: number;
        critProbability: number;
        critResist: number;
        critDamage: number;
        knowingDamage: number;
        knowingProbability: number;
        knowingResist: number;
        parryProbability: number;
        parryPass: number;
        skillDamageDeepen: number;
        skillDamageReduction: number;
        dodgeProbability: number;
    }

    class p_fight_attribute implements Ip_fight_attribute {
        constructor(p?: Ip_fight_attribute);
        public attack: number;
        public hpMax: number;
        public break: number;
        public defense: number;
        public hit: number;
        public dodge: number;
        public crit: number;
        public tenacity: number;
        public elementAttack: number;
        public elementDefense: number;
        public damageDeepen: number;
        public damageReduction: number;
        public critProbability: number;
        public critResist: number;
        public critDamage: number;
        public knowingDamage: number;
        public knowingProbability: number;
        public knowingResist: number;
        public parryProbability: number;
        public parryPass: number;
        public skillDamageDeepen: number;
        public skillDamageReduction: number;
        public dodgeProbability: number;
        public static encode(m: Ip_fight_attribute, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_fight_attribute;
    }

    interface Is2c_role_info_notify {
        info: Ip_role_info;
        fight: Ip_fight_attribute;
    }

    class s2c_role_info_notify implements Is2c_role_info_notify {
        public static cmd: number;
        constructor(p?: Is2c_role_info_notify);
        public info: Ip_role_info;
        public fight: Ip_fight_attribute;
        public static encode(m: Is2c_role_info_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_info_notify;
    }

    interface Is2c_role_info_changed_notify {
        info?: (Ip_kv_pair[]|null);
    }

    class s2c_role_info_changed_notify implements Is2c_role_info_changed_notify {
        public static cmd: number;
        constructor(p?: Is2c_role_info_changed_notify);
        public info: Ip_kv_pair[];
        public static encode(m: Is2c_role_info_changed_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_info_changed_notify;
    }

    interface Is2c_role_fight_attribute_changed_notify {
        attr: Ip_fight_attribute;
    }

    class s2c_role_fight_attribute_changed_notify implements Is2c_role_fight_attribute_changed_notify {
        public static cmd: number;
        constructor(p?: Is2c_role_fight_attribute_changed_notify);
        public attr: Ip_fight_attribute;
        public static encode(m: Is2c_role_fight_attribute_changed_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_fight_attribute_changed_notify;
    }

    interface Ic2s_query_role_info_request {
        roleId: (number|Long);
    }

    class c2s_query_role_info_request implements Ic2s_query_role_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_role_info_request);
        public roleId: (number|Long);
        public static encode(m: Ic2s_query_role_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_role_info_request;
    }

    interface Ip_role_friend {
        friendCount: number;
    }

    class p_role_friend implements Ip_role_friend {
        constructor(p?: Ip_role_friend);
        public friendCount: number;
        public static encode(m: Ip_role_friend, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_role_friend;
    }

    interface Is2c_query_role_info_reply {
        info: Ip_role_info;
        fight: Ip_fight_attribute;
        friendInfo: Ip_role_friend;
        teamId: (number|Long);
        spouseName?: (string|null);
    }

    class s2c_query_role_info_reply implements Is2c_query_role_info_reply {
        public static cmd: number;
        constructor(p?: Is2c_query_role_info_reply);
        public info: Ip_role_info;
        public fight: Ip_fight_attribute;
        public friendInfo: Ip_role_friend;
        public teamId: (number|Long);
        public spouseName: string;
        public static encode(m: Is2c_query_role_info_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_role_info_reply;
    }

    interface Ic2s_name_change_request {
        name: string;
    }

    class c2s_name_change_request implements Ic2s_name_change_request {
        public static cmd: number;
        constructor(p?: Ic2s_name_change_request);
        public name: string;
        public static encode(m: Ic2s_name_change_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_name_change_request;
    }

    interface Ic2s_role_revive_request {
        reviveType: number;
    }

    class c2s_role_revive_request implements Ic2s_role_revive_request {
        public static cmd: number;
        constructor(p?: Ic2s_role_revive_request);
        public reviveType: number;
        public static encode(m: Ic2s_role_revive_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_role_revive_request;
    }

    interface Ip_role_buff {
        id: number;
        typeId: number;
        enabled: number;
        startTime: (number|Long);
        endTime: (number|Long);
    }

    class p_role_buff implements Ip_role_buff {
        constructor(p?: Ip_role_buff);
        public id: number;
        public typeId: number;
        public enabled: number;
        public startTime: (number|Long);
        public endTime: (number|Long);
        public static encode(m: Ip_role_buff, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_role_buff;
    }

    interface Ic2s_role_buff_list_request {
    }

    class c2s_role_buff_list_request implements Ic2s_role_buff_list_request {
        public static cmd: number;
        constructor(p?: Ic2s_role_buff_list_request);
        public static encode(m: Ic2s_role_buff_list_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_role_buff_list_request;
    }

    interface Is2c_role_buff_list_reply {
        buffList?: (Ip_role_buff[]|null);
    }

    class s2c_role_buff_list_reply implements Is2c_role_buff_list_reply {
        public static cmd: number;
        constructor(p?: Is2c_role_buff_list_reply);
        public buffList: Ip_role_buff[];
        public static encode(m: Is2c_role_buff_list_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_buff_list_reply;
    }

    interface Is2c_add_role_buff_notify {
        buffList?: (Ip_role_buff[]|null);
    }

    class s2c_add_role_buff_notify implements Is2c_add_role_buff_notify {
        public static cmd: number;
        constructor(p?: Is2c_add_role_buff_notify);
        public buffList: Ip_role_buff[];
        public static encode(m: Is2c_add_role_buff_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_add_role_buff_notify;
    }

    interface Is2c_remove_role_buff_notify {
        idList?: (number[]|null);
    }

    class s2c_remove_role_buff_notify implements Is2c_remove_role_buff_notify {
        public static cmd: number;
        constructor(p?: Is2c_remove_role_buff_notify);
        public idList: number[];
        public static encode(m: Is2c_remove_role_buff_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_remove_role_buff_notify;
    }

    interface Ic2s_change_battle_mode_request {
        mode: number;
    }

    class c2s_change_battle_mode_request implements Ic2s_change_battle_mode_request {
        public static cmd: number;
        constructor(p?: Ic2s_change_battle_mode_request);
        public mode: number;
        public static encode(m: Ic2s_change_battle_mode_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_change_battle_mode_request;
    }

    interface Is2c_vip_info_notify {
        lv: number;
        timeout: number;
        exp: number;
        isGetExp: number;
        buyList?: (number[]|null);
    }

    class s2c_vip_info_notify implements Is2c_vip_info_notify {
        public static cmd: number;
        constructor(p?: Is2c_vip_info_notify);
        public lv: number;
        public timeout: number;
        public exp: number;
        public isGetExp: number;
        public buyList: number[];
        public static encode(m: Is2c_vip_info_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_vip_info_notify;
    }

    interface Ic2s_vip_get_exp {
        type: number;
    }

    class c2s_vip_get_exp implements Ic2s_vip_get_exp {
        public static cmd: number;
        constructor(p?: Ic2s_vip_get_exp);
        public type: number;
        public static encode(m: Ic2s_vip_get_exp, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_vip_get_exp;
    }

    interface Ic2s_vip_buy_gift_package {
        lv: number;
    }

    class c2s_vip_buy_gift_package implements Ic2s_vip_buy_gift_package {
        public static cmd: number;
        constructor(p?: Ic2s_vip_buy_gift_package);
        public lv: number;
        public static encode(m: Ic2s_vip_buy_gift_package, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_vip_buy_gift_package;
    }

    interface Is2c_vip_buy_gift_package {
        buyList?: (number[]|null);
    }

    class s2c_vip_buy_gift_package implements Is2c_vip_buy_gift_package {
        public static cmd: number;
        constructor(p?: Is2c_vip_buy_gift_package);
        public buyList: number[];
        public static encode(m: Is2c_vip_buy_gift_package, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_vip_buy_gift_package;
    }

    interface Is2c_change_role_buff_notify {
        buffList?: (Ip_role_buff[]|null);
    }

    class s2c_change_role_buff_notify implements Is2c_change_role_buff_notify {
        public static cmd: number;
        constructor(p?: Is2c_change_role_buff_notify);
        public buffList: Ip_role_buff[];
        public static encode(m: Is2c_change_role_buff_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_change_role_buff_notify;
    }

    interface Is2c_add_exp_notify {
        addExp: (number|Long);
        additionRate: number;
        reason: number;
    }

    class s2c_add_exp_notify implements Is2c_add_exp_notify {
        public static cmd: number;
        constructor(p?: Is2c_add_exp_notify);
        public addExp: (number|Long);
        public additionRate: number;
        public reason: number;
        public static encode(m: Is2c_add_exp_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_add_exp_notify;
    }

    interface Ic2s_query_role_image_info_request {
        roleId: (number|Long);
    }

    class c2s_query_role_image_info_request implements Ic2s_query_role_image_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_role_image_info_request);
        public roleId: (number|Long);
        public static encode(m: Ic2s_query_role_image_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_role_image_info_request;
    }

    interface Is2c_query_role_image_info_reply {
        wingImage: number;
        talismanImage: number;
        weaponImage: number;
        cloakImage: number;
        clothesDressupImage: number;
        weaponDressupImage: number;
        lightDressupImage: number;
        weaponId: number;
        bubbleDressupImage: number;
        frameDressupImage: number;
        headDressupImage: number;
        bgDressupImage: number;
    }

    class s2c_query_role_image_info_reply implements Is2c_query_role_image_info_reply {
        public static cmd: number;
        constructor(p?: Is2c_query_role_image_info_reply);
        public wingImage: number;
        public talismanImage: number;
        public weaponImage: number;
        public cloakImage: number;
        public clothesDressupImage: number;
        public weaponDressupImage: number;
        public lightDressupImage: number;
        public weaponId: number;
        public bubbleDressupImage: number;
        public frameDressupImage: number;
        public headDressupImage: number;
        public bgDressupImage: number;
        public static encode(m: Is2c_query_role_image_info_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_role_image_info_reply;
    }

    interface Ic2s_dragon_soul_lv_up {
        payWay: number;
    }

    class c2s_dragon_soul_lv_up implements Ic2s_dragon_soul_lv_up {
        public static cmd: number;
        constructor(p?: Ic2s_dragon_soul_lv_up);
        public payWay: number;
        public static encode(m: Ic2s_dragon_soul_lv_up, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_dragon_soul_lv_up;
    }

    interface Ic2s_trans_up {
    }

    class c2s_trans_up implements Ic2s_trans_up {
        public static cmd: number;
        constructor(p?: Ic2s_trans_up);
        public static encode(m: Ic2s_trans_up, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_trans_up;
    }

    interface Is2c_finish_trans_condition {
        finishTrans: number;
    }

    class s2c_finish_trans_condition implements Is2c_finish_trans_condition {
        public static cmd: number;
        constructor(p?: Is2c_finish_trans_condition);
        public finishTrans: number;
        public static encode(m: Is2c_finish_trans_condition, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_finish_trans_condition;
    }

    interface Ic2s_change_setting_request {
        settingList?: (Ip_kv_pair[]|null);
    }

    class c2s_change_setting_request implements Ic2s_change_setting_request {
        public static cmd: number;
        constructor(p?: Ic2s_change_setting_request);
        public settingList: Ip_kv_pair[];
        public static encode(m: Ic2s_change_setting_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_change_setting_request;
    }

    interface Is2c_setting_info_notify {
        settingList?: (Ip_kv_pair[]|null);
    }

    class s2c_setting_info_notify implements Is2c_setting_info_notify {
        public static cmd: number;
        constructor(p?: Is2c_setting_info_notify);
        public settingList: Ip_kv_pair[];
        public static encode(m: Is2c_setting_info_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_setting_info_notify;
    }

    interface Ic2s_complaint_request {
        type: number;
        title: string;
        content: string;
    }

    class c2s_complaint_request implements Ic2s_complaint_request {
        public static cmd: number;
        constructor(p?: Ic2s_complaint_request);
        public type: number;
        public title: string;
        public content: string;
        public static encode(m: Ic2s_complaint_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_complaint_request;
    }

    interface Is2c_revive_tired_info {
        dieTimes: number;
        dieTimestamp: number;
        tiredTime: number;
    }

    class s2c_revive_tired_info implements Is2c_revive_tired_info {
        public static cmd: number;
        constructor(p?: Is2c_revive_tired_info);
        public dieTimes: number;
        public dieTimestamp: number;
        public tiredTime: number;
        public static encode(m: Is2c_revive_tired_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_revive_tired_info;
    }

    interface Ic2s_query_revive_tired_info {
    }

    class c2s_query_revive_tired_info implements Ic2s_query_revive_tired_info {
        public static cmd: number;
        constructor(p?: Ic2s_query_revive_tired_info);
        public static encode(m: Ic2s_query_revive_tired_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_revive_tired_info;
    }

    interface Ic2s_month_card_request {
        type: number;
    }

    class c2s_month_card_request implements Ic2s_month_card_request {
        public static cmd: number;
        constructor(p?: Ic2s_month_card_request);
        public type: number;
        public static encode(m: Ic2s_month_card_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_month_card_request;
    }

    interface Is2c_month_card_reply {
        active: number;
        day: number;
        flag: number;
        fetchActiveRw: number;
        type: number;
    }

    class s2c_month_card_reply implements Is2c_month_card_reply {
        public static cmd: number;
        constructor(p?: Is2c_month_card_reply);
        public active: number;
        public day: number;
        public flag: number;
        public fetchActiveRw: number;
        public type: number;
        public static encode(m: Is2c_month_card_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_month_card_reply;
    }

    interface Ip_investment {
        type: number;
        grade: number;
    }

    class p_investment implements Ip_investment {
        constructor(p?: Ip_investment);
        public type: number;
        public grade: number;
        public static encode(m: Ip_investment, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_investment;
    }

    interface Ip_investment_reward {
        type: number;
        grade: number;
        level: number;
    }

    class p_investment_reward implements Ip_investment_reward {
        constructor(p?: Ip_investment_reward);
        public type: number;
        public grade: number;
        public level: number;
        public static encode(m: Ip_investment_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_investment_reward;
    }

    interface Is2c_investment_info {
        investmentList?: (Ip_investment[]|null);
        fetchedRewards?: (Ip_investment_reward[]|null);
    }

    class s2c_investment_info implements Is2c_investment_info {
        public static cmd: number;
        constructor(p?: Is2c_investment_info);
        public investmentList: Ip_investment[];
        public fetchedRewards: Ip_investment_reward[];
        public static encode(m: Is2c_investment_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_investment_info;
    }

    interface Ic2s_buy_investment_request {
        type: number;
        grade: number;
    }

    class c2s_buy_investment_request implements Ic2s_buy_investment_request {
        public static cmd: number;
        constructor(p?: Ic2s_buy_investment_request);
        public type: number;
        public grade: number;
        public static encode(m: Ic2s_buy_investment_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_buy_investment_request;
    }

    interface Ic2s_fetch_investment_reward_request {
        type: number;
        level: number;
    }

    class c2s_fetch_investment_reward_request implements Ic2s_fetch_investment_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_fetch_investment_reward_request);
        public type: number;
        public level: number;
        public static encode(m: Ic2s_fetch_investment_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_fetch_investment_reward_request;
    }

    interface Is2c_role_pray_info_notify {
        freeCoinPrayTime: number;
        coinPrayTimes: number;
        expPrayTimes: number;
        freeExpPrayTime: number;
    }

    class s2c_role_pray_info_notify implements Is2c_role_pray_info_notify {
        public static cmd: number;
        constructor(p?: Is2c_role_pray_info_notify);
        public freeCoinPrayTime: number;
        public coinPrayTimes: number;
        public expPrayTimes: number;
        public freeExpPrayTime: number;
        public static encode(m: Is2c_role_pray_info_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_pray_info_notify;
    }

    interface Ic2s_pray_request {
        type: number;
        adWatch: number;
    }

    class c2s_pray_request implements Ic2s_pray_request {
        public static cmd: number;
        constructor(p?: Ic2s_pray_request);
        public type: number;
        public adWatch: number;
        public static encode(m: Ic2s_pray_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_pray_request;
    }

    interface Is2c_pray_reply {
        type: number;
        gainCoin: (number|Long);
        gainExp: (number|Long);
        crit: number;
    }

    class s2c_pray_reply implements Is2c_pray_reply {
        public static cmd: number;
        constructor(p?: Is2c_pray_reply);
        public type: number;
        public gainCoin: (number|Long);
        public gainExp: (number|Long);
        public crit: number;
        public static encode(m: Is2c_pray_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_pray_reply;
    }

    interface Ic2s_get_offline_award_request {
        type: number;
        sharePicture: number;
    }

    class c2s_get_offline_award_request implements Ic2s_get_offline_award_request {
        public static cmd: number;
        constructor(p?: Ic2s_get_offline_award_request);
        public type: number;
        public sharePicture: number;
        public static encode(m: Ic2s_get_offline_award_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_offline_award_request;
    }

    interface Ip_role_score {
        id?: (number|null);
        fightScore?: (number|null);
    }

    class p_role_score implements Ip_role_score {
        constructor(p?: Ip_role_score);
        public id: number;
        public fightScore: number;
        public static encode(m: Ip_role_score, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_role_score;
    }

    interface Ic2s_role_fight_score_request {
        roleId: (number|Long);
    }

    class c2s_role_fight_score_request implements Ic2s_role_fight_score_request {
        public static cmd: number;
        constructor(p?: Ic2s_role_fight_score_request);
        public roleId: (number|Long);
        public static encode(m: Ic2s_role_fight_score_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_role_fight_score_request;
    }

    interface Is2c_role_fight_score_reply {
        roleId: (number|Long);
        scoreList?: (Ip_role_score[]|null);
    }

    class s2c_role_fight_score_reply implements Is2c_role_fight_score_reply {
        public static cmd: number;
        constructor(p?: Is2c_role_fight_score_reply);
        public roleId: (number|Long);
        public scoreList: Ip_role_score[];
        public static encode(m: Is2c_role_fight_score_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_fight_score_reply;
    }

    interface Is2c_role_print_log_notify {
        text?: (string|null);
    }

    class s2c_role_print_log_notify implements Is2c_role_print_log_notify {
        public static cmd: number;
        constructor(p?: Is2c_role_print_log_notify);
        public text: string;
        public static encode(m: Is2c_role_print_log_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_print_log_notify;
    }

    interface Is2c_role_anti_addicition_notify {
        onLineHour: number;
    }

    class s2c_role_anti_addicition_notify implements Is2c_role_anti_addicition_notify {
        public static cmd: number;
        constructor(p?: Is2c_role_anti_addicition_notify);
        public onLineHour: number;
        public static encode(m: Is2c_role_anti_addicition_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_anti_addicition_notify;
    }

    interface Ip_kv_pair {
        key: number;
        val?: (number|Long|null);
        strVal?: (string|null);
    }

    class p_kv_pair implements Ip_kv_pair {
        constructor(p?: Ip_kv_pair);
        public key: number;
        public val: (number|Long);
        public strVal: string;
        public static encode(m: Ip_kv_pair, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_kv_pair;
    }

    interface Iitem_simple {
        baseId: number;
        uniqId: (number|Long);
        bound: number;
        count: number;
    }

    class item_simple implements Iitem_simple {
        constructor(p?: Iitem_simple);
        public baseId: number;
        public uniqId: (number|Long);
        public bound: number;
        public count: number;
        public static encode(m: Iitem_simple, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): item_simple;
    }

    interface Iitem_use {
        baseId: number;
        uniqId: (number|Long);
        bound: number;
        count: number;
        targetId?: (number|null);
    }

    class item_use implements Iitem_use {
        constructor(p?: Iitem_use);
        public baseId: number;
        public uniqId: (number|Long);
        public bound: number;
        public count: number;
        public targetId: number;
        public static encode(m: Iitem_use, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): item_use;
    }

    interface Ip_chat_section {
        content: string;
        type: number;
        arg1?: (number|Long|null);
        arg2?: (number|Long|null);
        arg3?: (number|Long|null);
        arg4?: (string|null);
    }

    class p_chat_section implements Ip_chat_section {
        constructor(p?: Ip_chat_section);
        public content: string;
        public type: number;
        public arg1: (number|Long);
        public arg2: (number|Long);
        public arg3: (number|Long);
        public arg4: string;
        public static encode(m: Ip_chat_section, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_chat_section;
    }

    interface Ic2s_chat_request {
        channelId: number;
        contents?: (Ip_chat_section[]|null);
    }

    class c2s_chat_request implements Ic2s_chat_request {
        public static cmd: number;
        constructor(p?: Ic2s_chat_request);
        public channelId: number;
        public contents: Ip_chat_section[];
        public static encode(m: Ic2s_chat_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_chat_request;
    }

    interface Is2c_chat_reply {
    }

    class s2c_chat_reply implements Is2c_chat_reply {
        public static cmd: number;
        constructor(p?: Is2c_chat_reply);
        public static encode(m: Is2c_chat_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_chat_reply;
    }

    interface Is2c_chat_notify {
        id: number;
        args?: (Ip_anno_arg[]|null);
        channelId: number;
        roleId: (number|Long);
        time: number;
        name: string;
        sex: number;
        trans: number;
        vip: number;
        image: number;
        contents?: (Ip_chat_section[]|null);
        bubbleImage: number;
        frameImage: number;
        titleId: number;
        stateId: number;
    }

    class s2c_chat_notify implements Is2c_chat_notify {
        public static cmd: number;
        constructor(p?: Is2c_chat_notify);
        public id: number;
        public args: Ip_anno_arg[];
        public channelId: number;
        public roleId: (number|Long);
        public time: number;
        public name: string;
        public sex: number;
        public trans: number;
        public vip: number;
        public image: number;
        public contents: Ip_chat_section[];
        public bubbleImage: number;
        public frameImage: number;
        public titleId: number;
        public stateId: number;
        public static encode(m: Is2c_chat_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_chat_notify;
    }

    interface Ic2s_voice_request {
        voiceId: (number|Long);
    }

    class c2s_voice_request implements Ic2s_voice_request {
        public static cmd: number;
        constructor(p?: Ic2s_voice_request);
        public voiceId: (number|Long);
        public static encode(m: Ic2s_voice_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_voice_request;
    }

    interface Is2c_voice_reply {
        contents: string;
    }

    class s2c_voice_reply implements Is2c_voice_reply {
        public static cmd: number;
        constructor(p?: Is2c_voice_reply);
        public contents: string;
        public static encode(m: Is2c_voice_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_voice_reply;
    }

    interface Ic2s_init_chat_request {
    }

    class c2s_init_chat_request implements Ic2s_init_chat_request {
        public static cmd: number;
        constructor(p?: Ic2s_init_chat_request);
        public static encode(m: Ic2s_init_chat_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_init_chat_request;
    }

    interface Is2c_init_chat_reply {
        worldChat?: (Is2c_chat_notify[]|null);
        gangChat?: (Is2c_chat_notify[]|null);
        teamChat?: (Is2c_chat_notify[]|null);
        annoChat?: (Is2c_anno_notify[]|null);
    }

    class s2c_init_chat_reply implements Is2c_init_chat_reply {
        public static cmd: number;
        constructor(p?: Is2c_init_chat_reply);
        public worldChat: Is2c_chat_notify[];
        public gangChat: Is2c_chat_notify[];
        public teamChat: Is2c_chat_notify[];
        public annoChat: Is2c_anno_notify[];
        public static encode(m: Is2c_init_chat_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_init_chat_reply;
    }

    interface Is2c_role_remove_chat {
        roleId: number;
    }

    class s2c_role_remove_chat implements Is2c_role_remove_chat {
        public static cmd: number;
        constructor(p?: Is2c_role_remove_chat);
        public roleId: number;
        public static encode(m: Is2c_role_remove_chat, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_remove_chat;
    }

    interface Ic2s_is_in_block {
    }

    class c2s_is_in_block implements Ic2s_is_in_block {
        public static cmd: number;
        constructor(p?: Ic2s_is_in_block);
        public static encode(m: Ic2s_is_in_block, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_is_in_block;
    }

    interface Is2c_is_in_block {
        status: number;
        duration?: (number|null);
    }

    class s2c_is_in_block implements Is2c_is_in_block {
        public static cmd: number;
        constructor(p?: Is2c_is_in_block);
        public status: number;
        public duration: number;
        public static encode(m: Is2c_is_in_block, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_is_in_block;
    }

    interface Ic2s_ai_chat_request {
        info: Is2c_chat_notify;
    }

    class c2s_ai_chat_request implements Ic2s_ai_chat_request {
        public static cmd: number;
        constructor(p?: Ic2s_ai_chat_request);
        public info: Is2c_chat_notify;
        public static encode(m: Ic2s_ai_chat_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_ai_chat_request;
    }

    interface Is2c_ai_chat_notify {
        infoList?: (Is2c_chat_notify[]|null);
    }

    class s2c_ai_chat_notify implements Is2c_ai_chat_notify {
        public static cmd: number;
        constructor(p?: Is2c_ai_chat_notify);
        public infoList: Is2c_chat_notify[];
        public static encode(m: Is2c_ai_chat_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_ai_chat_notify;
    }

    interface Ip_anno_arg {
        argType: number;
        value: (number|Long);
        text: string;
        args?: ((number|Long)[]|null);
        extData?: (string|null);
    }

    class p_anno_arg implements Ip_anno_arg {
        constructor(p?: Ip_anno_arg);
        public argType: number;
        public value: (number|Long);
        public text: string;
        public args: (number|Long)[];
        public extData: string;
        public static encode(m: Ip_anno_arg, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_anno_arg;
    }

    interface Is2c_anno_notify {
        id: number;
        time: number;
        args?: (Ip_anno_arg[]|null);
    }

    class s2c_anno_notify implements Is2c_anno_notify {
        public static cmd: number;
        constructor(p?: Is2c_anno_notify);
        public id: number;
        public time: number;
        public args: Ip_anno_arg[];
        public static encode(m: Is2c_anno_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_anno_notify;
    }

    interface Ip_scene_role {
        id: (number|Long);
        name: string;
        posX: number;
        posY: number;
        level: number;
        sex: number;
        teamId: number;
        isLeader: number;
        gangId: (number|Long);
        gangName: string;
        gangPos: number;
        titleId: number;
        weaponId: number;
        spouseName: string;
        pk: number;
        moveSpeed: number;
        hp: (number|Long);
        hpMax: (number|Long);
        modelId: number;
        buffList?: (Ip_battle_buff[]|null);
        mode: number;
        horseType: number;
        wingType: number;
        talismanType: number;
        weaponType: number;
        cloakType: number;
        activityLv: number;
        dressUpClothesType: number;
        dressUpWeaponType: number;
        dressUpLightType: number;
        horsePositionStatus: number;
        escort: number;
        stateId: number;
        vipLevel?: (number|null);
        combat?: (number|null);
        serverId?: (number|null);
    }

    class p_scene_role implements Ip_scene_role {
        constructor(p?: Ip_scene_role);
        public id: (number|Long);
        public name: string;
        public posX: number;
        public posY: number;
        public level: number;
        public sex: number;
        public teamId: number;
        public isLeader: number;
        public gangId: (number|Long);
        public gangName: string;
        public gangPos: number;
        public titleId: number;
        public weaponId: number;
        public spouseName: string;
        public pk: number;
        public moveSpeed: number;
        public hp: (number|Long);
        public hpMax: (number|Long);
        public modelId: number;
        public buffList: Ip_battle_buff[];
        public mode: number;
        public horseType: number;
        public wingType: number;
        public talismanType: number;
        public weaponType: number;
        public cloakType: number;
        public activityLv: number;
        public dressUpClothesType: number;
        public dressUpWeaponType: number;
        public dressUpLightType: number;
        public horsePositionStatus: number;
        public escort: number;
        public stateId: number;
        public vipLevel: number;
        public combat: number;
        public serverId: number;
        public static encode(m: Ip_scene_role, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_scene_role;
    }

    interface Ip_scene_role_general {
        name: string;
        sex: number;
        wingType: number;
        talismanType: number;
        weaponType: number;
        cloakType: number;
        dressUpClothesType: number;
        dressUpWeaponType: number;
        dressUpLightType: number;
    }

    class p_scene_role_general implements Ip_scene_role_general {
        constructor(p?: Ip_scene_role_general);
        public name: string;
        public sex: number;
        public wingType: number;
        public talismanType: number;
        public weaponType: number;
        public cloakType: number;
        public dressUpClothesType: number;
        public dressUpWeaponType: number;
        public dressUpLightType: number;
        public static encode(m: Ip_scene_role_general, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_scene_role_general;
    }

    interface Ip_monster {
        id: (number|Long);
        type: number;
        typeId: number;
        posX: number;
        posY: number;
        moveSpeed?: (number|null);
        hp?: (number|Long|null);
        hpMax?: (number|Long|null);
        owner?: (number|Long|null);
        dropOwnerId?: ((number|Long)[]|null);
        itemId?: (number|null);
        monsterLevel?: (number|null);
        bornX?: (number|null);
        bornY?: (number|null);
        buffList?: (Ip_battle_buff[]|null);
    }

    class p_monster implements Ip_monster {
        constructor(p?: Ip_monster);
        public id: (number|Long);
        public type: number;
        public typeId: number;
        public posX: number;
        public posY: number;
        public moveSpeed: number;
        public hp: (number|Long);
        public hpMax: (number|Long);
        public owner: (number|Long);
        public dropOwnerId: (number|Long)[];
        public itemId: number;
        public monsterLevel: number;
        public bornX: number;
        public bornY: number;
        public buffList: Ip_battle_buff[];
        public static encode(m: Ip_monster, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_monster;
    }

    interface Ic2s_query_scene_role_request {
        roleId: (number|Long);
    }

    class c2s_query_scene_role_request implements Ic2s_query_scene_role_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_scene_role_request);
        public roleId: (number|Long);
        public static encode(m: Ic2s_query_scene_role_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_scene_role_request;
    }

    interface Is2c_query_scene_role_reply {
        role: Ip_scene_role_general;
    }

    class s2c_query_scene_role_reply implements Is2c_query_scene_role_reply {
        public static cmd: number;
        constructor(p?: Is2c_query_scene_role_reply);
        public role: Ip_scene_role_general;
        public static encode(m: Is2c_query_scene_role_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_scene_role_reply;
    }

    interface Ic2s_enter_scene_request {
        sceneId: number;
        posX: number;
        posY: number;
        jumpPointId?: (number|null);
    }

    class c2s_enter_scene_request implements Ic2s_enter_scene_request {
        public static cmd: number;
        constructor(p?: Ic2s_enter_scene_request);
        public sceneId: number;
        public posX: number;
        public posY: number;
        public jumpPointId: number;
        public static encode(m: Ic2s_enter_scene_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_enter_scene_request;
    }

    interface Is2c_enter_scene_notify {
        sceneId: number;
        posX: number;
        posY: number;
    }

    class s2c_enter_scene_notify implements Is2c_enter_scene_notify {
        public static cmd: number;
        constructor(p?: Is2c_enter_scene_notify);
        public sceneId: number;
        public posX: number;
        public posY: number;
        public static encode(m: Is2c_enter_scene_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_enter_scene_notify;
    }

    interface Ip_best_role {
        sex: number;
        role: Ip_scene_role;
        serverId: number;
    }

    class p_best_role implements Ip_best_role {
        constructor(p?: Ip_best_role);
        public sex: number;
        public role: Ip_scene_role;
        public serverId: number;
        public static encode(m: Ip_best_role, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_best_role;
    }

    interface Is2c_init_scene_notify {
        sceneId: number;
        monsterList?: (Ip_monster[]|null);
        data?: (number|Long|null);
        text?: (string|null);
        currentServerId?: (number|null);
        bestCombatList?: (Ip_best_role[]|null);
    }

    class s2c_init_scene_notify implements Is2c_init_scene_notify {
        public static cmd: number;
        constructor(p?: Is2c_init_scene_notify);
        public sceneId: number;
        public monsterList: Ip_monster[];
        public data: (number|Long);
        public text: string;
        public currentServerId: number;
        public bestCombatList: Ip_best_role[];
        public static encode(m: Is2c_init_scene_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_init_scene_notify;
    }

    interface Is2c_role_enter_aoi_notify {
        roleList?: (Ip_scene_role[]|null);
    }

    class s2c_role_enter_aoi_notify implements Is2c_role_enter_aoi_notify {
        public static cmd: number;
        constructor(p?: Is2c_role_enter_aoi_notify);
        public roleList: Ip_scene_role[];
        public static encode(m: Is2c_role_enter_aoi_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_enter_aoi_notify;
    }

    interface Is2c_role_leave_aoi_notify {
        roleIdList?: ((number|Long)[]|null);
    }

    class s2c_role_leave_aoi_notify implements Is2c_role_leave_aoi_notify {
        public static cmd: number;
        constructor(p?: Is2c_role_leave_aoi_notify);
        public roleIdList: (number|Long)[];
        public static encode(m: Is2c_role_leave_aoi_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_leave_aoi_notify;
    }

    interface Is2c_role_in_scene_changed_notify {
        id: (number|Long);
        list?: (Ip_kv_pair[]|null);
    }

    class s2c_role_in_scene_changed_notify implements Is2c_role_in_scene_changed_notify {
        public static cmd: number;
        constructor(p?: Is2c_role_in_scene_changed_notify);
        public id: (number|Long);
        public list: Ip_kv_pair[];
        public static encode(m: Is2c_role_in_scene_changed_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_in_scene_changed_notify;
    }

    interface Ic2s_role_move_request {
        posX: number;
        posY: number;
    }

    class c2s_role_move_request implements Ic2s_role_move_request {
        public static cmd: number;
        constructor(p?: Ic2s_role_move_request);
        public posX: number;
        public posY: number;
        public static encode(m: Ic2s_role_move_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_role_move_request;
    }

    interface Is2c_role_moved_notify {
        id: (number|Long);
        posX: number;
        posY: number;
    }

    class s2c_role_moved_notify implements Is2c_role_moved_notify {
        public static cmd: number;
        constructor(p?: Is2c_role_moved_notify);
        public id: (number|Long);
        public posX: number;
        public posY: number;
        public static encode(m: Is2c_role_moved_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_moved_notify;
    }

    interface Is2c_add_monster_notify {
        monsterList?: (Ip_monster[]|null);
    }

    class s2c_add_monster_notify implements Is2c_add_monster_notify {
        public static cmd: number;
        constructor(p?: Is2c_add_monster_notify);
        public monsterList: Ip_monster[];
        public static encode(m: Is2c_add_monster_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_add_monster_notify;
    }

    interface Is2c_remove_monster_notify {
        idList?: ((number|Long)[]|null);
    }

    class s2c_remove_monster_notify implements Is2c_remove_monster_notify {
        public static cmd: number;
        constructor(p?: Is2c_remove_monster_notify);
        public idList: (number|Long)[];
        public static encode(m: Is2c_remove_monster_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_remove_monster_notify;
    }

    interface Is2c_monster_changed_notify {
        id: (number|Long);
        list?: (Ip_kv_pair[]|null);
    }

    class s2c_monster_changed_notify implements Is2c_monster_changed_notify {
        public static cmd: number;
        constructor(p?: Is2c_monster_changed_notify);
        public id: (number|Long);
        public list: Ip_kv_pair[];
        public static encode(m: Is2c_monster_changed_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_monster_changed_notify;
    }

    interface Ic2s_do_gather_request {
        gatherId: (number|Long);
        typeId: number;
    }

    class c2s_do_gather_request implements Ic2s_do_gather_request {
        public static cmd: number;
        constructor(p?: Ic2s_do_gather_request);
        public gatherId: (number|Long);
        public typeId: number;
        public static encode(m: Ic2s_do_gather_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_do_gather_request;
    }

    interface Is2c_do_gather_notify {
        gatherId: (number|Long);
    }

    class s2c_do_gather_notify implements Is2c_do_gather_notify {
        public static cmd: number;
        constructor(p?: Is2c_do_gather_notify);
        public gatherId: (number|Long);
        public static encode(m: Is2c_do_gather_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_do_gather_notify;
    }

    interface Ic2s_pick_drop_request {
        dropId: (number|Long);
    }

    class c2s_pick_drop_request implements Ic2s_pick_drop_request {
        public static cmd: number;
        constructor(p?: Ic2s_pick_drop_request);
        public dropId: (number|Long);
        public static encode(m: Ic2s_pick_drop_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_pick_drop_request;
    }

    interface Is2c_monster_moved_notify {
        id: (number|Long);
        posX: number;
        posY: number;
    }

    class s2c_monster_moved_notify implements Is2c_monster_moved_notify {
        public static cmd: number;
        constructor(p?: Is2c_monster_moved_notify);
        public id: (number|Long);
        public posX: number;
        public posY: number;
        public static encode(m: Is2c_monster_moved_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_monster_moved_notify;
    }

    interface Ic2s_pet_move_request {
        posX: number;
        posY: number;
    }

    class c2s_pet_move_request implements Ic2s_pet_move_request {
        public static cmd: number;
        constructor(p?: Ic2s_pet_move_request);
        public posX: number;
        public posY: number;
        public static encode(m: Ic2s_pet_move_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_pet_move_request;
    }

    interface Ic2s_role_fly_request {
        posX: number;
        posY: number;
    }

    class c2s_role_fly_request implements Ic2s_role_fly_request {
        public static cmd: number;
        constructor(p?: Ic2s_role_fly_request);
        public posX: number;
        public posY: number;
        public static encode(m: Ic2s_role_fly_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_role_fly_request;
    }

    interface Is2c_role_fly_notify {
        roleId: (number|Long);
        posX: number;
        posY: number;
    }

    class s2c_role_fly_notify implements Is2c_role_fly_notify {
        public static cmd: number;
        constructor(p?: Is2c_role_fly_notify);
        public roleId: (number|Long);
        public posX: number;
        public posY: number;
        public static encode(m: Is2c_role_fly_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_fly_notify;
    }

    interface Is2c_monster_talk_notify {
        id: (number|Long);
        talkId: number;
    }

    class s2c_monster_talk_notify implements Is2c_monster_talk_notify {
        public static cmd: number;
        constructor(p?: Is2c_monster_talk_notify);
        public id: (number|Long);
        public talkId: number;
        public static encode(m: Is2c_monster_talk_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_monster_talk_notify;
    }

    interface Ic2s_query_zone_server_request {
    }

    class c2s_query_zone_server_request implements Ic2s_query_zone_server_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_zone_server_request);
        public static encode(m: Ic2s_query_zone_server_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_zone_server_request;
    }

    interface Is2c_zone_server_reply {
        currentServerId: number;
        zoneId: number;
        serverIdList?: (number[]|null);
    }

    class s2c_zone_server_reply implements Is2c_zone_server_reply {
        public static cmd: number;
        constructor(p?: Is2c_zone_server_reply);
        public currentServerId: number;
        public zoneId: number;
        public serverIdList: number[];
        public static encode(m: Is2c_zone_server_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_zone_server_reply;
    }

    interface Ic2s_enter_zone_inter_city_request {
    }

    class c2s_enter_zone_inter_city_request implements Ic2s_enter_zone_inter_city_request {
        public static cmd: number;
        constructor(p?: Ic2s_enter_zone_inter_city_request);
        public static encode(m: Ic2s_enter_zone_inter_city_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_enter_zone_inter_city_request;
    }

    interface Ic2s_enter_zone_server_city_request {
        targetServerId: number;
    }

    class c2s_enter_zone_server_city_request implements Ic2s_enter_zone_server_city_request {
        public static cmd: number;
        constructor(p?: Ic2s_enter_zone_server_city_request);
        public targetServerId: number;
        public static encode(m: Ic2s_enter_zone_server_city_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_enter_zone_server_city_request;
    }

    interface Ic2s_begin_do_gather_request {
        gatherId: (number|Long);
        typeId: number;
    }

    class c2s_begin_do_gather_request implements Ic2s_begin_do_gather_request {
        public static cmd: number;
        constructor(p?: Ic2s_begin_do_gather_request);
        public gatherId: (number|Long);
        public typeId: number;
        public static encode(m: Ic2s_begin_do_gather_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_begin_do_gather_request;
    }

    interface Is2c_begin_alloc_zone_notify {
    }

    class s2c_begin_alloc_zone_notify implements Is2c_begin_alloc_zone_notify {
        public static cmd: number;
        constructor(p?: Is2c_begin_alloc_zone_notify);
        public static encode(m: Is2c_begin_alloc_zone_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_begin_alloc_zone_notify;
    }

    interface Is2c_monster_owner_change_notify {
        monsterId: (number|Long);
        dropOwnerId?: ((number|Long)[]|null);
    }

    class s2c_monster_owner_change_notify implements Is2c_monster_owner_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_monster_owner_change_notify);
        public monsterId: (number|Long);
        public dropOwnerId: (number|Long)[];
        public static encode(m: Is2c_monster_owner_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_monster_owner_change_notify;
    }

    interface Ic2s_best_combat_request {
    }

    class c2s_best_combat_request implements Ic2s_best_combat_request {
        public static cmd: number;
        constructor(p?: Ic2s_best_combat_request);
        public static encode(m: Ic2s_best_combat_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_best_combat_request;
    }

    interface Is2c_best_combat_reply {
        bestCombatList?: (Ip_best_role[]|null);
    }

    class s2c_best_combat_reply implements Is2c_best_combat_reply {
        public static cmd: number;
        constructor(p?: Is2c_best_combat_reply);
        public bestCombatList: Ip_best_role[];
        public static encode(m: Is2c_best_combat_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_best_combat_reply;
    }

    interface Ip_battle_actor {
        actorId: (number|Long);
        actorType: number;
        x?: (number|null);
        y?: (number|null);
        hp?: (number|Long|null);
        effectHp?: (number|Long|null);
    }

    class p_battle_actor implements Ip_battle_actor {
        constructor(p?: Ip_battle_actor);
        public actorId: (number|Long);
        public actorType: number;
        public x: number;
        public y: number;
        public hp: (number|Long);
        public effectHp: (number|Long);
        public static encode(m: Ip_battle_actor, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_battle_actor;
    }

    interface Ip_battle_target {
        targetId: (number|Long);
        targetType: number;
        x?: (number|null);
        y?: (number|null);
        damageType?: (number|null);
        hp?: (number|Long|null);
        effectHp?: (number|Long|null);
    }

    class p_battle_target implements Ip_battle_target {
        constructor(p?: Ip_battle_target);
        public targetId: (number|Long);
        public targetType: number;
        public x: number;
        public y: number;
        public damageType: number;
        public hp: (number|Long);
        public effectHp: (number|Long);
        public static encode(m: Ip_battle_target, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_battle_target;
    }

    interface Ic2s_use_skill_request {
        skillId: number;
        actorType: number;
        targetType: number;
        targetId: (number|Long);
        x: number;
        y: number;
    }

    class c2s_use_skill_request implements Ic2s_use_skill_request {
        public static cmd: number;
        constructor(p?: Ic2s_use_skill_request);
        public skillId: number;
        public actorType: number;
        public targetType: number;
        public targetId: (number|Long);
        public x: number;
        public y: number;
        public static encode(m: Ic2s_use_skill_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_use_skill_request;
    }

    interface Is2c_skill_result_notify {
        skillId: number;
        actor: Ip_battle_actor;
        targets?: (Ip_battle_target[]|null);
        x: number;
        y: number;
    }

    class s2c_skill_result_notify implements Is2c_skill_result_notify {
        public static cmd: number;
        constructor(p?: Is2c_skill_result_notify);
        public skillId: number;
        public actor: Ip_battle_actor;
        public targets: Ip_battle_target[];
        public x: number;
        public y: number;
        public static encode(m: Is2c_skill_result_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_skill_result_notify;
    }

    interface Ip_battle_buff {
        id: number;
        typeId: number;
        endTime: (number|Long);
        value: (number|Long);
    }

    class p_battle_buff implements Ip_battle_buff {
        constructor(p?: Ip_battle_buff);
        public id: number;
        public typeId: number;
        public endTime: (number|Long);
        public value: (number|Long);
        public static encode(m: Ip_battle_buff, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_battle_buff;
    }

    interface Is2c_add_battle_buff_notify {
        id: (number|Long);
        type: number;
        buffList?: (Ip_battle_buff[]|null);
    }

    class s2c_add_battle_buff_notify implements Is2c_add_battle_buff_notify {
        public static cmd: number;
        constructor(p?: Is2c_add_battle_buff_notify);
        public id: (number|Long);
        public type: number;
        public buffList: Ip_battle_buff[];
        public static encode(m: Is2c_add_battle_buff_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_add_battle_buff_notify;
    }

    interface Is2c_remove_battle_buff_notify {
        id: (number|Long);
        type: number;
        buffIdList?: (number[]|null);
    }

    class s2c_remove_battle_buff_notify implements Is2c_remove_battle_buff_notify {
        public static cmd: number;
        constructor(p?: Is2c_remove_battle_buff_notify);
        public id: (number|Long);
        public type: number;
        public buffIdList: number[];
        public static encode(m: Is2c_remove_battle_buff_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_remove_battle_buff_notify;
    }

    interface Is2c_change_battle_buff_notify {
        id: (number|Long);
        type: number;
        buffList?: (Ip_battle_buff[]|null);
    }

    class s2c_change_battle_buff_notify implements Is2c_change_battle_buff_notify {
        public static cmd: number;
        constructor(p?: Is2c_change_battle_buff_notify);
        public id: (number|Long);
        public type: number;
        public buffList: Ip_battle_buff[];
        public static encode(m: Is2c_change_battle_buff_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_change_battle_buff_notify;
    }

    interface Is2c_skill_error_notify {
        actorType: number;
        actorId: (number|Long);
        skillId: number;
        errorCode: number;
    }

    class s2c_skill_error_notify implements Is2c_skill_error_notify {
        public static cmd: number;
        constructor(p?: Is2c_skill_error_notify);
        public actorType: number;
        public actorId: (number|Long);
        public skillId: number;
        public errorCode: number;
        public static encode(m: Is2c_skill_error_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_skill_error_notify;
    }

    interface Ip_battle_rank_info {
        rank?: (number|null);
        roleId?: (number|null);
        name?: (string|null);
        damage?: (number|Long|null);
        serverId?: (number|null);
    }

    class p_battle_rank_info implements Ip_battle_rank_info {
        constructor(p?: Ip_battle_rank_info);
        public rank: number;
        public roleId: number;
        public name: string;
        public damage: (number|Long);
        public serverId: number;
        public static encode(m: Ip_battle_rank_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_battle_rank_info;
    }

    interface Ic2s_battle_rank_list_query_request {
        monsterId?: (number|null);
    }

    class c2s_battle_rank_list_query_request implements Ic2s_battle_rank_list_query_request {
        public static cmd: number;
        constructor(p?: Ic2s_battle_rank_list_query_request);
        public monsterId: number;
        public static encode(m: Ic2s_battle_rank_list_query_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_battle_rank_list_query_request;
    }

    interface Is2c_battle_rank_list_query_respond {
        isOpen?: (number|null);
        rankList?: (Ip_battle_rank_info[]|null);
    }

    class s2c_battle_rank_list_query_respond implements Is2c_battle_rank_list_query_respond {
        public static cmd: number;
        constructor(p?: Is2c_battle_rank_list_query_respond);
        public isOpen: number;
        public rankList: Ip_battle_rank_info[];
        public static encode(m: Is2c_battle_rank_list_query_respond, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_battle_rank_list_query_respond;
    }

    interface Ip_pet {
        level: number;
        exp: number;
        starranklevel: number;
        starrankexp: number;
        skills?: (number[]|null);
        petImageInScene: number;
        changePetList?: (Ip_change_pet[]|null);
        combat: number;
        effects?: (Ip_pet_attr[]|null);
        isActive?: (number|null);
    }

    class p_pet implements Ip_pet {
        constructor(p?: Ip_pet);
        public level: number;
        public exp: number;
        public starranklevel: number;
        public starrankexp: number;
        public skills: number[];
        public petImageInScene: number;
        public changePetList: Ip_change_pet[];
        public combat: number;
        public effects: Ip_pet_attr[];
        public isActive: number;
        public static encode(m: Ip_pet, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_pet;
    }

    interface Ip_pet_attr {
        name: string;
        val: number;
    }

    class p_pet_attr implements Ip_pet_attr {
        constructor(p?: Ip_pet_attr);
        public name: string;
        public val: number;
        public static encode(m: Ip_pet_attr, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_pet_attr;
    }

    interface Ip_change_pet {
        typeId: number;
        rank: number;
        rankexp: number;
        combat: number;
        effects?: (Ip_pet_attr[]|null);
        validTime?: (number|null);
    }

    class p_change_pet implements Ip_change_pet {
        constructor(p?: Ip_change_pet);
        public typeId: number;
        public rank: number;
        public rankexp: number;
        public combat: number;
        public effects: Ip_pet_attr[];
        public validTime: number;
        public static encode(m: Ip_change_pet, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_change_pet;
    }

    interface Ic2s_pet_info_request {
    }

    class c2s_pet_info_request implements Ic2s_pet_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_pet_info_request);
        public static encode(m: Ic2s_pet_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_pet_info_request;
    }

    interface Is2c_pet_info_reply {
        pet: Ip_pet;
    }

    class s2c_pet_info_reply implements Is2c_pet_info_reply {
        public static cmd: number;
        constructor(p?: Is2c_pet_info_reply);
        public pet: Ip_pet;
        public static encode(m: Is2c_pet_info_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_pet_info_reply;
    }

    interface Is2c_pet_info_change_notify {
        pet: Ip_pet;
    }

    class s2c_pet_info_change_notify implements Is2c_pet_info_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_pet_info_change_notify);
        public pet: Ip_pet;
        public static encode(m: Is2c_pet_info_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_pet_info_change_notify;
    }

    interface Ic2s_pet_increase_starranklevel_request {
        itemId: number;
        oneKey: number;
    }

    class c2s_pet_increase_starranklevel_request implements Ic2s_pet_increase_starranklevel_request {
        public static cmd: number;
        constructor(p?: Ic2s_pet_increase_starranklevel_request);
        public itemId: number;
        public oneKey: number;
        public static encode(m: Ic2s_pet_increase_starranklevel_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_pet_increase_starranklevel_request;
    }

    interface Ic2s_change_pet_activate_request {
        typeId: number;
    }

    class c2s_change_pet_activate_request implements Ic2s_change_pet_activate_request {
        public static cmd: number;
        constructor(p?: Ic2s_change_pet_activate_request);
        public typeId: number;
        public static encode(m: Ic2s_change_pet_activate_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_change_pet_activate_request;
    }

    interface Ic2s_change_pet_increase_rank_request {
        typeId: number;
        itemId: number;
        oneKey: number;
    }

    class c2s_change_pet_increase_rank_request implements Ic2s_change_pet_increase_rank_request {
        public static cmd: number;
        constructor(p?: Ic2s_change_pet_increase_rank_request);
        public typeId: number;
        public itemId: number;
        public oneKey: number;
        public static encode(m: Ic2s_change_pet_increase_rank_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_change_pet_increase_rank_request;
    }

    interface Ic2s_pet_image_in_scene {
        typeId: number;
    }

    class c2s_pet_image_in_scene implements Ic2s_pet_image_in_scene {
        public static cmd: number;
        constructor(p?: Ic2s_pet_image_in_scene);
        public typeId: number;
        public static encode(m: Ic2s_pet_image_in_scene, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_pet_image_in_scene;
    }

    interface Ic2s_pet_active_request {
    }

    class c2s_pet_active_request implements Ic2s_pet_active_request {
        public static cmd: number;
        constructor(p?: Ic2s_pet_active_request);
        public static encode(m: Ic2s_pet_active_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_pet_active_request;
    }

    interface Ic2s_active_pet_skill_request {
        skillid: number;
    }

    class c2s_active_pet_skill_request implements Ic2s_active_pet_skill_request {
        public static cmd: number;
        constructor(p?: Ic2s_active_pet_skill_request);
        public skillid: number;
        public static encode(m: Ic2s_active_pet_skill_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_active_pet_skill_request;
    }

    interface Is2c_active_pet_skill_reply {
        skillid: number;
    }

    class s2c_active_pet_skill_reply implements Is2c_active_pet_skill_reply {
        public static cmd: number;
        constructor(p?: Is2c_active_pet_skill_reply);
        public skillid: number;
        public static encode(m: Is2c_active_pet_skill_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_active_pet_skill_reply;
    }

    interface Ic2s_show_bag_request {
        bagType: number;
    }

    class c2s_show_bag_request implements Ic2s_show_bag_request {
        public static cmd: number;
        constructor(p?: Ic2s_show_bag_request);
        public bagType: number;
        public static encode(m: Ic2s_show_bag_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_show_bag_request;
    }

    interface Is2c_show_bag_reply {
        bagType: number;
        extraCellNum: number;
        items?: (Ip_item[]|null);
    }

    class s2c_show_bag_reply implements Is2c_show_bag_reply {
        public static cmd: number;
        constructor(p?: Is2c_show_bag_reply);
        public bagType: number;
        public extraCellNum: number;
        public items: Ip_item[];
        public static encode(m: Is2c_show_bag_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_show_bag_reply;
    }

    interface Ic2s_use_bag_item_request {
        items?: (Iitem_simple[]|null);
    }

    class c2s_use_bag_item_request implements Ic2s_use_bag_item_request {
        public static cmd: number;
        constructor(p?: Ic2s_use_bag_item_request);
        public items: Iitem_simple[];
        public static encode(m: Ic2s_use_bag_item_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_use_bag_item_request;
    }

    interface Is2c_use_bag_item_reply {
        msgId: number;
    }

    class s2c_use_bag_item_reply implements Is2c_use_bag_item_reply {
        public static cmd: number;
        constructor(p?: Is2c_use_bag_item_reply);
        public msgId: number;
        public static encode(m: Is2c_use_bag_item_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_use_bag_item_reply;
    }

    interface Ic2s_recycle_item_request {
        items?: (Iitem_simple[]|null);
        bagType: number;
    }

    class c2s_recycle_item_request implements Ic2s_recycle_item_request {
        public static cmd: number;
        constructor(p?: Ic2s_recycle_item_request);
        public items: Iitem_simple[];
        public bagType: number;
        public static encode(m: Ic2s_recycle_item_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_recycle_item_request;
    }

    interface Is2c_recycle_item_reply {
        msgId: number;
        bagType: number;
    }

    class s2c_recycle_item_reply implements Is2c_recycle_item_reply {
        public static cmd: number;
        constructor(p?: Is2c_recycle_item_reply);
        public msgId: number;
        public bagType: number;
        public static encode(m: Is2c_recycle_item_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_recycle_item_reply;
    }

    interface Ic2s_compose_item_request {
        baseId: number;
        uniqIds?: (Ip_uniq_id[]|null);
    }

    class c2s_compose_item_request implements Ic2s_compose_item_request {
        public static cmd: number;
        constructor(p?: Ic2s_compose_item_request);
        public baseId: number;
        public uniqIds: Ip_uniq_id[];
        public static encode(m: Ic2s_compose_item_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_compose_item_request;
    }

    interface Ic2s_compose_wearing_equip_request {
        baseId: number;
        uniqIds?: (Ip_uniq_id[]|null);
    }

    class c2s_compose_wearing_equip_request implements Ic2s_compose_wearing_equip_request {
        public static cmd: number;
        constructor(p?: Ic2s_compose_wearing_equip_request);
        public baseId: number;
        public uniqIds: Ip_uniq_id[];
        public static encode(m: Ic2s_compose_wearing_equip_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_compose_wearing_equip_request;
    }

    interface Is2c_compose_item_reply {
        baseId: number;
    }

    class s2c_compose_item_reply implements Is2c_compose_item_reply {
        public static cmd: number;
        constructor(p?: Is2c_compose_item_reply);
        public baseId: number;
        public static encode(m: Is2c_compose_item_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_compose_item_reply;
    }

    interface Ip_uniq_id {
        uniqId: (number|Long);
    }

    class p_uniq_id implements Ip_uniq_id {
        constructor(p?: Ip_uniq_id);
        public uniqId: (number|Long);
        public static encode(m: Ip_uniq_id, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_uniq_id;
    }

    interface Ic2s_discompose_item_request {
        uniqId: (number|Long);
        itemId: number;
    }

    class c2s_discompose_item_request implements Ic2s_discompose_item_request {
        public static cmd: number;
        constructor(p?: Ic2s_discompose_item_request);
        public uniqId: (number|Long);
        public itemId: number;
        public static encode(m: Ic2s_discompose_item_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_discompose_item_request;
    }

    interface Is2c_bag_change_notify {
        items?: (Ip_change_item[]|null);
    }

    class s2c_bag_change_notify implements Is2c_bag_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_bag_change_notify);
        public items: Ip_change_item[];
        public static encode(m: Is2c_bag_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_bag_change_notify;
    }

    interface Ip_change_item {
        bagType: number;
        item: Ip_item;
        reason: number;
    }

    class p_change_item implements Ip_change_item {
        constructor(p?: Ip_change_item);
        public bagType: number;
        public item: Ip_item;
        public reason: number;
        public static encode(m: Ip_change_item, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_change_item;
    }

    interface Ic2s_access_store_request {
        type: number;
        baseId: number;
        uniqId: (number|Long);
        bound: number;
        count: number;
    }

    class c2s_access_store_request implements Ic2s_access_store_request {
        public static cmd: number;
        constructor(p?: Ic2s_access_store_request);
        public type: number;
        public baseId: number;
        public uniqId: (number|Long);
        public bound: number;
        public count: number;
        public static encode(m: Ic2s_access_store_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_access_store_request;
    }

    interface Is2c_access_store_reply {
    }

    class s2c_access_store_reply implements Is2c_access_store_reply {
        public static cmd: number;
        constructor(p?: Is2c_access_store_reply);
        public static encode(m: Is2c_access_store_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_access_store_reply;
    }

    interface Ic2s_access_xunbao_bag_request {
        type: number;
        baseId: number;
        uniqId: (number|Long);
        bound: number;
        count: number;
    }

    class c2s_access_xunbao_bag_request implements Ic2s_access_xunbao_bag_request {
        public static cmd: number;
        constructor(p?: Ic2s_access_xunbao_bag_request);
        public type: number;
        public baseId: number;
        public uniqId: (number|Long);
        public bound: number;
        public count: number;
        public static encode(m: Ic2s_access_xunbao_bag_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_access_xunbao_bag_request;
    }

    interface Is2c_cell_num_change {
        type: number;
        extraCellNum: number;
    }

    class s2c_cell_num_change implements Is2c_cell_num_change {
        public static cmd: number;
        constructor(p?: Is2c_cell_num_change);
        public type: number;
        public extraCellNum: number;
        public static encode(m: Is2c_cell_num_change, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_cell_num_change;
    }

    interface Ip_item {
        flag: number;
        baseId: number;
        uniqId: (number|Long);
        bound: number;
        count: number;
        equip?: (Ip_equip_item|null);
        fate?: (Ip_item_fate|null);
        elfEquip?: (Ip_elf_equip|null);
        soulEquipGrid?: (Ip_soul_equip_grid_info|null);
        squireEquip?: (Ip_squire_equip|null);
    }

    class p_item implements Ip_item {
        constructor(p?: Ip_item);
        public flag: number;
        public baseId: number;
        public uniqId: (number|Long);
        public bound: number;
        public count: number;
        public equip?: (Ip_equip_item|null);
        public fate?: (Ip_item_fate|null);
        public elfEquip?: (Ip_elf_equip|null);
        public soulEquipGrid?: (Ip_soul_equip_grid_info|null);
        public squireEquip?: (Ip_squire_equip|null);
        public static encode(m: Ip_item, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_item;
    }

    interface Ip_equip_item {
        equipBasicAttr?: (Ip_equip_attr[]|null);
        equipBlueAttr?: (Ip_equip_attr[]|null);
        equipPurpleAttr?: (Ip_equip_attr[]|null);
        equipPinkAttr?: (Ip_equip_attr[]|null);
        equipScore: number;
        equipGem?: (Ip_equip_gem[]|null);
        equipActivity: number;
        suitList?: (Ip_kv_pair[]|null);
        equipGemScore: number;
        timeLeft: number;
    }

    class p_equip_item implements Ip_equip_item {
        constructor(p?: Ip_equip_item);
        public equipBasicAttr: Ip_equip_attr[];
        public equipBlueAttr: Ip_equip_attr[];
        public equipPurpleAttr: Ip_equip_attr[];
        public equipPinkAttr: Ip_equip_attr[];
        public equipScore: number;
        public equipGem: Ip_equip_gem[];
        public equipActivity: number;
        public suitList: Ip_kv_pair[];
        public equipGemScore: number;
        public timeLeft: number;
        public static encode(m: Ip_equip_item, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_equip_item;
    }

    interface Ip_equip_attr {
        name: string;
        val: number;
    }

    class p_equip_attr implements Ip_equip_attr {
        constructor(p?: Ip_equip_attr);
        public name: string;
        public val: number;
        public static encode(m: Ip_equip_attr, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_equip_attr;
    }

    interface Ip_equip_gem {
        baseId: number;
        gemPos: number;
    }

    class p_equip_gem implements Ip_equip_gem {
        constructor(p?: Ip_equip_gem);
        public baseId: number;
        public gemPos: number;
        public static encode(m: Ip_equip_gem, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_equip_gem;
    }

    interface Ip_elf_equip {
        uniqId: (number|Long);
        itemId: number;
        pos: number;
        strengthenLv: number;
        strengthenExp: number;
        blueAttr?: (Ip_equip_attr[]|null);
        purpleAttr?: (Ip_equip_attr[]|null);
        score: number;
        baseScore: number;
    }

    class p_elf_equip implements Ip_elf_equip {
        constructor(p?: Ip_elf_equip);
        public uniqId: (number|Long);
        public itemId: number;
        public pos: number;
        public strengthenLv: number;
        public strengthenExp: number;
        public blueAttr: Ip_equip_attr[];
        public purpleAttr: Ip_equip_attr[];
        public score: number;
        public baseScore: number;
        public static encode(m: Ip_elf_equip, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_elf_equip;
    }

    interface Ip_squire_equip {
        uniqId: (number|Long);
        itemId: number;
        pos: number;
        score: number;
    }

    class p_squire_equip implements Ip_squire_equip {
        constructor(p?: Ip_squire_equip);
        public uniqId: (number|Long);
        public itemId: number;
        public pos: number;
        public score: number;
        public static encode(m: Ip_squire_equip, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_squire_equip;
    }

    interface Ip_soul_equip_grid_info {
        grade: number;
    }

    class p_soul_equip_grid_info implements Ip_soul_equip_grid_info {
        constructor(p?: Ip_soul_equip_grid_info);
        public grade: number;
        public static encode(m: Ip_soul_equip_grid_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_soul_equip_grid_info;
    }

    interface Is2c_change_bound_notify {
        items?: (Ip_item_unbound[]|null);
    }

    class s2c_change_bound_notify implements Is2c_change_bound_notify {
        public static cmd: number;
        constructor(p?: Is2c_change_bound_notify);
        public items: Ip_item_unbound[];
        public static encode(m: Is2c_change_bound_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_change_bound_notify;
    }

    interface Ip_item_unbound {
        uniqId: (number|Long);
        baseId: number;
        count: number;
    }

    class p_item_unbound implements Ip_item_unbound {
        constructor(p?: Ip_item_unbound);
        public uniqId: (number|Long);
        public baseId: number;
        public count: number;
        public static encode(m: Ip_item_unbound, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_item_unbound;
    }

    interface Is2c_role_item_use_num {
        items?: (Iitem_use_num[]|null);
    }

    class s2c_role_item_use_num implements Is2c_role_item_use_num {
        public static cmd: number;
        constructor(p?: Is2c_role_item_use_num);
        public items: Iitem_use_num[];
        public static encode(m: Is2c_role_item_use_num, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_item_use_num;
    }

    interface Is2c_item_use_num_change {
        items?: (Iitem_use_num[]|null);
    }

    class s2c_item_use_num_change implements Is2c_item_use_num_change {
        public static cmd: number;
        constructor(p?: Is2c_item_use_num_change);
        public items: Iitem_use_num[];
        public static encode(m: Is2c_item_use_num_change, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_item_use_num_change;
    }

    interface Iitem_use_num {
        baseId: number;
        count: number;
    }

    class item_use_num implements Iitem_use_num {
        constructor(p?: Iitem_use_num);
        public baseId: number;
        public count: number;
        public static encode(m: Iitem_use_num, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): item_use_num;
    }

    interface Ic2s_equip_take_apart {
        uniqId: (number|Long);
    }

    class c2s_equip_take_apart implements Ic2s_equip_take_apart {
        public static cmd: number;
        constructor(p?: Ic2s_equip_take_apart);
        public uniqId: (number|Long);
        public static encode(m: Ic2s_equip_take_apart, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_equip_take_apart;
    }

    interface Icompose_item_record_p {
        roleId: (number|Long);
        roleName: string;
        itemId: number;
        count: number;
        time: number;
        extData: string;
        result: number;
    }

    class compose_item_record_p implements Icompose_item_record_p {
        constructor(p?: Icompose_item_record_p);
        public roleId: (number|Long);
        public roleName: string;
        public itemId: number;
        public count: number;
        public time: number;
        public extData: string;
        public result: number;
        public static encode(m: Icompose_item_record_p, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): compose_item_record_p;
    }

    interface Ic2s_compose_item_records_request {
    }

    class c2s_compose_item_records_request implements Ic2s_compose_item_records_request {
        public static cmd: number;
        constructor(p?: Ic2s_compose_item_records_request);
        public static encode(m: Ic2s_compose_item_records_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_compose_item_records_request;
    }

    interface Is2c_compose_item_records_reply {
        records?: (Icompose_item_record_p[]|null);
    }

    class s2c_compose_item_records_reply implements Is2c_compose_item_records_reply {
        public static cmd: number;
        constructor(p?: Is2c_compose_item_records_reply);
        public records: Icompose_item_record_p[];
        public static encode(m: Is2c_compose_item_records_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_compose_item_records_reply;
    }

    interface Is2c_compose_item_record_notify {
        record: Icompose_item_record_p;
    }

    class s2c_compose_item_record_notify implements Is2c_compose_item_record_notify {
        public static cmd: number;
        constructor(p?: Is2c_compose_item_record_notify);
        public record: Icompose_item_record_p;
        public static encode(m: Is2c_compose_item_record_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_compose_item_record_notify;
    }

    interface Is2c_pick_item_notify {
        items?: (Ip_kv_pair[]|null);
    }

    class s2c_pick_item_notify implements Is2c_pick_item_notify {
        public static cmd: number;
        constructor(p?: Is2c_pick_item_notify);
        public items: Ip_kv_pair[];
        public static encode(m: Is2c_pick_item_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_pick_item_notify;
    }

    interface Ic2s_use_bag_item_use_request {
        items?: (Iitem_use[]|null);
    }

    class c2s_use_bag_item_use_request implements Ic2s_use_bag_item_use_request {
        public static cmd: number;
        constructor(p?: Ic2s_use_bag_item_use_request);
        public items: Iitem_use[];
        public static encode(m: Ic2s_use_bag_item_use_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_use_bag_item_use_request;
    }

    interface Is2c_use_bag_item_use_reply {
        msgId: number;
    }

    class s2c_use_bag_item_use_reply implements Is2c_use_bag_item_use_reply {
        public static cmd: number;
        constructor(p?: Is2c_use_bag_item_use_reply);
        public msgId: number;
        public static encode(m: Is2c_use_bag_item_use_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_use_bag_item_use_reply;
    }

    interface Ic2s_change_item_sex_request {
        type: number;
        uniqId: (number|Long);
    }

    class c2s_change_item_sex_request implements Ic2s_change_item_sex_request {
        public static cmd: number;
        constructor(p?: Ic2s_change_item_sex_request);
        public type: number;
        public uniqId: (number|Long);
        public static encode(m: Ic2s_change_item_sex_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_change_item_sex_request;
    }

    interface Is2c_open_box_notify {
        boxId: number;
        itemList?: (Ip_item[]|null);
    }

    class s2c_open_box_notify implements Is2c_open_box_notify {
        public static cmd: number;
        constructor(p?: Is2c_open_box_notify);
        public boxId: number;
        public itemList: Ip_item[];
        public static encode(m: Is2c_open_box_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_open_box_notify;
    }

    interface Ip_fate {
        landStone: number;
        landDebris: number;
        landGrids?: (Ip_grid[]|null);
        skyStone: number;
        skyDebris: number;
        skyGrids?: (Ip_grid[]|null);
        lockedUniqidList?: ((number|Long)[]|null);
    }

    class p_fate implements Ip_fate {
        constructor(p?: Ip_fate);
        public landStone: number;
        public landDebris: number;
        public landGrids: Ip_grid[];
        public skyStone: number;
        public skyDebris: number;
        public skyGrids: Ip_grid[];
        public lockedUniqidList: (number|Long)[];
        public static encode(m: Ip_fate, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_fate;
    }

    interface Ip_grid {
        pos: number;
        itemId: number;
        uniqId: (number|Long);
        level: number;
        bound: number;
    }

    class p_grid implements Ip_grid {
        constructor(p?: Ip_grid);
        public pos: number;
        public itemId: number;
        public uniqId: (number|Long);
        public level: number;
        public bound: number;
        public static encode(m: Ip_grid, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_grid;
    }

    interface Ip_item_fate {
        level: number;
        lock: number;
    }

    class p_item_fate implements Ip_item_fate {
        constructor(p?: Ip_item_fate);
        public level: number;
        public lock: number;
        public static encode(m: Ip_item_fate, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_item_fate;
    }

    interface Ic2s_fate_info_request {
        roleId: (number|Long);
    }

    class c2s_fate_info_request implements Ic2s_fate_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_fate_info_request);
        public roleId: (number|Long);
        public static encode(m: Ic2s_fate_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_fate_info_request;
    }

    interface Is2c_fate_info_reply {
        roleId: (number|Long);
        fate: Ip_fate;
    }

    class s2c_fate_info_reply implements Is2c_fate_info_reply {
        public static cmd: number;
        constructor(p?: Is2c_fate_info_reply);
        public roleId: (number|Long);
        public fate: Ip_fate;
        public static encode(m: Is2c_fate_info_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_fate_info_reply;
    }

    interface Is2c_fate_info_change_notify {
        fate: Ip_fate;
    }

    class s2c_fate_info_change_notify implements Is2c_fate_info_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_fate_info_change_notify);
        public fate: Ip_fate;
        public static encode(m: Is2c_fate_info_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_fate_info_change_notify;
    }

    interface Ic2s_grid_increase_request {
        type: number;
        pos: number;
    }

    class c2s_grid_increase_request implements Ic2s_grid_increase_request {
        public static cmd: number;
        constructor(p?: Ic2s_grid_increase_request);
        public type: number;
        public pos: number;
        public static encode(m: Ic2s_grid_increase_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_grid_increase_request;
    }

    interface Ic2s_grid_replace_request {
        type: number;
        pos: number;
        itemId: number;
        uniqId: (number|Long);
        bound: number;
    }

    class c2s_grid_replace_request implements Ic2s_grid_replace_request {
        public static cmd: number;
        constructor(p?: Ic2s_grid_replace_request);
        public type: number;
        public pos: number;
        public itemId: number;
        public uniqId: (number|Long);
        public bound: number;
        public static encode(m: Ic2s_grid_replace_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_grid_replace_request;
    }

    interface Ic2s_fate_lock_unlock_request {
        type: number;
        uniqIdList?: ((number|Long)[]|null);
    }

    class c2s_fate_lock_unlock_request implements Ic2s_fate_lock_unlock_request {
        public static cmd: number;
        constructor(p?: Ic2s_fate_lock_unlock_request);
        public type: number;
        public uniqIdList: (number|Long)[];
        public static encode(m: Ic2s_fate_lock_unlock_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_fate_lock_unlock_request;
    }

    interface Is2c_fate_lock_unlock_reply {
        lockedUniqidList?: ((number|Long)[]|null);
    }

    class s2c_fate_lock_unlock_reply implements Is2c_fate_lock_unlock_reply {
        public static cmd: number;
        constructor(p?: Is2c_fate_lock_unlock_reply);
        public lockedUniqidList: (number|Long)[];
        public static encode(m: Is2c_fate_lock_unlock_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_fate_lock_unlock_reply;
    }

    interface Ic2s_fate_decompose_request {
        uniqIdList?: ((number|Long)[]|null);
    }

    class c2s_fate_decompose_request implements Ic2s_fate_decompose_request {
        public static cmd: number;
        constructor(p?: Ic2s_fate_decompose_request);
        public uniqIdList: (number|Long)[];
        public static encode(m: Ic2s_fate_decompose_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_fate_decompose_request;
    }

    interface Ip_count {
        key: number;
        value: (number|Long);
    }

    class p_count implements Ip_count {
        constructor(p?: Ip_count);
        public key: number;
        public value: (number|Long);
        public static encode(m: Ip_count, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_count;
    }

    interface Is2c_counter_changed {
        counters?: (Ip_count[]|null);
    }

    class s2c_counter_changed implements Is2c_counter_changed {
        public static cmd: number;
        constructor(p?: Is2c_counter_changed);
        public counters: Ip_count[];
        public static encode(m: Is2c_counter_changed, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_counter_changed;
    }

    interface Ip_skill {
        groupId: number;
        skillId: number;
        autoUse: number;
    }

    class p_skill implements Ip_skill {
        constructor(p?: Ip_skill);
        public groupId: number;
        public skillId: number;
        public autoUse: number;
        public static encode(m: Ip_skill, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_skill;
    }

    interface Ic2s_show_skill_request {
    }

    class c2s_show_skill_request implements Ic2s_show_skill_request {
        public static cmd: number;
        constructor(p?: Ic2s_show_skill_request);
        public static encode(m: Ic2s_show_skill_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_show_skill_request;
    }

    interface Is2c_show_skill_reply {
        skillList?: (Ip_skill[]|null);
        autoUseList?: (number[]|null);
    }

    class s2c_show_skill_reply implements Is2c_show_skill_reply {
        public static cmd: number;
        constructor(p?: Is2c_show_skill_reply);
        public skillList: Ip_skill[];
        public autoUseList: number[];
        public static encode(m: Is2c_show_skill_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_show_skill_reply;
    }

    interface Is2c_skill_changed_notify {
        items?: (Ip_skill[]|null);
        autoUseList?: (number[]|null);
    }

    class s2c_skill_changed_notify implements Is2c_skill_changed_notify {
        public static cmd: number;
        constructor(p?: Is2c_skill_changed_notify);
        public items: Ip_skill[];
        public autoUseList: number[];
        public static encode(m: Is2c_skill_changed_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_skill_changed_notify;
    }

    interface Ic2s_set_auto_use_skill_request {
        groupId: number;
        isAutoUse: number;
    }

    class c2s_set_auto_use_skill_request implements Ic2s_set_auto_use_skill_request {
        public static cmd: number;
        constructor(p?: Ic2s_set_auto_use_skill_request);
        public groupId: number;
        public isAutoUse: number;
        public static encode(m: Ic2s_set_auto_use_skill_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_set_auto_use_skill_request;
    }

    interface Ic2s_change_auto_use_order_request {
        autoUseList?: (number[]|null);
    }

    class c2s_change_auto_use_order_request implements Ic2s_change_auto_use_order_request {
        public static cmd: number;
        constructor(p?: Ic2s_change_auto_use_order_request);
        public autoUseList: number[];
        public static encode(m: Ic2s_change_auto_use_order_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_change_auto_use_order_request;
    }

    interface Ic2s_mall_buy_log_request {
    }

    class c2s_mall_buy_log_request implements Ic2s_mall_buy_log_request {
        public static cmd: number;
        constructor(p?: Ic2s_mall_buy_log_request);
        public static encode(m: Ic2s_mall_buy_log_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_mall_buy_log_request;
    }

    interface Is2c_mall_buy_log_reply {
        items?: (Ip_mall_item[]|null);
    }

    class s2c_mall_buy_log_reply implements Is2c_mall_buy_log_reply {
        public static cmd: number;
        constructor(p?: Is2c_mall_buy_log_reply);
        public items: Ip_mall_item[];
        public static encode(m: Is2c_mall_buy_log_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_mall_buy_log_reply;
    }

    interface Ic2s_mall_buy_request {
        id: number;
        count: number;
    }

    class c2s_mall_buy_request implements Ic2s_mall_buy_request {
        public static cmd: number;
        constructor(p?: Ic2s_mall_buy_request);
        public id: number;
        public count: number;
        public static encode(m: Ic2s_mall_buy_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_mall_buy_request;
    }

    interface Is2c_mall_buy_reply {
        items: Ip_mall_item;
    }

    class s2c_mall_buy_reply implements Is2c_mall_buy_reply {
        public static cmd: number;
        constructor(p?: Is2c_mall_buy_reply);
        public items: Ip_mall_item;
        public static encode(m: Is2c_mall_buy_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_mall_buy_reply;
    }

    interface Ic2s_mall_use_request {
        id: number;
    }

    class c2s_mall_use_request implements Ic2s_mall_use_request {
        public static cmd: number;
        constructor(p?: Ic2s_mall_use_request);
        public id: number;
        public static encode(m: Ic2s_mall_use_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_mall_use_request;
    }

    interface Is2c_mall_use_reply {
        items: Ip_mall_item;
    }

    class s2c_mall_use_reply implements Is2c_mall_use_reply {
        public static cmd: number;
        constructor(p?: Is2c_mall_use_reply);
        public items: Ip_mall_item;
        public static encode(m: Is2c_mall_use_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_mall_use_reply;
    }

    interface Ip_mall_item {
        id: number;
        count: number;
    }

    class p_mall_item implements Ip_mall_item {
        constructor(p?: Ip_mall_item);
        public id: number;
        public count: number;
        public static encode(m: Ip_mall_item, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_mall_item;
    }

    interface Ic2s_mall_xbuy_limit_info {
        type: number;
    }

    class c2s_mall_xbuy_limit_info implements Ic2s_mall_xbuy_limit_info {
        public static cmd: number;
        constructor(p?: Ic2s_mall_xbuy_limit_info);
        public type: number;
        public static encode(m: Ic2s_mall_xbuy_limit_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_mall_xbuy_limit_info;
    }

    interface Is2c_mall_xbuy_limit_info_reply {
        type: number;
        items?: (Ip_mall_item[]|null);
        oriPrice: number;
        sellPrice: number;
        priceType: number;
        startTime: number;
        endTime: number;
        cont: number;
        limitCont: number;
        day: number;
        isReward: number;
    }

    class s2c_mall_xbuy_limit_info_reply implements Is2c_mall_xbuy_limit_info_reply {
        public static cmd: number;
        constructor(p?: Is2c_mall_xbuy_limit_info_reply);
        public type: number;
        public items: Ip_mall_item[];
        public oriPrice: number;
        public sellPrice: number;
        public priceType: number;
        public startTime: number;
        public endTime: number;
        public cont: number;
        public limitCont: number;
        public day: number;
        public isReward: number;
        public static encode(m: Is2c_mall_xbuy_limit_info_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_mall_xbuy_limit_info_reply;
    }

    interface Ic2s_mall_get_reward {
        type: number;
    }

    class c2s_mall_get_reward implements Ic2s_mall_get_reward {
        public static cmd: number;
        constructor(p?: Ic2s_mall_get_reward);
        public type: number;
        public static encode(m: Ic2s_mall_get_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_mall_get_reward;
    }

    interface Ip_mail_attachment {
        type: number;
        id: number;
        num: number;
        bound?: (number|null);
        uniqId?: (number|Long|null);
    }

    class p_mail_attachment implements Ip_mail_attachment {
        constructor(p?: Ip_mail_attachment);
        public type: number;
        public id: number;
        public num: number;
        public bound: number;
        public uniqId: (number|Long);
        public static encode(m: Ip_mail_attachment, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_mail_attachment;
    }

    interface Ip_mail {
        id: (number|Long);
        textId: number;
        from: (number|Long);
        to: (number|Long);
        title: string;
        author: string;
        content: string;
        attachment?: (Ip_mail_attachment[]|null);
        sendTime: number;
        expireTime: number;
        status: number;
    }

    class p_mail implements Ip_mail {
        constructor(p?: Ip_mail);
        public id: (number|Long);
        public textId: number;
        public from: (number|Long);
        public to: (number|Long);
        public title: string;
        public author: string;
        public content: string;
        public attachment: Ip_mail_attachment[];
        public sendTime: number;
        public expireTime: number;
        public status: number;
        public static encode(m: Ip_mail, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_mail;
    }

    interface Ip_mail_brief {
        id: (number|Long);
        textId: number;
        attachment: number;
        sendTime: number;
        status: number;
    }

    class p_mail_brief implements Ip_mail_brief {
        constructor(p?: Ip_mail_brief);
        public id: (number|Long);
        public textId: number;
        public attachment: number;
        public sendTime: number;
        public status: number;
        public static encode(m: Ip_mail_brief, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_mail_brief;
    }

    interface Ip_mail_status {
        id: (number|Long);
        status: number;
    }

    class p_mail_status implements Ip_mail_status {
        constructor(p?: Ip_mail_status);
        public id: (number|Long);
        public status: number;
        public static encode(m: Ip_mail_status, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_mail_status;
    }

    interface Ic2s_query_mail_list_request {
    }

    class c2s_query_mail_list_request implements Ic2s_query_mail_list_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_mail_list_request);
        public static encode(m: Ic2s_query_mail_list_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_mail_list_request;
    }

    interface Is2c_query_mail_list_reply {
        mailList?: (Ip_mail[]|null);
    }

    class s2c_query_mail_list_reply implements Is2c_query_mail_list_reply {
        public static cmd: number;
        constructor(p?: Is2c_query_mail_list_reply);
        public mailList: Ip_mail[];
        public static encode(m: Is2c_query_mail_list_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_mail_list_reply;
    }

    interface Is2c_receive_mail_notify {
        mail: Ip_mail;
    }

    class s2c_receive_mail_notify implements Is2c_receive_mail_notify {
        public static cmd: number;
        constructor(p?: Is2c_receive_mail_notify);
        public mail: Ip_mail;
        public static encode(m: Is2c_receive_mail_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_receive_mail_notify;
    }

    interface Ic2s_read_mail_request {
        mailId: (number|Long);
    }

    class c2s_read_mail_request implements Ic2s_read_mail_request {
        public static cmd: number;
        constructor(p?: Ic2s_read_mail_request);
        public mailId: (number|Long);
        public static encode(m: Ic2s_read_mail_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_read_mail_request;
    }

    interface Ic2s_extract_attachment_request {
        mailIdList?: ((number|Long)[]|null);
    }

    class c2s_extract_attachment_request implements Ic2s_extract_attachment_request {
        public static cmd: number;
        constructor(p?: Ic2s_extract_attachment_request);
        public mailIdList: (number|Long)[];
        public static encode(m: Ic2s_extract_attachment_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_extract_attachment_request;
    }

    interface Is2c_extract_attachment_reply {
        mailIdList?: ((number|Long)[]|null);
    }

    class s2c_extract_attachment_reply implements Is2c_extract_attachment_reply {
        public static cmd: number;
        constructor(p?: Is2c_extract_attachment_reply);
        public mailIdList: (number|Long)[];
        public static encode(m: Is2c_extract_attachment_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_extract_attachment_reply;
    }

    interface Is2c_mail_changed_notify {
        list?: (Ip_mail_status[]|null);
    }

    class s2c_mail_changed_notify implements Is2c_mail_changed_notify {
        public static cmd: number;
        constructor(p?: Is2c_mail_changed_notify);
        public list: Ip_mail_status[];
        public static encode(m: Is2c_mail_changed_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_mail_changed_notify;
    }

    interface Ic2s_remove_mail_request {
        mailIdList?: ((number|Long)[]|null);
    }

    class c2s_remove_mail_request implements Ic2s_remove_mail_request {
        public static cmd: number;
        constructor(p?: Ic2s_remove_mail_request);
        public mailIdList: (number|Long)[];
        public static encode(m: Ic2s_remove_mail_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_remove_mail_request;
    }

    interface Is2c_remove_mail_reply {
        idList?: ((number|Long)[]|null);
    }

    class s2c_remove_mail_reply implements Is2c_remove_mail_reply {
        public static cmd: number;
        constructor(p?: Is2c_remove_mail_reply);
        public idList: (number|Long)[];
        public static encode(m: Is2c_remove_mail_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_remove_mail_reply;
    }

    interface Ic2s_query_mail_brief_list {
    }

    class c2s_query_mail_brief_list implements Ic2s_query_mail_brief_list {
        public static cmd: number;
        constructor(p?: Ic2s_query_mail_brief_list);
        public static encode(m: Ic2s_query_mail_brief_list, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_mail_brief_list;
    }

    interface Is2c_query_mail_brief_list {
        mailList?: (Ip_mail_brief[]|null);
    }

    class s2c_query_mail_brief_list implements Is2c_query_mail_brief_list {
        public static cmd: number;
        constructor(p?: Is2c_query_mail_brief_list);
        public mailList: Ip_mail_brief[];
        public static encode(m: Is2c_query_mail_brief_list, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_mail_brief_list;
    }

    interface Ic2s_query_mail_detail {
        id: (number|Long);
    }

    class c2s_query_mail_detail implements Ic2s_query_mail_detail {
        public static cmd: number;
        constructor(p?: Ic2s_query_mail_detail);
        public id: (number|Long);
        public static encode(m: Ic2s_query_mail_detail, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_mail_detail;
    }

    interface Is2c_query_mail_detail {
        mail: Ip_mail;
    }

    class s2c_query_mail_detail implements Is2c_query_mail_detail {
        public static cmd: number;
        constructor(p?: Is2c_query_mail_detail);
        public mail: Ip_mail;
        public static encode(m: Is2c_query_mail_detail, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_mail_detail;
    }

    interface Ic2s_wear_equipment_request {
        uniqId: (number|Long);
    }

    class c2s_wear_equipment_request implements Ic2s_wear_equipment_request {
        public static cmd: number;
        constructor(p?: Ic2s_wear_equipment_request);
        public uniqId: (number|Long);
        public static encode(m: Ic2s_wear_equipment_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_wear_equipment_request;
    }

    interface Ic2s_takeoff_equipment_request {
        pos: number;
    }

    class c2s_takeoff_equipment_request implements Ic2s_takeoff_equipment_request {
        public static cmd: number;
        constructor(p?: Ic2s_takeoff_equipment_request);
        public pos: number;
        public static encode(m: Ic2s_takeoff_equipment_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_takeoff_equipment_request;
    }

    interface Ic2s_inlay_equipment_gem_request {
        pos: number;
        gemPos: number;
        gemItemId: number;
        gemBound: number;
    }

    class c2s_inlay_equipment_gem_request implements Ic2s_inlay_equipment_gem_request {
        public static cmd: number;
        constructor(p?: Ic2s_inlay_equipment_gem_request);
        public pos: number;
        public gemPos: number;
        public gemItemId: number;
        public gemBound: number;
        public static encode(m: Ic2s_inlay_equipment_gem_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_inlay_equipment_gem_request;
    }

    interface Ic2s_unload_equipment_gem_request {
        pos: number;
        gemPos: number;
    }

    class c2s_unload_equipment_gem_request implements Ic2s_unload_equipment_gem_request {
        public static cmd: number;
        constructor(p?: Ic2s_unload_equipment_gem_request);
        public pos: number;
        public gemPos: number;
        public static encode(m: Ic2s_unload_equipment_gem_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_unload_equipment_gem_request;
    }

    interface Ic2s_strength_equip_request {
        pos: number;
    }

    class c2s_strength_equip_request implements Ic2s_strength_equip_request {
        public static cmd: number;
        constructor(p?: Ic2s_strength_equip_request);
        public pos: number;
        public static encode(m: Ic2s_strength_equip_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_strength_equip_request;
    }

    interface Ic2s_suit_equip_request {
        pos: number;
        suitId: number;
    }

    class c2s_suit_equip_request implements Ic2s_suit_equip_request {
        public static cmd: number;
        constructor(p?: Ic2s_suit_equip_request);
        public pos: number;
        public suitId: number;
        public static encode(m: Ic2s_suit_equip_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_suit_equip_request;
    }

    interface Ic2s_suit_score_request {
        key: number;
    }

    class c2s_suit_score_request implements Ic2s_suit_score_request {
        public static cmd: number;
        constructor(p?: Ic2s_suit_score_request);
        public key: number;
        public static encode(m: Ic2s_suit_score_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_suit_score_request;
    }

    interface Ic2s_wash_equip_request {
        pos: number;
        washPos: number;
        washType: number;
        lockPos?: (Ip_lock_wash_pos[]|null);
    }

    class c2s_wash_equip_request implements Ic2s_wash_equip_request {
        public static cmd: number;
        constructor(p?: Ic2s_wash_equip_request);
        public pos: number;
        public washPos: number;
        public washType: number;
        public lockPos: Ip_lock_wash_pos[];
        public static encode(m: Ic2s_wash_equip_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_wash_equip_request;
    }

    interface Ic2s_wash_carve_request {
        pos: number;
        type: number;
    }

    class c2s_wash_carve_request implements Ic2s_wash_carve_request {
        public static cmd: number;
        constructor(p?: Ic2s_wash_carve_request);
        public pos: number;
        public type: number;
        public static encode(m: Ic2s_wash_carve_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_wash_carve_request;
    }

    interface Is2c_wash_carve_reply {
        pos: number;
        wash?: (Ip_equip_wash|null);
        res: number;
    }

    class s2c_wash_carve_reply implements Is2c_wash_carve_reply {
        public static cmd: number;
        constructor(p?: Is2c_wash_carve_reply);
        public pos: number;
        public wash?: (Ip_equip_wash|null);
        public res: number;
        public static encode(m: Is2c_wash_carve_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_wash_carve_reply;
    }

    interface Is2c_equipment_change_reply {
        type: number;
        equip: Ip_equip_pos;
    }

    class s2c_equipment_change_reply implements Is2c_equipment_change_reply {
        public static cmd: number;
        constructor(p?: Is2c_equipment_change_reply);
        public type: number;
        public equip: Ip_equip_pos;
        public static encode(m: Is2c_equipment_change_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_equipment_change_reply;
    }

    interface Is2c_suit_score_reply {
        key: number;
        val: number;
    }

    class s2c_suit_score_reply implements Is2c_suit_score_reply {
        public static cmd: number;
        constructor(p?: Is2c_suit_score_reply);
        public key: number;
        public val: number;
        public static encode(m: Is2c_suit_score_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_suit_score_reply;
    }

    interface Is2c_role_equip {
        items?: (Ip_equip_pos[]|null);
        washFreeNum: number;
        achievement?: (Ip_equip_achievement[]|null);
    }

    class s2c_role_equip implements Is2c_role_equip {
        public static cmd: number;
        constructor(p?: Is2c_role_equip);
        public items: Ip_equip_pos[];
        public washFreeNum: number;
        public achievement: Ip_equip_achievement[];
        public static encode(m: Is2c_role_equip, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_equip;
    }

    interface Ic2s_query_role_equip_request {
        roleId: (number|Long);
    }

    class c2s_query_role_equip_request implements Ic2s_query_role_equip_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_role_equip_request);
        public roleId: (number|Long);
        public static encode(m: Ic2s_query_role_equip_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_role_equip_request;
    }

    interface Is2c_query_role_equip_reply {
        roleId: (number|Long);
        roleEquip?: (Ip_equip_pos[]|null);
        achievement?: (Ip_equip_achievement[]|null);
    }

    class s2c_query_role_equip_reply implements Is2c_query_role_equip_reply {
        public static cmd: number;
        constructor(p?: Is2c_query_role_equip_reply);
        public roleId: (number|Long);
        public roleEquip: Ip_equip_pos[];
        public achievement: Ip_equip_achievement[];
        public static encode(m: Is2c_query_role_equip_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_role_equip_reply;
    }

    interface Is2c_equip_wash_free_num_change {
        freenum: number;
    }

    class s2c_equip_wash_free_num_change implements Is2c_equip_wash_free_num_change {
        public static cmd: number;
        constructor(p?: Is2c_equip_wash_free_num_change);
        public freenum: number;
        public static encode(m: Is2c_equip_wash_free_num_change, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_equip_wash_free_num_change;
    }

    interface Is2c_equip_achievement_change {
        achievement?: (Ip_equip_achievement[]|null);
    }

    class s2c_equip_achievement_change implements Is2c_equip_achievement_change {
        public static cmd: number;
        constructor(p?: Is2c_equip_achievement_change);
        public achievement: Ip_equip_achievement[];
        public static encode(m: Is2c_equip_achievement_change, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_equip_achievement_change;
    }

    interface Is2c_equip_add_strengthen_exp {
        type: number;
        addExp: number;
        lvUp: number;
    }

    class s2c_equip_add_strengthen_exp implements Is2c_equip_add_strengthen_exp {
        public static cmd: number;
        constructor(p?: Is2c_equip_add_strengthen_exp);
        public type: number;
        public addExp: number;
        public lvUp: number;
        public static encode(m: Is2c_equip_add_strengthen_exp, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_equip_add_strengthen_exp;
    }

    interface Is2c_equip_suit_change {
        type: number;
    }

    class s2c_equip_suit_change implements Is2c_equip_suit_change {
        public static cmd: number;
        constructor(p?: Is2c_equip_suit_change);
        public type: number;
        public static encode(m: Is2c_equip_suit_change, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_equip_suit_change;
    }

    interface Ip_equip_pos {
        pos: number;
        item: Ip_item;
        strengthenLv: number;
        strengthenExp: number;
        strengthenScore: number;
        wash?: (Ip_equip_wash[]|null);
        washScore: number;
        refineLev: number;
        refineExp: number;
        washProgressScore?: (number|null);
        suitList?: (Ip_kv_pair[]|null);
    }

    class p_equip_pos implements Ip_equip_pos {
        constructor(p?: Ip_equip_pos);
        public pos: number;
        public item: Ip_item;
        public strengthenLv: number;
        public strengthenExp: number;
        public strengthenScore: number;
        public wash: Ip_equip_wash[];
        public washScore: number;
        public refineLev: number;
        public refineExp: number;
        public washProgressScore: number;
        public suitList: Ip_kv_pair[];
        public static encode(m: Ip_equip_pos, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_equip_pos;
    }

    interface Ip_lock_wash_pos {
        washPos: number;
    }

    class p_lock_wash_pos implements Ip_lock_wash_pos {
        constructor(p?: Ip_lock_wash_pos);
        public washPos: number;
        public static encode(m: Ip_lock_wash_pos, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_lock_wash_pos;
    }

    interface Ip_equip_wash {
        washPos: number;
        name: string;
        val: number;
    }

    class p_equip_wash implements Ip_equip_wash {
        constructor(p?: Ip_equip_wash);
        public washPos: number;
        public name: string;
        public val: number;
        public static encode(m: Ip_equip_wash, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_equip_wash;
    }

    interface Ip_equip_achievement {
        type: number;
        val: number;
    }

    class p_equip_achievement implements Ip_equip_achievement {
        constructor(p?: Ip_equip_achievement);
        public type: number;
        public val: number;
        public static encode(m: Ip_equip_achievement, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_equip_achievement;
    }

    interface Is2c_equip_timeout {
        itemId?: (number[]|null);
    }

    class s2c_equip_timeout implements Is2c_equip_timeout {
        public static cmd: number;
        constructor(p?: Is2c_equip_timeout);
        public itemId: number[];
        public static encode(m: Is2c_equip_timeout, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_equip_timeout;
    }

    interface Ic2s_get_equip_score {
        itemId: number;
    }

    class c2s_get_equip_score implements Ic2s_get_equip_score {
        public static cmd: number;
        constructor(p?: Ic2s_get_equip_score);
        public itemId: number;
        public static encode(m: Ic2s_get_equip_score, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_equip_score;
    }

    interface Is2c_get_equip_score {
        itemId: number;
        score: number;
    }

    class s2c_get_equip_score implements Is2c_get_equip_score {
        public static cmd: number;
        constructor(p?: Is2c_get_equip_score);
        public itemId: number;
        public score: number;
        public static encode(m: Is2c_get_equip_score, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_get_equip_score;
    }

    interface Ic2s_refine_equipment_request {
        pos: number;
        itemId: number;
        itemCount: number;
    }

    class c2s_refine_equipment_request implements Ic2s_refine_equipment_request {
        public static cmd: number;
        constructor(p?: Ic2s_refine_equipment_request);
        public pos: number;
        public itemId: number;
        public itemCount: number;
        public static encode(m: Ic2s_refine_equipment_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_refine_equipment_request;
    }

    interface Ic2s_up_gem_lv_request {
        equipPos: number;
        gemPos: number;
        isCostGold: number;
    }

    class c2s_up_gem_lv_request implements Ic2s_up_gem_lv_request {
        public static cmd: number;
        constructor(p?: Ic2s_up_gem_lv_request);
        public equipPos: number;
        public gemPos: number;
        public isCostGold: number;
        public static encode(m: Ic2s_up_gem_lv_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_up_gem_lv_request;
    }

    interface Ic2s_destory_wear_equip {
        equipPos: number;
    }

    class c2s_destory_wear_equip implements Ic2s_destory_wear_equip {
        public static cmd: number;
        constructor(p?: Ic2s_destory_wear_equip);
        public equipPos: number;
        public static encode(m: Ic2s_destory_wear_equip, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_destory_wear_equip;
    }

    interface Ic2s_timeout_item_ad_request {
        uniqId: (number|Long);
    }

    class c2s_timeout_item_ad_request implements Ic2s_timeout_item_ad_request {
        public static cmd: number;
        constructor(p?: Ic2s_timeout_item_ad_request);
        public uniqId: (number|Long);
        public static encode(m: Ic2s_timeout_item_ad_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_timeout_item_ad_request;
    }

    interface Is2c_timeout_item_ad_reply {
        uniqId: (number|Long);
        usedTimes: number;
    }

    class s2c_timeout_item_ad_reply implements Is2c_timeout_item_ad_reply {
        public static cmd: number;
        constructor(p?: Is2c_timeout_item_ad_reply);
        public uniqId: (number|Long);
        public usedTimes: number;
        public static encode(m: Is2c_timeout_item_ad_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_timeout_item_ad_reply;
    }

    interface Ic2s_timeout_item_ad_complete {
        uniqId: (number|Long);
    }

    class c2s_timeout_item_ad_complete implements Ic2s_timeout_item_ad_complete {
        public static cmd: number;
        constructor(p?: Ic2s_timeout_item_ad_complete);
        public uniqId: (number|Long);
        public static encode(m: Ic2s_timeout_item_ad_complete, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_timeout_item_ad_complete;
    }

    interface Ifriend_brief_info {
        id: (number|Long);
        name: string;
        sex: number;
        level: number;
        combat: number;
        online: number;
        trans: number;
        office: number;
        image: number;
        vip: number;
        frame: number;
    }

    class friend_brief_info implements Ifriend_brief_info {
        constructor(p?: Ifriend_brief_info);
        public id: (number|Long);
        public name: string;
        public sex: number;
        public level: number;
        public combat: number;
        public online: number;
        public trans: number;
        public office: number;
        public image: number;
        public vip: number;
        public frame: number;
        public static encode(m: Ifriend_brief_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): friend_brief_info;
    }

    interface Ifriend_p {
        briefInfo: Ifriend_brief_info;
        isSameCity: number;
        friendType: number;
        intimacy: number;
        isInviteRelationship: number;
        group: number;
    }

    class friend_p implements Ifriend_p {
        constructor(p?: Ifriend_p);
        public briefInfo: Ifriend_brief_info;
        public isSameCity: number;
        public friendType: number;
        public intimacy: number;
        public isInviteRelationship: number;
        public group: number;
        public static encode(m: Ifriend_p, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): friend_p;
    }

    interface Ic2s_list_friend_request {
    }

    class c2s_list_friend_request implements Ic2s_list_friend_request {
        public static cmd: number;
        constructor(p?: Ic2s_list_friend_request);
        public static encode(m: Ic2s_list_friend_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_list_friend_request;
    }

    interface Is2c_list_friend_reply {
        friends?: (Ifriend_p[]|null);
    }

    class s2c_list_friend_reply implements Is2c_list_friend_reply {
        public static cmd: number;
        constructor(p?: Is2c_list_friend_reply);
        public friends: Ifriend_p[];
        public static encode(m: Is2c_list_friend_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_list_friend_reply;
    }

    interface Ic2s_list_request_request {
    }

    class c2s_list_request_request implements Ic2s_list_request_request {
        public static cmd: number;
        constructor(p?: Ic2s_list_request_request);
        public static encode(m: Ic2s_list_request_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_list_request_request;
    }

    interface Is2c_list_request_reply {
        briefInfo?: (Ifriend_brief_info[]|null);
    }

    class s2c_list_request_reply implements Is2c_list_request_reply {
        public static cmd: number;
        constructor(p?: Is2c_list_request_reply);
        public briefInfo: Ifriend_brief_info[];
        public static encode(m: Is2c_list_request_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_list_request_reply;
    }

    interface Ic2s_list_search_request {
        idOrName: string;
    }

    class c2s_list_search_request implements Ic2s_list_search_request {
        public static cmd: number;
        constructor(p?: Ic2s_list_search_request);
        public idOrName: string;
        public static encode(m: Ic2s_list_search_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_list_search_request;
    }

    interface Is2c_list_search_reply {
        briefInfo?: (Ifriend_brief_info[]|null);
    }

    class s2c_list_search_reply implements Is2c_list_search_reply {
        public static cmd: number;
        constructor(p?: Is2c_list_search_reply);
        public briefInfo: Ifriend_brief_info[];
        public static encode(m: Is2c_list_search_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_list_search_reply;
    }

    interface Ic2s_apply_friend_request {
        friendId: (number|Long);
        verifyMessage: string;
    }

    class c2s_apply_friend_request implements Ic2s_apply_friend_request {
        public static cmd: number;
        constructor(p?: Ic2s_apply_friend_request);
        public friendId: (number|Long);
        public verifyMessage: string;
        public static encode(m: Ic2s_apply_friend_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_apply_friend_request;
    }

    interface Is2c_apply_friend_reply {
        friendId: (number|Long);
    }

    class s2c_apply_friend_reply implements Is2c_apply_friend_reply {
        public static cmd: number;
        constructor(p?: Is2c_apply_friend_reply);
        public friendId: (number|Long);
        public static encode(m: Is2c_apply_friend_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_apply_friend_reply;
    }

    interface Is2c_apply_friend_notify {
        briefInfo: Ifriend_brief_info;
    }

    class s2c_apply_friend_notify implements Is2c_apply_friend_notify {
        public static cmd: number;
        constructor(p?: Is2c_apply_friend_notify);
        public briefInfo: Ifriend_brief_info;
        public static encode(m: Is2c_apply_friend_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_apply_friend_notify;
    }

    interface Ic2s_add_friend_request {
        result: number;
        friendId: (number|Long);
    }

    class c2s_add_friend_request implements Ic2s_add_friend_request {
        public static cmd: number;
        constructor(p?: Ic2s_add_friend_request);
        public result: number;
        public friendId: (number|Long);
        public static encode(m: Ic2s_add_friend_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_add_friend_request;
    }

    interface Is2c_add_friend_reply {
        result: number;
        friendId: (number|Long);
    }

    class s2c_add_friend_reply implements Is2c_add_friend_reply {
        public static cmd: number;
        constructor(p?: Is2c_add_friend_reply);
        public result: number;
        public friendId: (number|Long);
        public static encode(m: Is2c_add_friend_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_add_friend_reply;
    }

    interface Is2c_add_friend_notify {
        friend: Ifriend_p;
    }

    class s2c_add_friend_notify implements Is2c_add_friend_notify {
        public static cmd: number;
        constructor(p?: Is2c_add_friend_notify);
        public friend: Ifriend_p;
        public static encode(m: Is2c_add_friend_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_add_friend_notify;
    }

    interface Ic2s_clear_reply_request {
    }

    class c2s_clear_reply_request implements Ic2s_clear_reply_request {
        public static cmd: number;
        constructor(p?: Ic2s_clear_reply_request);
        public static encode(m: Ic2s_clear_reply_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_clear_reply_request;
    }

    interface Ic2s_delete_friend_request {
        friendId: (number|Long);
    }

    class c2s_delete_friend_request implements Ic2s_delete_friend_request {
        public static cmd: number;
        constructor(p?: Ic2s_delete_friend_request);
        public friendId: (number|Long);
        public static encode(m: Ic2s_delete_friend_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_delete_friend_request;
    }

    interface Is2c_delete_friend_reply {
        friendId: (number|Long);
    }

    class s2c_delete_friend_reply implements Is2c_delete_friend_reply {
        public static cmd: number;
        constructor(p?: Is2c_delete_friend_reply);
        public friendId: (number|Long);
        public static encode(m: Is2c_delete_friend_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_delete_friend_reply;
    }

    interface Is2c_delete_friend_notify {
        friendId: (number|Long);
    }

    class s2c_delete_friend_notify implements Is2c_delete_friend_notify {
        public static cmd: number;
        constructor(p?: Is2c_delete_friend_notify);
        public friendId: (number|Long);
        public static encode(m: Is2c_delete_friend_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_delete_friend_notify;
    }

    interface Ic2s_add_black_request {
        blackId: (number|Long);
    }

    class c2s_add_black_request implements Ic2s_add_black_request {
        public static cmd: number;
        constructor(p?: Ic2s_add_black_request);
        public blackId: (number|Long);
        public static encode(m: Ic2s_add_black_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_add_black_request;
    }

    interface Is2c_add_black_reply {
        black: Ifriend_p;
    }

    class s2c_add_black_reply implements Is2c_add_black_reply {
        public static cmd: number;
        constructor(p?: Is2c_add_black_reply);
        public black: Ifriend_p;
        public static encode(m: Is2c_add_black_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_add_black_reply;
    }

    interface Ic2s_delete_black_request {
        blackId: (number|Long);
    }

    class c2s_delete_black_request implements Ic2s_delete_black_request {
        public static cmd: number;
        constructor(p?: Ic2s_delete_black_request);
        public blackId: (number|Long);
        public static encode(m: Ic2s_delete_black_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_delete_black_request;
    }

    interface Is2c_delete_black_reply {
        blackId: (number|Long);
    }

    class s2c_delete_black_reply implements Is2c_delete_black_reply {
        public static cmd: number;
        constructor(p?: Is2c_delete_black_reply);
        public blackId: (number|Long);
        public static encode(m: Is2c_delete_black_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_delete_black_reply;
    }

    interface Ic2s_list_recent_request {
    }

    class c2s_list_recent_request implements Ic2s_list_recent_request {
        public static cmd: number;
        constructor(p?: Ic2s_list_recent_request);
        public static encode(m: Ic2s_list_recent_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_list_recent_request;
    }

    interface Is2c_list_recent_reply {
        briefInfo?: (Ifriend_brief_info[]|null);
    }

    class s2c_list_recent_reply implements Is2c_list_recent_reply {
        public static cmd: number;
        constructor(p?: Is2c_list_recent_reply);
        public briefInfo: Ifriend_brief_info[];
        public static encode(m: Is2c_list_recent_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_list_recent_reply;
    }

    interface Ic2s_delete_recent_request {
        opposite: (number|Long);
    }

    class c2s_delete_recent_request implements Ic2s_delete_recent_request {
        public static cmd: number;
        constructor(p?: Ic2s_delete_recent_request);
        public opposite: (number|Long);
        public static encode(m: Ic2s_delete_recent_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_delete_recent_request;
    }

    interface Ic2s_friend_chat_request {
        opposite: (number|Long);
        contents?: (Ip_chat_section[]|null);
    }

    class c2s_friend_chat_request implements Ic2s_friend_chat_request {
        public static cmd: number;
        constructor(p?: Ic2s_friend_chat_request);
        public opposite: (number|Long);
        public contents: Ip_chat_section[];
        public static encode(m: Ic2s_friend_chat_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_friend_chat_request;
    }

    interface Is2c_friend_chat_notify {
        opposite: (number|Long);
        self: number;
        sendTime: number;
        briefInfo: Ifriend_brief_info;
        contents?: (Ip_chat_section[]|null);
        bubbleImage: number;
        frameImage: number;
        headImage?: (number|null);
    }

    class s2c_friend_chat_notify implements Is2c_friend_chat_notify {
        public static cmd: number;
        constructor(p?: Is2c_friend_chat_notify);
        public opposite: (number|Long);
        public self: number;
        public sendTime: number;
        public briefInfo: Ifriend_brief_info;
        public contents: Ip_chat_section[];
        public bubbleImage: number;
        public frameImage: number;
        public headImage: number;
        public static encode(m: Is2c_friend_chat_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_friend_chat_notify;
    }

    interface Is2c_intimacy_added_notify {
        friendId: (number|Long);
        intimacy: number;
        anonymity: number;
    }

    class s2c_intimacy_added_notify implements Is2c_intimacy_added_notify {
        public static cmd: number;
        constructor(p?: Is2c_intimacy_added_notify);
        public friendId: (number|Long);
        public intimacy: number;
        public anonymity: number;
        public static encode(m: Is2c_intimacy_added_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_intimacy_added_notify;
    }

    interface Ic2s_present_flower {
        targetId: (number|Long);
        itemId: number;
        count: number;
        anonymity: number;
        targetName?: (string|null);
    }

    class c2s_present_flower implements Ic2s_present_flower {
        public static cmd: number;
        constructor(p?: Ic2s_present_flower);
        public targetId: (number|Long);
        public itemId: number;
        public count: number;
        public anonymity: number;
        public targetName: string;
        public static encode(m: Ic2s_present_flower, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_present_flower;
    }

    interface Is2c_present_flower_notify {
        presentId: (number|Long);
        targetId: (number|Long);
        itemId: number;
        count: number;
        anonymity: number;
        presentName: string;
        targetName: string;
    }

    class s2c_present_flower_notify implements Is2c_present_flower_notify {
        public static cmd: number;
        constructor(p?: Is2c_present_flower_notify);
        public presentId: (number|Long);
        public targetId: (number|Long);
        public itemId: number;
        public count: number;
        public anonymity: number;
        public presentName: string;
        public targetName: string;
        public static encode(m: Is2c_present_flower_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_present_flower_notify;
    }

    interface Is2c_friend_online_notify {
        friendId: (number|Long);
        online: number;
    }

    class s2c_friend_online_notify implements Is2c_friend_online_notify {
        public static cmd: number;
        constructor(p?: Is2c_friend_online_notify);
        public friendId: (number|Long);
        public online: number;
        public static encode(m: Is2c_friend_online_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_friend_online_notify;
    }

    interface Is2c_friend_up_data {
        briefInfo: Ifriend_brief_info;
    }

    class s2c_friend_up_data implements Is2c_friend_up_data {
        public static cmd: number;
        constructor(p?: Is2c_friend_up_data);
        public briefInfo: Ifriend_brief_info;
        public static encode(m: Is2c_friend_up_data, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_friend_up_data;
    }

    interface Ip_team_member {
        id: (number|Long);
        trans: number;
        level: number;
        name: string;
        sex: number;
        vip: number;
        sceneId: number;
    }

    class p_team_member implements Ip_team_member {
        constructor(p?: Ip_team_member);
        public id: (number|Long);
        public trans: number;
        public level: number;
        public name: string;
        public sex: number;
        public vip: number;
        public sceneId: number;
        public static encode(m: Ip_team_member, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_team_member;
    }

    interface Ip_team {
        id: (number|Long);
        leader: (number|Long);
        target: number;
        members?: (Ip_team_member[]|null);
        isAutomMatch?: (number|null);
        instanceAgreeList?: ((number|Long)[]|null);
        minLev: number;
        maxLev: number;
        autoRecv: number;
    }

    class p_team implements Ip_team {
        constructor(p?: Ip_team);
        public id: (number|Long);
        public leader: (number|Long);
        public target: number;
        public members: Ip_team_member[];
        public isAutomMatch: number;
        public instanceAgreeList: (number|Long)[];
        public minLev: number;
        public maxLev: number;
        public autoRecv: number;
        public static encode(m: Ip_team, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_team;
    }

    interface Ip_team_applicant {
        id: (number|Long);
        name: string;
        trans: number;
        level: number;
        sex: number;
        vip: number;
    }

    class p_team_applicant implements Ip_team_applicant {
        constructor(p?: Ip_team_applicant);
        public id: (number|Long);
        public name: string;
        public trans: number;
        public level: number;
        public sex: number;
        public vip: number;
        public static encode(m: Ip_team_applicant, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_team_applicant;
    }

    interface Is2c_team_info_notify {
        team: Ip_team;
    }

    class s2c_team_info_notify implements Is2c_team_info_notify {
        public static cmd: number;
        constructor(p?: Is2c_team_info_notify);
        public team: Ip_team;
        public static encode(m: Is2c_team_info_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_team_info_notify;
    }

    interface Ic2s_query_team_info_request {
    }

    class c2s_query_team_info_request implements Ic2s_query_team_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_team_info_request);
        public static encode(m: Ic2s_query_team_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_team_info_request;
    }

    interface Ic2s_select_team_request {
        target: number;
    }

    class c2s_select_team_request implements Ic2s_select_team_request {
        public static cmd: number;
        constructor(p?: Ic2s_select_team_request);
        public target: number;
        public static encode(m: Ic2s_select_team_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_select_team_request;
    }

    interface Is2c_select_team_reply {
        target: number;
        list?: (Ip_team[]|null);
        appliedTeams?: ((number|Long)[]|null);
    }

    class s2c_select_team_reply implements Is2c_select_team_reply {
        public static cmd: number;
        constructor(p?: Is2c_select_team_reply);
        public target: number;
        public list: Ip_team[];
        public appliedTeams: (number|Long)[];
        public static encode(m: Is2c_select_team_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_select_team_reply;
    }

    interface Ic2s_apply_team_request {
        teamId: (number|Long);
    }

    class c2s_apply_team_request implements Ic2s_apply_team_request {
        public static cmd: number;
        constructor(p?: Ic2s_apply_team_request);
        public teamId: (number|Long);
        public static encode(m: Ic2s_apply_team_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_apply_team_request;
    }

    interface Is2c_add_applicant_notify {
        applicant: Ip_team_applicant;
    }

    class s2c_add_applicant_notify implements Is2c_add_applicant_notify {
        public static cmd: number;
        constructor(p?: Is2c_add_applicant_notify);
        public applicant: Ip_team_applicant;
        public static encode(m: Is2c_add_applicant_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_add_applicant_notify;
    }

    interface Ic2s_auto_join_team_request {
        target: number;
    }

    class c2s_auto_join_team_request implements Ic2s_auto_join_team_request {
        public static cmd: number;
        constructor(p?: Ic2s_auto_join_team_request);
        public target: number;
        public static encode(m: Ic2s_auto_join_team_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_auto_join_team_request;
    }

    interface Ic2s_team_apply_list_request {
        teamId: (number|Long);
    }

    class c2s_team_apply_list_request implements Ic2s_team_apply_list_request {
        public static cmd: number;
        constructor(p?: Ic2s_team_apply_list_request);
        public teamId: (number|Long);
        public static encode(m: Ic2s_team_apply_list_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_team_apply_list_request;
    }

    interface Is2c_team_apply_list_reply {
        applicants?: (Ip_team_applicant[]|null);
    }

    class s2c_team_apply_list_reply implements Is2c_team_apply_list_reply {
        public static cmd: number;
        constructor(p?: Is2c_team_apply_list_reply);
        public applicants: Ip_team_applicant[];
        public static encode(m: Is2c_team_apply_list_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_team_apply_list_reply;
    }

    interface Ic2s_clean_team_apply_list_request {
        teamId: (number|Long);
    }

    class c2s_clean_team_apply_list_request implements Ic2s_clean_team_apply_list_request {
        public static cmd: number;
        constructor(p?: Ic2s_clean_team_apply_list_request);
        public teamId: (number|Long);
        public static encode(m: Ic2s_clean_team_apply_list_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_clean_team_apply_list_request;
    }

    interface Ic2s_audit_team_apply_request {
        teamId: (number|Long);
        applicantId: (number|Long);
        accept: number;
    }

    class c2s_audit_team_apply_request implements Ic2s_audit_team_apply_request {
        public static cmd: number;
        constructor(p?: Ic2s_audit_team_apply_request);
        public teamId: (number|Long);
        public applicantId: (number|Long);
        public accept: number;
        public static encode(m: Ic2s_audit_team_apply_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_audit_team_apply_request;
    }

    interface Is2c_add_team_member_notify {
        memberId: (number|Long);
        name: string;
    }

    class s2c_add_team_member_notify implements Is2c_add_team_member_notify {
        public static cmd: number;
        constructor(p?: Is2c_add_team_member_notify);
        public memberId: (number|Long);
        public name: string;
        public static encode(m: Is2c_add_team_member_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_add_team_member_notify;
    }

    interface Ic2s_fire_team_member_request {
        teamId: (number|Long);
        memberId: (number|Long);
    }

    class c2s_fire_team_member_request implements Ic2s_fire_team_member_request {
        public static cmd: number;
        constructor(p?: Ic2s_fire_team_member_request);
        public teamId: (number|Long);
        public memberId: (number|Long);
        public static encode(m: Ic2s_fire_team_member_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_fire_team_member_request;
    }

    interface Ic2s_leave_team_request {
        teamId: (number|Long);
    }

    class c2s_leave_team_request implements Ic2s_leave_team_request {
        public static cmd: number;
        constructor(p?: Ic2s_leave_team_request);
        public teamId: (number|Long);
        public static encode(m: Ic2s_leave_team_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_leave_team_request;
    }

    interface Is2c_leave_team_notify {
    }

    class s2c_leave_team_notify implements Is2c_leave_team_notify {
        public static cmd: number;
        constructor(p?: Is2c_leave_team_notify);
        public static encode(m: Is2c_leave_team_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_leave_team_notify;
    }

    interface Ic2s_transfer_leader_request {
        teamId: (number|Long);
        memberId: (number|Long);
    }

    class c2s_transfer_leader_request implements Ic2s_transfer_leader_request {
        public static cmd: number;
        constructor(p?: Ic2s_transfer_leader_request);
        public teamId: (number|Long);
        public memberId: (number|Long);
        public static encode(m: Ic2s_transfer_leader_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_transfer_leader_request;
    }

    interface Ic2s_invite_team_member_request {
        roleId: (number|Long);
        targetInfo: Iteam_match_info;
    }

    class c2s_invite_team_member_request implements Ic2s_invite_team_member_request {
        public static cmd: number;
        constructor(p?: Ic2s_invite_team_member_request);
        public roleId: (number|Long);
        public targetInfo: Iteam_match_info;
        public static encode(m: Ic2s_invite_team_member_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_invite_team_member_request;
    }

    interface Is2c_be_invited_notify {
        leaderId: (number|Long);
        leaderName: string;
        teamId: (number|Long);
        level: number;
        trans: number;
        vip: number;
        target: number;
    }

    class s2c_be_invited_notify implements Is2c_be_invited_notify {
        public static cmd: number;
        constructor(p?: Is2c_be_invited_notify);
        public leaderId: (number|Long);
        public leaderName: string;
        public teamId: (number|Long);
        public level: number;
        public trans: number;
        public vip: number;
        public target: number;
        public static encode(m: Is2c_be_invited_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_be_invited_notify;
    }

    interface Ic2s_answer_team_invitation_request {
        leaderId: (number|Long);
        accept: number;
        teamId: (number|Long);
    }

    class c2s_answer_team_invitation_request implements Ic2s_answer_team_invitation_request {
        public static cmd: number;
        constructor(p?: Ic2s_answer_team_invitation_request);
        public leaderId: (number|Long);
        public accept: number;
        public teamId: (number|Long);
        public static encode(m: Ic2s_answer_team_invitation_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_answer_team_invitation_request;
    }

    interface Ic2s_team_enlist_request {
        teamId: (number|Long);
        content: string;
    }

    class c2s_team_enlist_request implements Ic2s_team_enlist_request {
        public static cmd: number;
        constructor(p?: Ic2s_team_enlist_request);
        public teamId: (number|Long);
        public content: string;
        public static encode(m: Ic2s_team_enlist_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_team_enlist_request;
    }

    interface Ic2s_query_auto_match_status {
    }

    class c2s_query_auto_match_status implements Ic2s_query_auto_match_status {
        public static cmd: number;
        constructor(p?: Ic2s_query_auto_match_status);
        public static encode(m: Ic2s_query_auto_match_status, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_auto_match_status;
    }

    interface Is2c_auto_match_status_notify {
        matchStatus: number;
    }

    class s2c_auto_match_status_notify implements Is2c_auto_match_status_notify {
        public static cmd: number;
        constructor(p?: Is2c_auto_match_status_notify);
        public matchStatus: number;
        public static encode(m: Is2c_auto_match_status_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_auto_match_status_notify;
    }

    interface Is2c_team_leader_changed_notify {
        leaderId: (number|Long);
        name: string;
    }

    class s2c_team_leader_changed_notify implements Is2c_team_leader_changed_notify {
        public static cmd: number;
        constructor(p?: Is2c_team_leader_changed_notify);
        public leaderId: (number|Long);
        public name: string;
        public static encode(m: Is2c_team_leader_changed_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_team_leader_changed_notify;
    }

    interface Is2c_team_member_leaved_notify {
        memberId: (number|Long);
        name: string;
    }

    class s2c_team_member_leaved_notify implements Is2c_team_member_leaved_notify {
        public static cmd: number;
        constructor(p?: Is2c_team_member_leaved_notify);
        public memberId: (number|Long);
        public name: string;
        public static encode(m: Is2c_team_member_leaved_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_team_member_leaved_notify;
    }

    interface Ip_combine_times {
        memberId: (number|Long);
        combineTimes: number;
    }

    class p_combine_times implements Ip_combine_times {
        constructor(p?: Ip_combine_times);
        public memberId: (number|Long);
        public combineTimes: number;
        public static encode(m: Ip_combine_times, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_combine_times;
    }

    interface Is2c_leader_invite_to_instance_notify {
        teamInfo: Ip_team;
        combineTimesList?: (Ip_combine_times[]|null);
    }

    class s2c_leader_invite_to_instance_notify implements Is2c_leader_invite_to_instance_notify {
        public static cmd: number;
        constructor(p?: Is2c_leader_invite_to_instance_notify);
        public teamInfo: Ip_team;
        public combineTimesList: Ip_combine_times[];
        public static encode(m: Is2c_leader_invite_to_instance_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_leader_invite_to_instance_notify;
    }

    interface Ic2s_answer_instance_invite_request {
        flag: number;
    }

    class c2s_answer_instance_invite_request implements Ic2s_answer_instance_invite_request {
        public static cmd: number;
        constructor(p?: Ic2s_answer_instance_invite_request);
        public flag: number;
        public static encode(m: Ic2s_answer_instance_invite_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_answer_instance_invite_request;
    }

    interface Is2c_answer_instance_invite_notify {
        roleId: (number|Long);
        flag: number;
    }

    class s2c_answer_instance_invite_notify implements Is2c_answer_instance_invite_notify {
        public static cmd: number;
        constructor(p?: Is2c_answer_instance_invite_notify);
        public roleId: (number|Long);
        public flag: number;
        public static encode(m: Is2c_answer_instance_invite_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_answer_instance_invite_notify;
    }

    interface Iteam_match_info {
        target: number;
        minLev: number;
        maxLev: number;
        otherInfo?: (number[]|null);
    }

    class team_match_info implements Iteam_match_info {
        constructor(p?: Iteam_match_info);
        public target: number;
        public minLev: number;
        public maxLev: number;
        public otherInfo: number[];
        public static encode(m: Iteam_match_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): team_match_info;
    }

    interface Ic2s_auto_match_request {
        status: number;
        targetInfo: Iteam_match_info;
    }

    class c2s_auto_match_request implements Ic2s_auto_match_request {
        public static cmd: number;
        constructor(p?: Ic2s_auto_match_request);
        public status: number;
        public targetInfo: Iteam_match_info;
        public static encode(m: Ic2s_auto_match_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_auto_match_request;
    }

    interface Ic2s_create_team_request {
        targetInfo: Iteam_match_info;
    }

    class c2s_create_team_request implements Ic2s_create_team_request {
        public static cmd: number;
        constructor(p?: Ic2s_create_team_request);
        public targetInfo: Iteam_match_info;
        public static encode(m: Ic2s_create_team_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_create_team_request;
    }

    interface Ic2s_change_team_target_request {
        teamId: (number|Long);
        targetInfo: Iteam_match_info;
    }

    class c2s_change_team_target_request implements Ic2s_change_team_target_request {
        public static cmd: number;
        constructor(p?: Ic2s_change_team_target_request);
        public teamId: (number|Long);
        public targetInfo: Iteam_match_info;
        public static encode(m: Ic2s_change_team_target_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_change_team_target_request;
    }

    interface Ic2s_set_auto_recv_member {
        sign: number;
    }

    class c2s_set_auto_recv_member implements Ic2s_set_auto_recv_member {
        public static cmd: number;
        constructor(p?: Ic2s_set_auto_recv_member);
        public sign: number;
        public static encode(m: Ic2s_set_auto_recv_member, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_set_auto_recv_member;
    }

    interface Ic2s_query_invite_list {
    }

    class c2s_query_invite_list implements Ic2s_query_invite_list {
        public static cmd: number;
        constructor(p?: Ic2s_query_invite_list);
        public static encode(m: Ic2s_query_invite_list, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_invite_list;
    }

    interface Is2c_query_invite_list {
        inviteList?: (Is2c_be_invited_notify[]|null);
    }

    class s2c_query_invite_list implements Is2c_query_invite_list {
        public static cmd: number;
        constructor(p?: Is2c_query_invite_list);
        public inviteList: Is2c_be_invited_notify[];
        public static encode(m: Is2c_query_invite_list, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_invite_list;
    }

    interface Ic2s_ignore_all_team_invitation {
    }

    class c2s_ignore_all_team_invitation implements Ic2s_ignore_all_team_invitation {
        public static cmd: number;
        constructor(p?: Ic2s_ignore_all_team_invitation);
        public static encode(m: Ic2s_ignore_all_team_invitation, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_ignore_all_team_invitation;
    }

    interface Irole_team_info {
        roleId: (number|Long);
        roleName: string;
        roleGrade: number;
        teamId: (number|Long);
    }

    class role_team_info implements Irole_team_info {
        constructor(p?: Irole_team_info);
        public roleId: (number|Long);
        public roleName: string;
        public roleGrade: number;
        public teamId: (number|Long);
        public static encode(m: Irole_team_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): role_team_info;
    }

    interface Ic2s_open_invite_team_pane {
        type: number;
    }

    class c2s_open_invite_team_pane implements Ic2s_open_invite_team_pane {
        public static cmd: number;
        constructor(p?: Ic2s_open_invite_team_pane);
        public type: number;
        public static encode(m: Ic2s_open_invite_team_pane, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_open_invite_team_pane;
    }

    interface Is2c_open_invite_team_pane {
        info?: (Irole_team_info[]|null);
    }

    class s2c_open_invite_team_pane implements Is2c_open_invite_team_pane {
        public static cmd: number;
        constructor(p?: Is2c_open_invite_team_pane);
        public info: Irole_team_info[];
        public static encode(m: Is2c_open_invite_team_pane, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_open_invite_team_pane;
    }

    interface Is2c_team_invitation_leader_notify {
        roleId: (number|Long);
        name: string;
        accept: number;
    }

    class s2c_team_invitation_leader_notify implements Is2c_team_invitation_leader_notify {
        public static cmd: number;
        constructor(p?: Is2c_team_invitation_leader_notify);
        public roleId: (number|Long);
        public name: string;
        public accept: number;
        public static encode(m: Is2c_team_invitation_leader_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_team_invitation_leader_notify;
    }

    interface Is2c_team_audit_member_notify {
        teamId: (number|Long);
        name: string;
        accept: number;
    }

    class s2c_team_audit_member_notify implements Is2c_team_audit_member_notify {
        public static cmd: number;
        constructor(p?: Is2c_team_audit_member_notify);
        public teamId: (number|Long);
        public name: string;
        public accept: number;
        public static encode(m: Is2c_team_audit_member_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_team_audit_member_notify;
    }

    interface Is2c_task_reply {
        mainTask?: (Ip_task[]|null);
        branchTask?: (Ip_task[]|null);
        bountyTask?: (Ip_task[]|null);
        bountyTaskStatus: Ip_loop_task;
        gangTask?: (Ip_task[]|null);
        gangTaskStatus: Ip_loop_task;
        transTask?: (Ip_task[]|null);
        noviceTask?: (Ip_task[]|null);
    }

    class s2c_task_reply implements Is2c_task_reply {
        public static cmd: number;
        constructor(p?: Is2c_task_reply);
        public mainTask: Ip_task[];
        public branchTask: Ip_task[];
        public bountyTask: Ip_task[];
        public bountyTaskStatus: Ip_loop_task;
        public gangTask: Ip_task[];
        public gangTaskStatus: Ip_loop_task;
        public transTask: Ip_task[];
        public noviceTask: Ip_task[];
        public static encode(m: Is2c_task_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_task_reply;
    }

    interface Ic2s_operate_task_request {
        type: number;
        taskId: number;
    }

    class c2s_operate_task_request implements Ic2s_operate_task_request {
        public static cmd: number;
        constructor(p?: Ic2s_operate_task_request);
        public type: number;
        public taskId: number;
        public static encode(m: Ic2s_operate_task_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_operate_task_request;
    }

    interface Is2c_task_notify {
        type: number;
        task: Ip_task;
    }

    class s2c_task_notify implements Is2c_task_notify {
        public static cmd: number;
        constructor(p?: Is2c_task_notify);
        public type: number;
        public task: Ip_task;
        public static encode(m: Is2c_task_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_task_notify;
    }

    interface Is2c_task_finished_notify {
        taskId: number;
    }

    class s2c_task_finished_notify implements Is2c_task_finished_notify {
        public static cmd: number;
        constructor(p?: Is2c_task_finished_notify);
        public taskId: number;
        public static encode(m: Is2c_task_finished_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_task_finished_notify;
    }

    interface Is2c_finish_group_task {
        task?: (Ip_task[]|null);
    }

    class s2c_finish_group_task implements Is2c_finish_group_task {
        public static cmd: number;
        constructor(p?: Is2c_finish_group_task);
        public task: Ip_task[];
        public static encode(m: Is2c_finish_group_task, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_finish_group_task;
    }

    interface Ip_task {
        taskId: number;
        submitTime: number;
        count: (number|Long);
        roleLv: number;
        beginTime: number;
    }

    class p_task implements Ip_task {
        constructor(p?: Ip_task);
        public taskId: number;
        public submitTime: number;
        public count: (number|Long);
        public roleLv: number;
        public beginTime: number;
        public static encode(m: Ip_task, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_task;
    }

    interface Ip_loop_task {
        taskType: number;
        finishNum: number;
        todoTaskId: number;
    }

    class p_loop_task implements Ip_loop_task {
        constructor(p?: Ip_loop_task);
        public taskType: number;
        public finishNum: number;
        public todoTaskId: number;
        public static encode(m: Ip_loop_task, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_loop_task;
    }

    interface Is2c_loop_task_status_notify {
        taskStatus: Ip_loop_task;
    }

    class s2c_loop_task_status_notify implements Is2c_loop_task_status_notify {
        public static cmd: number;
        constructor(p?: Is2c_loop_task_status_notify);
        public taskStatus: Ip_loop_task;
        public static encode(m: Is2c_loop_task_status_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_loop_task_status_notify;
    }

    interface Ic2s_task_new_play_enter_oasis {
    }

    class c2s_task_new_play_enter_oasis implements Ic2s_task_new_play_enter_oasis {
        public static cmd: number;
        constructor(p?: Ic2s_task_new_play_enter_oasis);
        public static encode(m: Ic2s_task_new_play_enter_oasis, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_task_new_play_enter_oasis;
    }

    interface Ic2s_save_guide_data_request {
        noviceId: number;
        step: number;
    }

    class c2s_save_guide_data_request implements Ic2s_save_guide_data_request {
        public static cmd: number;
        constructor(p?: Ic2s_save_guide_data_request);
        public noviceId: number;
        public step: number;
        public static encode(m: Ic2s_save_guide_data_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_save_guide_data_request;
    }

    interface Ic2s_get_guide_data_request {
    }

    class c2s_get_guide_data_request implements Ic2s_get_guide_data_request {
        public static cmd: number;
        constructor(p?: Ic2s_get_guide_data_request);
        public static encode(m: Ic2s_get_guide_data_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_guide_data_request;
    }

    interface Is2c_give_guide_data_response {
        noviceId: number;
        step: number;
    }

    class s2c_give_guide_data_response implements Is2c_give_guide_data_response {
        public static cmd: number;
        constructor(p?: Is2c_give_guide_data_response);
        public noviceId: number;
        public step: number;
        public static encode(m: Is2c_give_guide_data_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_give_guide_data_response;
    }

    interface Ic2s_query_is_inter_request {
    }

    class c2s_query_is_inter_request implements Ic2s_query_is_inter_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_is_inter_request);
        public static encode(m: Ic2s_query_is_inter_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_is_inter_request;
    }

    interface Is2c_query_is_inter_response {
        status: number;
    }

    class s2c_query_is_inter_response implements Is2c_query_is_inter_response {
        public static cmd: number;
        constructor(p?: Is2c_query_is_inter_response);
        public status: number;
        public static encode(m: Is2c_query_is_inter_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_is_inter_response;
    }

    interface Ic2s_query_rank {
        Type: number;
        isKuafu: number;
    }

    class c2s_query_rank implements Ic2s_query_rank {
        public static cmd: number;
        constructor(p?: Ic2s_query_rank);
        public Type: number;
        public isKuafu: number;
        public static encode(m: Ic2s_query_rank, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_rank;
    }

    interface Is2c_query_rank {
        Type: number;
        isKuafu: number;
        myInfo: Irank_record_p;
        data?: (Irank_record_p[]|null);
    }

    class s2c_query_rank implements Is2c_query_rank {
        public static cmd: number;
        constructor(p?: Is2c_query_rank);
        public Type: number;
        public isKuafu: number;
        public myInfo: Irank_record_p;
        public data: Irank_record_p[];
        public static encode(m: Is2c_query_rank, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_rank;
    }

    interface Irank_record_p {
        rank: number;
        roleInfo: Irank_role_basic;
        rankData?: (string[]|null);
        extraData: string;
    }

    class rank_record_p implements Irank_record_p {
        constructor(p?: Irank_record_p);
        public rank: number;
        public roleInfo: Irank_role_basic;
        public rankData: string[];
        public extraData: string;
        public static encode(m: Irank_record_p, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): rank_record_p;
    }

    interface Ip_rank_tower_top_three {
        order: number;
        name: string;
        data: number;
    }

    class p_rank_tower_top_three implements Ip_rank_tower_top_three {
        constructor(p?: Ip_rank_tower_top_three);
        public order: number;
        public name: string;
        public data: number;
        public static encode(m: Ip_rank_tower_top_three, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_rank_tower_top_three;
    }

    interface Ic2s_query_tower_top_three_request {
    }

    class c2s_query_tower_top_three_request implements Ic2s_query_tower_top_three_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_tower_top_three_request);
        public static encode(m: Ic2s_query_tower_top_three_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_tower_top_three_request;
    }

    interface Is2c_query_tower_top_three_response {
        topThree?: (Ip_rank_tower_top_three[]|null);
    }

    class s2c_query_tower_top_three_response implements Is2c_query_tower_top_three_response {
        public static cmd: number;
        constructor(p?: Is2c_query_tower_top_three_response);
        public topThree: Ip_rank_tower_top_three[];
        public static encode(m: Is2c_query_tower_top_three_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_tower_top_three_response;
    }

    interface Irank_role_basic {
        roleId: (number|Long);
        roleName: string;
        vipLv: number;
        gangName: string;
        career: number;
        stateId: number;
        dressUpHead: number;
        dressUpFrame: number;
        sex: number;
        trans: number;
    }

    class rank_role_basic implements Irank_role_basic {
        constructor(p?: Irank_role_basic);
        public roleId: (number|Long);
        public roleName: string;
        public vipLv: number;
        public gangName: string;
        public career: number;
        public stateId: number;
        public dressUpHead: number;
        public dressUpFrame: number;
        public sex: number;
        public trans: number;
        public static encode(m: Irank_role_basic, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): rank_role_basic;
    }

    interface Ip_title {
        titleId: number;
        time?: (number|null);
    }

    class p_title implements Ip_title {
        constructor(p?: Ip_title);
        public titleId: number;
        public time: number;
        public static encode(m: Ip_title, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_title;
    }

    interface Ic2s_title_request {
    }

    class c2s_title_request implements Ic2s_title_request {
        public static cmd: number;
        constructor(p?: Ic2s_title_request);
        public static encode(m: Ic2s_title_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_title_request;
    }

    interface Ic2s_title_change_request {
        titleId: number;
    }

    class c2s_title_change_request implements Ic2s_title_change_request {
        public static cmd: number;
        constructor(p?: Ic2s_title_change_request);
        public titleId: number;
        public static encode(m: Ic2s_title_change_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_title_change_request;
    }

    interface Is2c_obtained_title_notify {
        obtainedTitle?: (Ip_title[]|null);
    }

    class s2c_obtained_title_notify implements Is2c_obtained_title_notify {
        public static cmd: number;
        constructor(p?: Is2c_obtained_title_notify);
        public obtainedTitle: Ip_title[];
        public static encode(m: Is2c_obtained_title_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_obtained_title_notify;
    }

    interface Is2c_new_obtained_title_notify {
        obtainedTitle: Ip_title;
    }

    class s2c_new_obtained_title_notify implements Is2c_new_obtained_title_notify {
        public static cmd: number;
        constructor(p?: Is2c_new_obtained_title_notify);
        public obtainedTitle: Ip_title;
        public static encode(m: Is2c_new_obtained_title_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_new_obtained_title_notify;
    }

    interface Is2c_del_title_notify {
        titleId: Ip_title;
    }

    class s2c_del_title_notify implements Is2c_del_title_notify {
        public static cmd: number;
        constructor(p?: Is2c_del_title_notify);
        public titleId: Ip_title;
        public static encode(m: Is2c_del_title_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_del_title_notify;
    }

    interface Ip_horse {
        starranklevel: number;
        starrankexp: number;
        skills?: (number[]|null);
        horseImageInScene: number;
        changeHorseList?: (Ip_change_horse[]|null);
        combat: number;
        effects?: (Ip_horse_attr[]|null);
        isActive: number;
    }

    class p_horse implements Ip_horse {
        constructor(p?: Ip_horse);
        public starranklevel: number;
        public starrankexp: number;
        public skills: number[];
        public horseImageInScene: number;
        public changeHorseList: Ip_change_horse[];
        public combat: number;
        public effects: Ip_horse_attr[];
        public isActive: number;
        public static encode(m: Ip_horse, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_horse;
    }

    interface Ip_horse_attr {
        name: string;
        val: number;
    }

    class p_horse_attr implements Ip_horse_attr {
        constructor(p?: Ip_horse_attr);
        public name: string;
        public val: number;
        public static encode(m: Ip_horse_attr, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_horse_attr;
    }

    interface Ip_change_horse {
        typeId: number;
        rank: number;
        rankexp: number;
        combat: number;
        effects?: (Ip_horse_attr[]|null);
    }

    class p_change_horse implements Ip_change_horse {
        constructor(p?: Ip_change_horse);
        public typeId: number;
        public rank: number;
        public rankexp: number;
        public combat: number;
        public effects: Ip_horse_attr[];
        public static encode(m: Ip_change_horse, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_change_horse;
    }

    interface Ic2s_horse_info_request {
    }

    class c2s_horse_info_request implements Ic2s_horse_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_horse_info_request);
        public static encode(m: Ic2s_horse_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_horse_info_request;
    }

    interface Is2c_horse_info_reply {
        horse: Ip_horse;
    }

    class s2c_horse_info_reply implements Is2c_horse_info_reply {
        public static cmd: number;
        constructor(p?: Is2c_horse_info_reply);
        public horse: Ip_horse;
        public static encode(m: Is2c_horse_info_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_horse_info_reply;
    }

    interface Is2c_horse_info_change_notify {
        horse: Ip_horse;
    }

    class s2c_horse_info_change_notify implements Is2c_horse_info_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_horse_info_change_notify);
        public horse: Ip_horse;
        public static encode(m: Is2c_horse_info_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_horse_info_change_notify;
    }

    interface Ic2s_horse_increase_starranklevel_request {
        itemId: number;
        oneKey: number;
    }

    class c2s_horse_increase_starranklevel_request implements Ic2s_horse_increase_starranklevel_request {
        public static cmd: number;
        constructor(p?: Ic2s_horse_increase_starranklevel_request);
        public itemId: number;
        public oneKey: number;
        public static encode(m: Ic2s_horse_increase_starranklevel_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_horse_increase_starranklevel_request;
    }

    interface Ic2s_change_horse_activate_request {
        typeId: number;
    }

    class c2s_change_horse_activate_request implements Ic2s_change_horse_activate_request {
        public static cmd: number;
        constructor(p?: Ic2s_change_horse_activate_request);
        public typeId: number;
        public static encode(m: Ic2s_change_horse_activate_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_change_horse_activate_request;
    }

    interface Ic2s_change_horse_increase_rank_request {
        typeId: number;
        itemId: number;
        oneKey: number;
    }

    class c2s_change_horse_increase_rank_request implements Ic2s_change_horse_increase_rank_request {
        public static cmd: number;
        constructor(p?: Ic2s_change_horse_increase_rank_request);
        public typeId: number;
        public itemId: number;
        public oneKey: number;
        public static encode(m: Ic2s_change_horse_increase_rank_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_change_horse_increase_rank_request;
    }

    interface Ic2s_horse_image_in_scene {
        typeId: number;
    }

    class c2s_horse_image_in_scene implements Ic2s_horse_image_in_scene {
        public static cmd: number;
        constructor(p?: Ic2s_horse_image_in_scene);
        public typeId: number;
        public static encode(m: Ic2s_horse_image_in_scene, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_horse_image_in_scene;
    }

    interface Ic2s_change_horse_position_status {
        status: number;
    }

    class c2s_change_horse_position_status implements Ic2s_change_horse_position_status {
        public static cmd: number;
        constructor(p?: Ic2s_change_horse_position_status);
        public status: number;
        public static encode(m: Ic2s_change_horse_position_status, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_change_horse_position_status;
    }

    interface Ic2s_active_horse_skill_request {
        skillid: number;
    }

    class c2s_active_horse_skill_request implements Ic2s_active_horse_skill_request {
        public static cmd: number;
        constructor(p?: Ic2s_active_horse_skill_request);
        public skillid: number;
        public static encode(m: Ic2s_active_horse_skill_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_active_horse_skill_request;
    }

    interface Is2c_active_horse_skill_reply {
        skillid: number;
    }

    class s2c_active_horse_skill_reply implements Is2c_active_horse_skill_reply {
        public static cmd: number;
        constructor(p?: Is2c_active_horse_skill_reply);
        public skillid: number;
        public static encode(m: Is2c_active_horse_skill_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_active_horse_skill_reply;
    }

    interface Ic2s_active_horse_request {
    }

    class c2s_active_horse_request implements Ic2s_active_horse_request {
        public static cmd: number;
        constructor(p?: Ic2s_active_horse_request);
        public static encode(m: Ic2s_active_horse_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_active_horse_request;
    }

    interface Ip_wing {
        level: number;
        exp: number;
        skills?: (number[]|null);
        wingImageInScene: number;
        changeWingList?: (Ip_change_wing[]|null);
        combat: number;
        effects?: (Ip_wing_attr[]|null);
        isActive?: (number|null);
    }

    class p_wing implements Ip_wing {
        constructor(p?: Ip_wing);
        public level: number;
        public exp: number;
        public skills: number[];
        public wingImageInScene: number;
        public changeWingList: Ip_change_wing[];
        public combat: number;
        public effects: Ip_wing_attr[];
        public isActive: number;
        public static encode(m: Ip_wing, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_wing;
    }

    interface Ip_wing_attr {
        name: string;
        val: number;
    }

    class p_wing_attr implements Ip_wing_attr {
        constructor(p?: Ip_wing_attr);
        public name: string;
        public val: number;
        public static encode(m: Ip_wing_attr, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_wing_attr;
    }

    interface Ip_change_wing {
        typeId: number;
        rank: number;
        combat: number;
        effects?: (Ip_wing_attr[]|null);
    }

    class p_change_wing implements Ip_change_wing {
        constructor(p?: Ip_change_wing);
        public typeId: number;
        public rank: number;
        public combat: number;
        public effects: Ip_wing_attr[];
        public static encode(m: Ip_change_wing, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_change_wing;
    }

    interface Ic2s_wing_info_request {
    }

    class c2s_wing_info_request implements Ic2s_wing_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_wing_info_request);
        public static encode(m: Ic2s_wing_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_wing_info_request;
    }

    interface Is2c_wing_info_reply {
        wing: Ip_wing;
    }

    class s2c_wing_info_reply implements Is2c_wing_info_reply {
        public static cmd: number;
        constructor(p?: Is2c_wing_info_reply);
        public wing: Ip_wing;
        public static encode(m: Is2c_wing_info_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_wing_info_reply;
    }

    interface Is2c_wing_info_change_notify {
        wing: Ip_wing;
    }

    class s2c_wing_info_change_notify implements Is2c_wing_info_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_wing_info_change_notify);
        public wing: Ip_wing;
        public static encode(m: Is2c_wing_info_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_wing_info_change_notify;
    }

    interface Ic2s_wing_increase_starranklevel_request {
        itemId: number;
        oneKey: number;
    }

    class c2s_wing_increase_starranklevel_request implements Ic2s_wing_increase_starranklevel_request {
        public static cmd: number;
        constructor(p?: Ic2s_wing_increase_starranklevel_request);
        public itemId: number;
        public oneKey: number;
        public static encode(m: Ic2s_wing_increase_starranklevel_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_wing_increase_starranklevel_request;
    }

    interface Ic2s_change_wing_activate_request {
        typeId: number;
    }

    class c2s_change_wing_activate_request implements Ic2s_change_wing_activate_request {
        public static cmd: number;
        constructor(p?: Ic2s_change_wing_activate_request);
        public typeId: number;
        public static encode(m: Ic2s_change_wing_activate_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_change_wing_activate_request;
    }

    interface Ic2s_wing_image_in_scene {
        typeId: number;
    }

    class c2s_wing_image_in_scene implements Ic2s_wing_image_in_scene {
        public static cmd: number;
        constructor(p?: Ic2s_wing_image_in_scene);
        public typeId: number;
        public static encode(m: Ic2s_wing_image_in_scene, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_wing_image_in_scene;
    }

    interface Ic2s_wing_active_request {
    }

    class c2s_wing_active_request implements Ic2s_wing_active_request {
        public static cmd: number;
        constructor(p?: Ic2s_wing_active_request);
        public static encode(m: Ic2s_wing_active_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_wing_active_request;
    }

    interface Ic2s_active_wing_skill_request {
        skillid: number;
    }

    class c2s_active_wing_skill_request implements Ic2s_active_wing_skill_request {
        public static cmd: number;
        constructor(p?: Ic2s_active_wing_skill_request);
        public skillid: number;
        public static encode(m: Ic2s_active_wing_skill_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_active_wing_skill_request;
    }

    interface Is2c_active_wing_skill_reply {
        skillid: number;
    }

    class s2c_active_wing_skill_reply implements Is2c_active_wing_skill_reply {
        public static cmd: number;
        constructor(p?: Is2c_active_wing_skill_reply);
        public skillid: number;
        public static encode(m: Is2c_active_wing_skill_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_active_wing_skill_reply;
    }

    interface Ip_talisman {
        level: number;
        exp: number;
        skills?: (number[]|null);
        talismanImageInScene: number;
        changeTalismanList?: (Ip_change_talisman[]|null);
        combat: number;
        effects?: (Ip_talisman_attr[]|null);
        isActive?: (number|null);
    }

    class p_talisman implements Ip_talisman {
        constructor(p?: Ip_talisman);
        public level: number;
        public exp: number;
        public skills: number[];
        public talismanImageInScene: number;
        public changeTalismanList: Ip_change_talisman[];
        public combat: number;
        public effects: Ip_talisman_attr[];
        public isActive: number;
        public static encode(m: Ip_talisman, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_talisman;
    }

    interface Ip_talisman_attr {
        name: string;
        val: number;
    }

    class p_talisman_attr implements Ip_talisman_attr {
        constructor(p?: Ip_talisman_attr);
        public name: string;
        public val: number;
        public static encode(m: Ip_talisman_attr, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_talisman_attr;
    }

    interface Ip_change_talisman {
        typeId: number;
        rank: number;
        combat: number;
        effects?: (Ip_talisman_attr[]|null);
    }

    class p_change_talisman implements Ip_change_talisman {
        constructor(p?: Ip_change_talisman);
        public typeId: number;
        public rank: number;
        public combat: number;
        public effects: Ip_talisman_attr[];
        public static encode(m: Ip_change_talisman, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_change_talisman;
    }

    interface Ic2s_talisman_info_request {
    }

    class c2s_talisman_info_request implements Ic2s_talisman_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_talisman_info_request);
        public static encode(m: Ic2s_talisman_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_talisman_info_request;
    }

    interface Is2c_talisman_info_reply {
        talisman: Ip_talisman;
    }

    class s2c_talisman_info_reply implements Is2c_talisman_info_reply {
        public static cmd: number;
        constructor(p?: Is2c_talisman_info_reply);
        public talisman: Ip_talisman;
        public static encode(m: Is2c_talisman_info_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_talisman_info_reply;
    }

    interface Is2c_talisman_info_change_notify {
        talisman: Ip_talisman;
    }

    class s2c_talisman_info_change_notify implements Is2c_talisman_info_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_talisman_info_change_notify);
        public talisman: Ip_talisman;
        public static encode(m: Is2c_talisman_info_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_talisman_info_change_notify;
    }

    interface Ic2s_talisman_increase_starranklevel_request {
        itemId: number;
        oneKey: number;
    }

    class c2s_talisman_increase_starranklevel_request implements Ic2s_talisman_increase_starranklevel_request {
        public static cmd: number;
        constructor(p?: Ic2s_talisman_increase_starranklevel_request);
        public itemId: number;
        public oneKey: number;
        public static encode(m: Ic2s_talisman_increase_starranklevel_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_talisman_increase_starranklevel_request;
    }

    interface Ic2s_change_talisman_activate_request {
        typeId: number;
    }

    class c2s_change_talisman_activate_request implements Ic2s_change_talisman_activate_request {
        public static cmd: number;
        constructor(p?: Ic2s_change_talisman_activate_request);
        public typeId: number;
        public static encode(m: Ic2s_change_talisman_activate_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_change_talisman_activate_request;
    }

    interface Ic2s_talisman_image_in_scene {
        typeId: number;
    }

    class c2s_talisman_image_in_scene implements Ic2s_talisman_image_in_scene {
        public static cmd: number;
        constructor(p?: Ic2s_talisman_image_in_scene);
        public typeId: number;
        public static encode(m: Ic2s_talisman_image_in_scene, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_talisman_image_in_scene;
    }

    interface Ic2s_talisman_active_request {
    }

    class c2s_talisman_active_request implements Ic2s_talisman_active_request {
        public static cmd: number;
        constructor(p?: Ic2s_talisman_active_request);
        public static encode(m: Ic2s_talisman_active_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_talisman_active_request;
    }

    interface Ic2s_active_talisman_skill_request {
        skillid: number;
    }

    class c2s_active_talisman_skill_request implements Ic2s_active_talisman_skill_request {
        public static cmd: number;
        constructor(p?: Ic2s_active_talisman_skill_request);
        public skillid: number;
        public static encode(m: Ic2s_active_talisman_skill_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_active_talisman_skill_request;
    }

    interface Is2c_active_talisman_skill_reply {
        skillid: number;
    }

    class s2c_active_talisman_skill_reply implements Is2c_active_talisman_skill_reply {
        public static cmd: number;
        constructor(p?: Is2c_active_talisman_skill_reply);
        public skillid: number;
        public static encode(m: Is2c_active_talisman_skill_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_active_talisman_skill_reply;
    }

    interface Ip_weapon {
        level: number;
        exp: number;
        skills?: (number[]|null);
        weaponImageInScene: number;
        changeWeaponList?: (Ip_change_weapon[]|null);
        combat: number;
        effects?: (Ip_weapon_attr[]|null);
        isActive?: (number|null);
    }

    class p_weapon implements Ip_weapon {
        constructor(p?: Ip_weapon);
        public level: number;
        public exp: number;
        public skills: number[];
        public weaponImageInScene: number;
        public changeWeaponList: Ip_change_weapon[];
        public combat: number;
        public effects: Ip_weapon_attr[];
        public isActive: number;
        public static encode(m: Ip_weapon, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_weapon;
    }

    interface Ip_weapon_attr {
        name: string;
        val: number;
    }

    class p_weapon_attr implements Ip_weapon_attr {
        constructor(p?: Ip_weapon_attr);
        public name: string;
        public val: number;
        public static encode(m: Ip_weapon_attr, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_weapon_attr;
    }

    interface Ip_change_weapon {
        typeId: number;
        rank: number;
        combat: number;
        effects?: (Ip_weapon_attr[]|null);
    }

    class p_change_weapon implements Ip_change_weapon {
        constructor(p?: Ip_change_weapon);
        public typeId: number;
        public rank: number;
        public combat: number;
        public effects: Ip_weapon_attr[];
        public static encode(m: Ip_change_weapon, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_change_weapon;
    }

    interface Ic2s_weapon_info_request {
    }

    class c2s_weapon_info_request implements Ic2s_weapon_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_weapon_info_request);
        public static encode(m: Ic2s_weapon_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_weapon_info_request;
    }

    interface Is2c_weapon_info_reply {
        weapon: Ip_weapon;
    }

    class s2c_weapon_info_reply implements Is2c_weapon_info_reply {
        public static cmd: number;
        constructor(p?: Is2c_weapon_info_reply);
        public weapon: Ip_weapon;
        public static encode(m: Is2c_weapon_info_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_weapon_info_reply;
    }

    interface Is2c_weapon_info_change_notify {
        weapon: Ip_weapon;
    }

    class s2c_weapon_info_change_notify implements Is2c_weapon_info_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_weapon_info_change_notify);
        public weapon: Ip_weapon;
        public static encode(m: Is2c_weapon_info_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_weapon_info_change_notify;
    }

    interface Ic2s_weapon_increase_starranklevel_request {
        itemId: number;
        oneKey: number;
    }

    class c2s_weapon_increase_starranklevel_request implements Ic2s_weapon_increase_starranklevel_request {
        public static cmd: number;
        constructor(p?: Ic2s_weapon_increase_starranklevel_request);
        public itemId: number;
        public oneKey: number;
        public static encode(m: Ic2s_weapon_increase_starranklevel_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_weapon_increase_starranklevel_request;
    }

    interface Ic2s_change_weapon_activate_request {
        typeId: number;
    }

    class c2s_change_weapon_activate_request implements Ic2s_change_weapon_activate_request {
        public static cmd: number;
        constructor(p?: Ic2s_change_weapon_activate_request);
        public typeId: number;
        public static encode(m: Ic2s_change_weapon_activate_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_change_weapon_activate_request;
    }

    interface Ic2s_weapon_image_in_scene {
        typeId: number;
    }

    class c2s_weapon_image_in_scene implements Ic2s_weapon_image_in_scene {
        public static cmd: number;
        constructor(p?: Ic2s_weapon_image_in_scene);
        public typeId: number;
        public static encode(m: Ic2s_weapon_image_in_scene, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_weapon_image_in_scene;
    }

    interface Ic2s_weapon_active_request {
    }

    class c2s_weapon_active_request implements Ic2s_weapon_active_request {
        public static cmd: number;
        constructor(p?: Ic2s_weapon_active_request);
        public static encode(m: Ic2s_weapon_active_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_weapon_active_request;
    }

    interface Ic2s_active_weapon_skill_request {
        skillid: number;
    }

    class c2s_active_weapon_skill_request implements Ic2s_active_weapon_skill_request {
        public static cmd: number;
        constructor(p?: Ic2s_active_weapon_skill_request);
        public skillid: number;
        public static encode(m: Ic2s_active_weapon_skill_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_active_weapon_skill_request;
    }

    interface Is2c_active_weapon_skill_reply {
        skillid: number;
    }

    class s2c_active_weapon_skill_reply implements Is2c_active_weapon_skill_reply {
        public static cmd: number;
        constructor(p?: Is2c_active_weapon_skill_reply);
        public skillid: number;
        public static encode(m: Is2c_active_weapon_skill_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_active_weapon_skill_reply;
    }

    interface Ip_cloak {
        level: number;
        exp: number;
        skills?: (number[]|null);
        cloakImageInScene: number;
        changeCloakList?: (Ip_change_cloak[]|null);
        combat: number;
        effects?: (Ip_cloak_attr[]|null);
    }

    class p_cloak implements Ip_cloak {
        constructor(p?: Ip_cloak);
        public level: number;
        public exp: number;
        public skills: number[];
        public cloakImageInScene: number;
        public changeCloakList: Ip_change_cloak[];
        public combat: number;
        public effects: Ip_cloak_attr[];
        public static encode(m: Ip_cloak, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_cloak;
    }

    interface Ip_cloak_attr {
        name: string;
        val: number;
    }

    class p_cloak_attr implements Ip_cloak_attr {
        constructor(p?: Ip_cloak_attr);
        public name: string;
        public val: number;
        public static encode(m: Ip_cloak_attr, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_cloak_attr;
    }

    interface Ip_change_cloak {
        typeId: number;
        rank: number;
        combat: number;
        effects?: (Ip_cloak_attr[]|null);
    }

    class p_change_cloak implements Ip_change_cloak {
        constructor(p?: Ip_change_cloak);
        public typeId: number;
        public rank: number;
        public combat: number;
        public effects: Ip_cloak_attr[];
        public static encode(m: Ip_change_cloak, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_change_cloak;
    }

    interface Ic2s_cloak_info_request {
    }

    class c2s_cloak_info_request implements Ic2s_cloak_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_cloak_info_request);
        public static encode(m: Ic2s_cloak_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_cloak_info_request;
    }

    interface Is2c_cloak_info_reply {
        cloak: Ip_cloak;
    }

    class s2c_cloak_info_reply implements Is2c_cloak_info_reply {
        public static cmd: number;
        constructor(p?: Is2c_cloak_info_reply);
        public cloak: Ip_cloak;
        public static encode(m: Is2c_cloak_info_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_cloak_info_reply;
    }

    interface Is2c_cloak_info_change_notify {
        cloak: Ip_cloak;
    }

    class s2c_cloak_info_change_notify implements Is2c_cloak_info_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_cloak_info_change_notify);
        public cloak: Ip_cloak;
        public static encode(m: Is2c_cloak_info_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_cloak_info_change_notify;
    }

    interface Ic2s_cloak_increase_starranklevel_request {
        itemId: number;
        oneKey: number;
    }

    class c2s_cloak_increase_starranklevel_request implements Ic2s_cloak_increase_starranklevel_request {
        public static cmd: number;
        constructor(p?: Ic2s_cloak_increase_starranklevel_request);
        public itemId: number;
        public oneKey: number;
        public static encode(m: Ic2s_cloak_increase_starranklevel_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_cloak_increase_starranklevel_request;
    }

    interface Ic2s_change_cloak_activate_request {
        typeId: number;
    }

    class c2s_change_cloak_activate_request implements Ic2s_change_cloak_activate_request {
        public static cmd: number;
        constructor(p?: Ic2s_change_cloak_activate_request);
        public typeId: number;
        public static encode(m: Ic2s_change_cloak_activate_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_change_cloak_activate_request;
    }

    interface Ic2s_cloak_image_in_scene {
        typeId: number;
    }

    class c2s_cloak_image_in_scene implements Ic2s_cloak_image_in_scene {
        public static cmd: number;
        constructor(p?: Ic2s_cloak_image_in_scene);
        public typeId: number;
        public static encode(m: Ic2s_cloak_image_in_scene, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_cloak_image_in_scene;
    }

    interface Ip_role_instance {
        instanceType: number;
        todayTimes: number;
        buyTimes: number;
        helpTimes: number;
        cd: number;
        progress: number;
        starHist?: (Ip_kv_pair[]|null);
        vipBuyTimes?: (number|null);
        combineTimes?: (number|null);
        canGetReward?: (number|null);
    }

    class p_role_instance implements Ip_role_instance {
        constructor(p?: Ip_role_instance);
        public instanceType: number;
        public todayTimes: number;
        public buyTimes: number;
        public helpTimes: number;
        public cd: number;
        public progress: number;
        public starHist: Ip_kv_pair[];
        public vipBuyTimes: number;
        public combineTimes: number;
        public canGetReward: number;
        public static encode(m: Ip_role_instance, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_role_instance;
    }

    interface Ip_boss_info {
        instanceId: number;
        monsterId: number;
        reviveTime: number;
        posX: number;
        posY: number;
    }

    class p_boss_info implements Ip_boss_info {
        constructor(p?: Ip_boss_info);
        public instanceId: number;
        public monsterId: number;
        public reviveTime: number;
        public posX: number;
        public posY: number;
        public static encode(m: Ip_boss_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_boss_info;
    }

    interface Ip_concern_boss {
        instanceId: number;
        monsterId: number;
    }

    class p_concern_boss implements Ip_concern_boss {
        constructor(p?: Ip_concern_boss);
        public instanceId: number;
        public monsterId: number;
        public static encode(m: Ip_concern_boss, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_concern_boss;
    }

    interface Ic2s_boss_list_request {
    }

    class c2s_boss_list_request implements Ic2s_boss_list_request {
        public static cmd: number;
        constructor(p?: Ic2s_boss_list_request);
        public static encode(m: Ic2s_boss_list_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_boss_list_request;
    }

    interface Is2c_boss_list_reply {
        list?: (Ip_boss_info[]|null);
    }

    class s2c_boss_list_reply implements Is2c_boss_list_reply {
        public static cmd: number;
        constructor(p?: Is2c_boss_list_reply);
        public list: Ip_boss_info[];
        public static encode(m: Is2c_boss_list_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_boss_list_reply;
    }

    interface Ic2s_role_instance_list_request {
    }

    class c2s_role_instance_list_request implements Ic2s_role_instance_list_request {
        public static cmd: number;
        constructor(p?: Ic2s_role_instance_list_request);
        public static encode(m: Ic2s_role_instance_list_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_role_instance_list_request;
    }

    interface Is2c_role_instance_list_reply {
        list?: (Ip_role_instance[]|null);
    }

    class s2c_role_instance_list_reply implements Is2c_role_instance_list_reply {
        public static cmd: number;
        constructor(p?: Is2c_role_instance_list_reply);
        public list: Ip_role_instance[];
        public static encode(m: Is2c_role_instance_list_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_instance_list_reply;
    }

    interface Is2c_role_instance_changed_notify {
        list?: (Ip_role_instance[]|null);
    }

    class s2c_role_instance_changed_notify implements Is2c_role_instance_changed_notify {
        public static cmd: number;
        constructor(p?: Is2c_role_instance_changed_notify);
        public list: Ip_role_instance[];
        public static encode(m: Is2c_role_instance_changed_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_instance_changed_notify;
    }

    interface Is2c_boss_info_changed_notify {
        list?: (Ip_boss_info[]|null);
    }

    class s2c_boss_info_changed_notify implements Is2c_boss_info_changed_notify {
        public static cmd: number;
        constructor(p?: Is2c_boss_info_changed_notify);
        public list: Ip_boss_info[];
        public static encode(m: Is2c_boss_info_changed_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_boss_info_changed_notify;
    }

    interface Ic2s_query_concern_boss_request {
    }

    class c2s_query_concern_boss_request implements Ic2s_query_concern_boss_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_concern_boss_request);
        public static encode(m: Ic2s_query_concern_boss_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_concern_boss_request;
    }

    interface Is2c_query_concern_boss_reply {
        list?: (Ip_concern_boss[]|null);
    }

    class s2c_query_concern_boss_reply implements Is2c_query_concern_boss_reply {
        public static cmd: number;
        constructor(p?: Is2c_query_concern_boss_reply);
        public list: Ip_concern_boss[];
        public static encode(m: Is2c_query_concern_boss_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_concern_boss_reply;
    }

    interface Ic2s_add_conern_boss_request {
        instanceId: number;
        monsterId: number;
    }

    class c2s_add_conern_boss_request implements Ic2s_add_conern_boss_request {
        public static cmd: number;
        constructor(p?: Ic2s_add_conern_boss_request);
        public instanceId: number;
        public monsterId: number;
        public static encode(m: Ic2s_add_conern_boss_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_add_conern_boss_request;
    }

    interface Is2c_add_concern_boss_notify {
        list?: (Ip_concern_boss[]|null);
    }

    class s2c_add_concern_boss_notify implements Is2c_add_concern_boss_notify {
        public static cmd: number;
        constructor(p?: Is2c_add_concern_boss_notify);
        public list: Ip_concern_boss[];
        public static encode(m: Is2c_add_concern_boss_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_add_concern_boss_notify;
    }

    interface Ic2s_remove_conern_boss_request {
        instanceId: number;
        monsterId: number;
    }

    class c2s_remove_conern_boss_request implements Ic2s_remove_conern_boss_request {
        public static cmd: number;
        constructor(p?: Ic2s_remove_conern_boss_request);
        public instanceId: number;
        public monsterId: number;
        public static encode(m: Ic2s_remove_conern_boss_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_remove_conern_boss_request;
    }

    interface Is2c_remove_concern_boss_notify {
        list?: (Ip_concern_boss[]|null);
    }

    class s2c_remove_concern_boss_notify implements Is2c_remove_concern_boss_notify {
        public static cmd: number;
        constructor(p?: Is2c_remove_concern_boss_notify);
        public list: Ip_concern_boss[];
        public static encode(m: Is2c_remove_concern_boss_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_remove_concern_boss_notify;
    }

    interface Ic2s_enter_instance_request {
        instanceId: number;
    }

    class c2s_enter_instance_request implements Ic2s_enter_instance_request {
        public static cmd: number;
        constructor(p?: Ic2s_enter_instance_request);
        public instanceId: number;
        public static encode(m: Ic2s_enter_instance_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_enter_instance_request;
    }

    interface Is2c_instance_info_notify {
        instanceId: number;
        beginTime: number;
        endTime: number;
        wave: number;
        result: number;
        star?: (number|null);
        killMonsterCount?: (number|null);
    }

    class s2c_instance_info_notify implements Is2c_instance_info_notify {
        public static cmd: number;
        constructor(p?: Is2c_instance_info_notify);
        public instanceId: number;
        public beginTime: number;
        public endTime: number;
        public wave: number;
        public result: number;
        public star: number;
        public killMonsterCount: number;
        public static encode(m: Is2c_instance_info_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_instance_info_notify;
    }

    interface Is2c_role_in_instance_notify {
        instanceId: number;
        anger: number;
        enterTime: number;
        leaveTime: number;
        goldEncourageTimes?: (number|null);
        coinEncourageTimes?: (number|null);
        accExp?: (number|Long|null);
        accCoin?: (number|Long|null);
    }

    class s2c_role_in_instance_notify implements Is2c_role_in_instance_notify {
        public static cmd: number;
        constructor(p?: Is2c_role_in_instance_notify);
        public instanceId: number;
        public anger: number;
        public enterTime: number;
        public leaveTime: number;
        public goldEncourageTimes: number;
        public coinEncourageTimes: number;
        public accExp: (number|Long);
        public accCoin: (number|Long);
        public static encode(m: Is2c_role_in_instance_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_in_instance_notify;
    }

    interface Ic2s_leave_instance_request {
    }

    class c2s_leave_instance_request implements Ic2s_leave_instance_request {
        public static cmd: number;
        constructor(p?: Ic2s_leave_instance_request);
        public static encode(m: Ic2s_leave_instance_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_leave_instance_request;
    }

    interface Is2c_leave_instance_notify {
        instanceId: number;
    }

    class s2c_leave_instance_notify implements Is2c_leave_instance_notify {
        public static cmd: number;
        constructor(p?: Is2c_leave_instance_notify);
        public instanceId: number;
        public static encode(m: Is2c_leave_instance_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_leave_instance_notify;
    }

    interface Ic2s_buy_instance_times_request {
        instanceType: number;
        buyType?: (number|null);
    }

    class c2s_buy_instance_times_request implements Ic2s_buy_instance_times_request {
        public static cmd: number;
        constructor(p?: Ic2s_buy_instance_times_request);
        public instanceType: number;
        public buyType: number;
        public static encode(m: Ic2s_buy_instance_times_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_buy_instance_times_request;
    }

    interface Ip_boss_drop {
        instanceId: number;
        time: number;
        roleId: (number|Long);
        name: string;
        monsterId: number;
        itemId: number;
        extData: string;
        id: (number|Long);
    }

    class p_boss_drop implements Ip_boss_drop {
        constructor(p?: Ip_boss_drop);
        public instanceId: number;
        public time: number;
        public roleId: (number|Long);
        public name: string;
        public monsterId: number;
        public itemId: number;
        public extData: string;
        public id: (number|Long);
        public static encode(m: Ip_boss_drop, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_boss_drop;
    }

    interface Ic2s_query_boss_drop_request {
        id?: (number|Long|null);
        toInter: number;
    }

    class c2s_query_boss_drop_request implements Ic2s_query_boss_drop_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_boss_drop_request);
        public id: (number|Long);
        public toInter: number;
        public static encode(m: Ic2s_query_boss_drop_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_boss_drop_request;
    }

    interface Is2c_boss_drop_reply {
        list?: (Ip_boss_drop[]|null);
    }

    class s2c_boss_drop_reply implements Is2c_boss_drop_reply {
        public static cmd: number;
        constructor(p?: Is2c_boss_drop_reply);
        public list: Ip_boss_drop[];
        public static encode(m: Is2c_boss_drop_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_boss_drop_reply;
    }

    interface Ip_boss_kill {
        roleId: (number|Long);
        name: string;
        time: number;
    }

    class p_boss_kill implements Ip_boss_kill {
        constructor(p?: Ip_boss_kill);
        public roleId: (number|Long);
        public name: string;
        public time: number;
        public static encode(m: Ip_boss_kill, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_boss_kill;
    }

    interface Ic2s_query_boss_kill_request {
        monsterId: number;
        instanceId: number;
        time: number;
    }

    class c2s_query_boss_kill_request implements Ic2s_query_boss_kill_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_boss_kill_request);
        public monsterId: number;
        public instanceId: number;
        public time: number;
        public static encode(m: Ic2s_query_boss_kill_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_boss_kill_request;
    }

    interface Is2c_boss_kill_reply {
        monsterId: number;
        list?: (Ip_boss_kill[]|null);
    }

    class s2c_boss_kill_reply implements Is2c_boss_kill_reply {
        public static cmd: number;
        constructor(p?: Is2c_boss_kill_reply);
        public monsterId: number;
        public list: Ip_boss_kill[];
        public static encode(m: Is2c_boss_kill_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_boss_kill_reply;
    }

    interface Is2c_instance_result_notify {
        instanceId: number;
        winOrLose: number;
        star: number;
        items?: (Ip_kv_pair[]|null);
        accExp?: (number|Long|null);
        accCoin?: (number|Long|null);
        honor?: (number|null);
        miniGameResult?: (number|null);
        isFirstWin?: (number|null);
    }

    class s2c_instance_result_notify implements Is2c_instance_result_notify {
        public static cmd: number;
        constructor(p?: Is2c_instance_result_notify);
        public instanceId: number;
        public winOrLose: number;
        public star: number;
        public items: Ip_kv_pair[];
        public accExp: (number|Long);
        public accCoin: (number|Long);
        public honor: number;
        public miniGameResult: number;
        public isFirstWin: number;
        public static encode(m: Is2c_instance_result_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_instance_result_notify;
    }

    interface Ic2s_clean_instance_cd_request {
        instanceType: number;
    }

    class c2s_clean_instance_cd_request implements Ic2s_clean_instance_cd_request {
        public static cmd: number;
        constructor(p?: Ic2s_clean_instance_cd_request);
        public instanceType: number;
        public static encode(m: Ic2s_clean_instance_cd_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_clean_instance_cd_request;
    }

    interface Ic2s_vip_buy_instance_times_request {
        instanceType: number;
        buyType?: (number|null);
    }

    class c2s_vip_buy_instance_times_request implements Ic2s_vip_buy_instance_times_request {
        public static cmd: number;
        constructor(p?: Ic2s_vip_buy_instance_times_request);
        public instanceType: number;
        public buyType: number;
        public static encode(m: Ic2s_vip_buy_instance_times_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_vip_buy_instance_times_request;
    }

    interface Ic2s_damage_encourage_request {
        encourageType: number;
    }

    class c2s_damage_encourage_request implements Ic2s_damage_encourage_request {
        public static cmd: number;
        constructor(p?: Ic2s_damage_encourage_request);
        public encourageType: number;
        public static encode(m: Ic2s_damage_encourage_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_damage_encourage_request;
    }

    interface Ic2s_instance_mop_out_request {
        instanceId: number;
    }

    class c2s_instance_mop_out_request implements Ic2s_instance_mop_out_request {
        public static cmd: number;
        constructor(p?: Ic2s_instance_mop_out_request);
        public instanceId: number;
        public static encode(m: Ic2s_instance_mop_out_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_instance_mop_out_request;
    }

    interface Ip_gather_info {
        id: number;
        gatheredCount: number;
        totalCount: number;
        refreshTime: number;
    }

    class p_gather_info implements Ip_gather_info {
        constructor(p?: Ip_gather_info);
        public id: number;
        public gatheredCount: number;
        public totalCount: number;
        public refreshTime: number;
        public static encode(m: Ip_gather_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_gather_info;
    }

    interface Ic2s_gather_list_request {
    }

    class c2s_gather_list_request implements Ic2s_gather_list_request {
        public static cmd: number;
        constructor(p?: Ic2s_gather_list_request);
        public static encode(m: Ic2s_gather_list_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_gather_list_request;
    }

    interface Is2c_gather_list_reply {
        gatherList?: (Ip_gather_info[]|null);
    }

    class s2c_gather_list_reply implements Is2c_gather_list_reply {
        public static cmd: number;
        constructor(p?: Is2c_gather_list_reply);
        public gatherList: Ip_gather_info[];
        public static encode(m: Is2c_gather_list_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_gather_list_reply;
    }

    interface Is2c_gather_info_changed_notify {
        gatherInfo: Ip_gather_info;
    }

    class s2c_gather_info_changed_notify implements Is2c_gather_info_changed_notify {
        public static cmd: number;
        constructor(p?: Is2c_gather_info_changed_notify);
        public gatherInfo: Ip_gather_info;
        public static encode(m: Is2c_gather_info_changed_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_gather_info_changed_notify;
    }

    interface Is2c_instance_mini_game_notify {
        instanceId: number;
        gameData?: (number[]|null);
    }

    class s2c_instance_mini_game_notify implements Is2c_instance_mini_game_notify {
        public static cmd: number;
        constructor(p?: Is2c_instance_mini_game_notify);
        public instanceId: number;
        public gameData: number[];
        public static encode(m: Is2c_instance_mini_game_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_instance_mini_game_notify;
    }

    interface Ic2s_couple_mini_game_choice {
        itemId: number;
    }

    class c2s_couple_mini_game_choice implements Ic2s_couple_mini_game_choice {
        public static cmd: number;
        constructor(p?: Ic2s_couple_mini_game_choice);
        public itemId: number;
        public static encode(m: Ic2s_couple_mini_game_choice, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_couple_mini_game_choice;
    }

    interface Ic2s_ask_buy_couple_instance_time {
    }

    class c2s_ask_buy_couple_instance_time implements Ic2s_ask_buy_couple_instance_time {
        public static cmd: number;
        constructor(p?: Ic2s_ask_buy_couple_instance_time);
        public static encode(m: Ic2s_ask_buy_couple_instance_time, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_ask_buy_couple_instance_time;
    }

    interface Is2c_buy_couple_instance_time_notify {
    }

    class s2c_buy_couple_instance_time_notify implements Is2c_buy_couple_instance_time_notify {
        public static cmd: number;
        constructor(p?: Is2c_buy_couple_instance_time_notify);
        public static encode(m: Is2c_buy_couple_instance_time_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_buy_couple_instance_time_notify;
    }

    interface Ic2s_combine_times_request {
        instanceType: number;
        combineTimes: number;
    }

    class c2s_combine_times_request implements Ic2s_combine_times_request {
        public static cmd: number;
        constructor(p?: Ic2s_combine_times_request);
        public instanceType: number;
        public combineTimes: number;
        public static encode(m: Ic2s_combine_times_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_combine_times_request;
    }

    interface Ic2s_tower_get_reward_request {
    }

    class c2s_tower_get_reward_request implements Ic2s_tower_get_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_tower_get_reward_request);
        public static encode(m: Ic2s_tower_get_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_tower_get_reward_request;
    }

    interface Is2c_first_finish_boss {
        instanceType: number;
    }

    class s2c_first_finish_boss implements Is2c_first_finish_boss {
        public static cmd: number;
        constructor(p?: Is2c_first_finish_boss);
        public instanceType: number;
        public static encode(m: Is2c_first_finish_boss, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_first_finish_boss;
    }

    interface Ic2s_use_boss_revive_card_request {
        id: number;
    }

    class c2s_use_boss_revive_card_request implements Ic2s_use_boss_revive_card_request {
        public static cmd: number;
        constructor(p?: Ic2s_use_boss_revive_card_request);
        public id: number;
        public static encode(m: Ic2s_use_boss_revive_card_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_use_boss_revive_card_request;
    }

    interface Ic2s_enter_limit_boss_request {
    }

    class c2s_enter_limit_boss_request implements Ic2s_enter_limit_boss_request {
        public static cmd: number;
        constructor(p?: Ic2s_enter_limit_boss_request);
        public static encode(m: Ic2s_enter_limit_boss_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_enter_limit_boss_request;
    }

    interface Ic2s_leave_limit_boss_request {
    }

    class c2s_leave_limit_boss_request implements Ic2s_leave_limit_boss_request {
        public static cmd: number;
        constructor(p?: Ic2s_leave_limit_boss_request);
        public static encode(m: Ic2s_leave_limit_boss_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_leave_limit_boss_request;
    }

    interface Is2c_limit_boss_info_notify {
        rankList?: (Ip_limit_boss_info[]|null);
        myRank: Ip_limit_boss_info;
        goldCourageTimes: number;
        coinCourageTimes: number;
    }

    class s2c_limit_boss_info_notify implements Is2c_limit_boss_info_notify {
        public static cmd: number;
        constructor(p?: Is2c_limit_boss_info_notify);
        public rankList: Ip_limit_boss_info[];
        public myRank: Ip_limit_boss_info;
        public goldCourageTimes: number;
        public coinCourageTimes: number;
        public static encode(m: Is2c_limit_boss_info_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_limit_boss_info_notify;
    }

    interface Ip_limit_boss_info {
        rankId: number;
        accDamage: (number|Long);
        roleName: string;
        roleId: number;
    }

    class p_limit_boss_info implements Ip_limit_boss_info {
        constructor(p?: Ip_limit_boss_info);
        public rankId: number;
        public accDamage: (number|Long);
        public roleName: string;
        public roleId: number;
        public static encode(m: Ip_limit_boss_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_limit_boss_info;
    }

    interface Ic2s_limit_boss_encourage_request {
        encourageType: number;
    }

    class c2s_limit_boss_encourage_request implements Ic2s_limit_boss_encourage_request {
        public static cmd: number;
        constructor(p?: Ic2s_limit_boss_encourage_request);
        public encourageType: number;
        public static encode(m: Ic2s_limit_boss_encourage_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_limit_boss_encourage_request;
    }

    interface Is2c_limit_boss_result_notify {
        rankReward?: (Iitem_simple[]|null);
        killReward?: (Iitem_simple[]|null);
        rankList?: (Ip_limit_boss_info[]|null);
        myRank: Ip_limit_boss_info;
    }

    class s2c_limit_boss_result_notify implements Is2c_limit_boss_result_notify {
        public static cmd: number;
        constructor(p?: Is2c_limit_boss_result_notify);
        public rankReward: Iitem_simple[];
        public killReward: Iitem_simple[];
        public rankList: Ip_limit_boss_info[];
        public myRank: Ip_limit_boss_info;
        public static encode(m: Is2c_limit_boss_result_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_limit_boss_result_notify;
    }

    interface Ic2s_activity_info {
    }

    class c2s_activity_info implements Ic2s_activity_info {
        public static cmd: number;
        constructor(p?: Ic2s_activity_info);
        public static encode(m: Ic2s_activity_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_activity_info;
    }

    interface Is2c_activity_info {
        points: number;
        progress?: (Ip_activity_progress[]|null);
        rwLog?: (Ip_activity_rw_log[]|null);
        getBackInfo?: (Ip_activity_get_back[]|null);
        offlineSec: number;
        lv: number;
        exp: number;
        show: number;
    }

    class s2c_activity_info implements Is2c_activity_info {
        public static cmd: number;
        constructor(p?: Is2c_activity_info);
        public points: number;
        public progress: Ip_activity_progress[];
        public rwLog: Ip_activity_rw_log[];
        public getBackInfo: Ip_activity_get_back[];
        public offlineSec: number;
        public lv: number;
        public exp: number;
        public show: number;
        public static encode(m: Is2c_activity_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_activity_info;
    }

    interface Ip_activity_progress {
        id: number;
        num: number;
    }

    class p_activity_progress implements Ip_activity_progress {
        constructor(p?: Ip_activity_progress);
        public id: number;
        public num: number;
        public static encode(m: Ip_activity_progress, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_activity_progress;
    }

    interface Ip_activity_rw_log {
        points: number;
    }

    class p_activity_rw_log implements Ip_activity_rw_log {
        constructor(p?: Ip_activity_rw_log);
        public points: number;
        public static encode(m: Ip_activity_rw_log, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_activity_rw_log;
    }

    interface Ip_activity_get_back {
        id: number;
        finishNum: number;
        totalNum: number;
        getExtraNum: number;
        totalExtraNum: number;
        defaultRw?: (Ip_activity_rw[]|null);
        goldDefaultRw?: (Ip_activity_rw[]|null);
        extraRw?: (Ip_activity_rw[]|null);
    }

    class p_activity_get_back implements Ip_activity_get_back {
        constructor(p?: Ip_activity_get_back);
        public id: number;
        public finishNum: number;
        public totalNum: number;
        public getExtraNum: number;
        public totalExtraNum: number;
        public defaultRw: Ip_activity_rw[];
        public goldDefaultRw: Ip_activity_rw[];
        public extraRw: Ip_activity_rw[];
        public static encode(m: Ip_activity_get_back, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_activity_get_back;
    }

    interface Ip_activity_rw {
        itemId: number;
        itemNum: (number|Long);
        bound: number;
    }

    class p_activity_rw implements Ip_activity_rw {
        constructor(p?: Ip_activity_rw);
        public itemId: number;
        public itemNum: (number|Long);
        public bound: number;
        public static encode(m: Ip_activity_rw, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_activity_rw;
    }

    interface Ip_activity_offline {
        id: number;
        num: number;
        spNum: number;
    }

    class p_activity_offline implements Ip_activity_offline {
        constructor(p?: Ip_activity_offline);
        public id: number;
        public num: number;
        public spNum: number;
        public static encode(m: Ip_activity_offline, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_activity_offline;
    }

    interface Is2c_activity_change {
        points: number;
        exp: number;
        progress?: (Ip_activity_progress[]|null);
    }

    class s2c_activity_change implements Is2c_activity_change {
        public static cmd: number;
        constructor(p?: Is2c_activity_change);
        public points: number;
        public exp: number;
        public progress: Ip_activity_progress[];
        public static encode(m: Is2c_activity_change, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_activity_change;
    }

    interface Is2c_activity_offline_sec_change {
        time: number;
    }

    class s2c_activity_offline_sec_change implements Is2c_activity_offline_sec_change {
        public static cmd: number;
        constructor(p?: Is2c_activity_offline_sec_change);
        public time: number;
        public static encode(m: Is2c_activity_offline_sec_change, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_activity_offline_sec_change;
    }

    interface Ic2s_fetch_activity_points_rw {
        points: number;
    }

    class c2s_fetch_activity_points_rw implements Ic2s_fetch_activity_points_rw {
        public static cmd: number;
        constructor(p?: Ic2s_fetch_activity_points_rw);
        public points: number;
        public static encode(m: Ic2s_fetch_activity_points_rw, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_fetch_activity_points_rw;
    }

    interface Is2c_fetch_activity_points_rw {
        rwLog?: (Ip_activity_rw_log[]|null);
    }

    class s2c_fetch_activity_points_rw implements Is2c_fetch_activity_points_rw {
        public static cmd: number;
        constructor(p?: Is2c_fetch_activity_points_rw);
        public rwLog: Ip_activity_rw_log[];
        public static encode(m: Is2c_fetch_activity_points_rw, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_fetch_activity_points_rw;
    }

    interface Ic2s_fetch_activity_offline_rw {
        id: number;
        type: number;
        num: number;
    }

    class c2s_fetch_activity_offline_rw implements Ic2s_fetch_activity_offline_rw {
        public static cmd: number;
        constructor(p?: Ic2s_fetch_activity_offline_rw);
        public id: number;
        public type: number;
        public num: number;
        public static encode(m: Ic2s_fetch_activity_offline_rw, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_fetch_activity_offline_rw;
    }

    interface Is2c_fetch_activity_offline_rw {
        getBackInfo?: (Ip_activity_get_back[]|null);
    }

    class s2c_fetch_activity_offline_rw implements Is2c_fetch_activity_offline_rw {
        public static cmd: number;
        constructor(p?: Is2c_fetch_activity_offline_rw);
        public getBackInfo: Ip_activity_get_back[];
        public static encode(m: Is2c_fetch_activity_offline_rw, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_fetch_activity_offline_rw;
    }

    interface Ic2s_up_activity_lv {
    }

    class c2s_up_activity_lv implements Ic2s_up_activity_lv {
        public static cmd: number;
        constructor(p?: Ic2s_up_activity_lv);
        public static encode(m: Ic2s_up_activity_lv, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_up_activity_lv;
    }

    interface Is2c_up_activity_lv {
        lv: number;
        exp: number;
    }

    class s2c_up_activity_lv implements Is2c_up_activity_lv {
        public static cmd: number;
        constructor(p?: Is2c_up_activity_lv);
        public lv: number;
        public exp: number;
        public static encode(m: Is2c_up_activity_lv, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_up_activity_lv;
    }

    interface Ic2s_show_activity_model {
        show: number;
    }

    class c2s_show_activity_model implements Ic2s_show_activity_model {
        public static cmd: number;
        constructor(p?: Ic2s_show_activity_model);
        public show: number;
        public static encode(m: Ic2s_show_activity_model, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_show_activity_model;
    }

    interface Is2c_show_activity_model {
        show: number;
        showLv: number;
    }

    class s2c_show_activity_model implements Is2c_show_activity_model {
        public static cmd: number;
        constructor(p?: Is2c_show_activity_model);
        public show: number;
        public showLv: number;
        public static encode(m: Is2c_show_activity_model, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_show_activity_model;
    }

    interface Ip_offline_item_info {
        itemId: number;
        count: number;
        devourCount: number;
    }

    class p_offline_item_info implements Ip_offline_item_info {
        constructor(p?: Ip_offline_item_info);
        public itemId: number;
        public count: number;
        public devourCount: number;
        public static encode(m: Ip_offline_item_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_offline_item_info;
    }

    interface Is2c_offline_practice_reward_notify {
        practiceSecs: number;
        leftSecs: number;
        oldLevel: number;
        newLevel: number;
        roleExp: (number|Long);
        petExp: (number|Long);
        list?: (Ip_offline_item_info[]|null);
    }

    class s2c_offline_practice_reward_notify implements Is2c_offline_practice_reward_notify {
        public static cmd: number;
        constructor(p?: Is2c_offline_practice_reward_notify);
        public practiceSecs: number;
        public leftSecs: number;
        public oldLevel: number;
        public newLevel: number;
        public roleExp: (number|Long);
        public petExp: (number|Long);
        public list: Ip_offline_item_info[];
        public static encode(m: Is2c_offline_practice_reward_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_offline_practice_reward_notify;
    }

    interface Is2c_offline_reward_notify {
        practiceSecs: number;
        leftSecs: number;
        oldLevel: number;
        newLevel: number;
        roleExp: (number|Long);
        petExp: (number|Long);
        list?: (Ip_offline_item_info[]|null);
        type: number;
    }

    class s2c_offline_reward_notify implements Is2c_offline_reward_notify {
        public static cmd: number;
        constructor(p?: Is2c_offline_reward_notify);
        public practiceSecs: number;
        public leftSecs: number;
        public oldLevel: number;
        public newLevel: number;
        public roleExp: (number|Long);
        public petExp: (number|Long);
        public list: Ip_offline_item_info[];
        public type: number;
        public static encode(m: Is2c_offline_reward_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_offline_reward_notify;
    }

    interface Ic2s_offline_practice_reward_request {
    }

    class c2s_offline_practice_reward_request implements Ic2s_offline_practice_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_offline_practice_reward_request);
        public static encode(m: Ic2s_offline_practice_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_offline_practice_reward_request;
    }

    interface Ip_each_day_activity {
        id: number;
        openType: number;
        status: number;
        timeList?: (Ip_time[]|null);
    }

    class p_each_day_activity implements Ip_each_day_activity {
        constructor(p?: Ip_each_day_activity);
        public id: number;
        public openType: number;
        public status: number;
        public timeList: Ip_time[];
        public static encode(m: Ip_each_day_activity, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_each_day_activity;
    }

    interface Ip_time {
        startTime: number;
        endTime: number;
    }

    class p_time implements Ip_time {
        constructor(p?: Ip_time);
        public startTime: number;
        public endTime: number;
        public static encode(m: Ip_time, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_time;
    }

    interface Is2c_each_day_activity_info {
        activityInfo?: (Ip_each_day_activity[]|null);
    }

    class s2c_each_day_activity_info implements Is2c_each_day_activity_info {
        public static cmd: number;
        constructor(p?: Is2c_each_day_activity_info);
        public activityInfo: Ip_each_day_activity[];
        public static encode(m: Is2c_each_day_activity_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_each_day_activity_info;
    }

    interface Is2c_each_day_activity_change_info {
        activityInfo?: (Ip_each_day_activity[]|null);
    }

    class s2c_each_day_activity_change_info implements Is2c_each_day_activity_change_info {
        public static cmd: number;
        constructor(p?: Is2c_each_day_activity_change_info);
        public activityInfo: Ip_each_day_activity[];
        public static encode(m: Is2c_each_day_activity_change_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_each_day_activity_change_info;
    }

    interface Ip_date_time_activity {
        id: number;
        status: number;
        startTime: number;
        endTime: number;
    }

    class p_date_time_activity implements Ip_date_time_activity {
        constructor(p?: Ip_date_time_activity);
        public id: number;
        public status: number;
        public startTime: number;
        public endTime: number;
        public static encode(m: Ip_date_time_activity, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_date_time_activity;
    }

    interface Is2c_date_time_activity_change_info {
        activityInfo?: (Ip_date_time_activity[]|null);
    }

    class s2c_date_time_activity_change_info implements Is2c_date_time_activity_change_info {
        public static cmd: number;
        constructor(p?: Is2c_date_time_activity_change_info);
        public activityInfo: Ip_date_time_activity[];
        public static encode(m: Is2c_date_time_activity_change_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_date_time_activity_change_info;
    }

    interface Is2c_date_time_activity_info {
        activityInfo?: (Ip_date_time_activity[]|null);
    }

    class s2c_date_time_activity_info implements Is2c_date_time_activity_info {
        public static cmd: number;
        constructor(p?: Is2c_date_time_activity_info);
        public activityInfo: Ip_date_time_activity[];
        public static encode(m: Is2c_date_time_activity_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_date_time_activity_info;
    }

    interface Ip_dress_up {
        type: number;
        stone: number;
        level: number;
        change?: (Ip_change_dress_up[]|null);
        combat: number;
        image: number;
        effects?: (Ip_dress_up_attr[]|null);
    }

    class p_dress_up implements Ip_dress_up {
        constructor(p?: Ip_dress_up);
        public type: number;
        public stone: number;
        public level: number;
        public change: Ip_change_dress_up[];
        public combat: number;
        public image: number;
        public effects: Ip_dress_up_attr[];
        public static encode(m: Ip_dress_up, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_dress_up;
    }

    interface Ip_change_dress_up {
        typeId: number;
        rank: number;
        combat: number;
        effects?: (Ip_dress_up_attr[]|null);
        expireTime: number;
    }

    class p_change_dress_up implements Ip_change_dress_up {
        constructor(p?: Ip_change_dress_up);
        public typeId: number;
        public rank: number;
        public combat: number;
        public effects: Ip_dress_up_attr[];
        public expireTime: number;
        public static encode(m: Ip_change_dress_up, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_change_dress_up;
    }

    interface Ip_dress_up_attr {
        name: string;
        val: number;
    }

    class p_dress_up_attr implements Ip_dress_up_attr {
        constructor(p?: Ip_dress_up_attr);
        public name: string;
        public val: number;
        public static encode(m: Ip_dress_up_attr, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_dress_up_attr;
    }

    interface Ic2s_dress_up_info_request {
    }

    class c2s_dress_up_info_request implements Ic2s_dress_up_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_dress_up_info_request);
        public static encode(m: Ic2s_dress_up_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_dress_up_info_request;
    }

    interface Is2c_dress_up_info_reply {
        clothesDressup: Ip_dress_up;
        weaponDressup: Ip_dress_up;
        lightDressup: Ip_dress_up;
        bubbleDressup: Ip_dress_up;
        frameDressup: Ip_dress_up;
        headDressup: Ip_dress_up;
        bgDressup: Ip_dress_up;
        lockList?: (Ip_lock_item[]|null);
    }

    class s2c_dress_up_info_reply implements Is2c_dress_up_info_reply {
        public static cmd: number;
        constructor(p?: Is2c_dress_up_info_reply);
        public clothesDressup: Ip_dress_up;
        public weaponDressup: Ip_dress_up;
        public lightDressup: Ip_dress_up;
        public bubbleDressup: Ip_dress_up;
        public frameDressup: Ip_dress_up;
        public headDressup: Ip_dress_up;
        public bgDressup: Ip_dress_up;
        public lockList: Ip_lock_item[];
        public static encode(m: Is2c_dress_up_info_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_dress_up_info_reply;
    }

    interface Is2c_dress_up_info_change_notify {
        dressup: Ip_dress_up;
    }

    class s2c_dress_up_info_change_notify implements Is2c_dress_up_info_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_dress_up_info_change_notify);
        public dressup: Ip_dress_up;
        public static encode(m: Is2c_dress_up_info_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_dress_up_info_change_notify;
    }

    interface Ic2s_dress_up_increase_level_request {
        type: number;
    }

    class c2s_dress_up_increase_level_request implements Ic2s_dress_up_increase_level_request {
        public static cmd: number;
        constructor(p?: Ic2s_dress_up_increase_level_request);
        public type: number;
        public static encode(m: Ic2s_dress_up_increase_level_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_dress_up_increase_level_request;
    }

    interface Ic2s_change_dress_up_activate_request {
        typeId: number;
    }

    class c2s_change_dress_up_activate_request implements Ic2s_change_dress_up_activate_request {
        public static cmd: number;
        constructor(p?: Ic2s_change_dress_up_activate_request);
        public typeId: number;
        public static encode(m: Ic2s_change_dress_up_activate_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_change_dress_up_activate_request;
    }

    interface Ip_lock_item {
        itemId: number;
        uniqId: (number|Long);
    }

    class p_lock_item implements Ip_lock_item {
        constructor(p?: Ip_lock_item);
        public itemId: number;
        public uniqId: (number|Long);
        public static encode(m: Ip_lock_item, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_lock_item;
    }

    interface Ic2s_dress_up_lock_unlock_request {
        type: number;
        lockList?: (Ip_lock_item[]|null);
    }

    class c2s_dress_up_lock_unlock_request implements Ic2s_dress_up_lock_unlock_request {
        public static cmd: number;
        constructor(p?: Ic2s_dress_up_lock_unlock_request);
        public type: number;
        public lockList: Ip_lock_item[];
        public static encode(m: Ic2s_dress_up_lock_unlock_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_dress_up_lock_unlock_request;
    }

    interface Is2c_dress_up_lock_unlock_reply {
        lockList?: (Ip_lock_item[]|null);
    }

    class s2c_dress_up_lock_unlock_reply implements Is2c_dress_up_lock_unlock_reply {
        public static cmd: number;
        constructor(p?: Is2c_dress_up_lock_unlock_reply);
        public lockList: Ip_lock_item[];
        public static encode(m: Is2c_dress_up_lock_unlock_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_dress_up_lock_unlock_reply;
    }

    interface Ic2s_dress_up_image_in_scene {
        typeId: number;
        type: number;
    }

    class c2s_dress_up_image_in_scene implements Ic2s_dress_up_image_in_scene {
        public static cmd: number;
        constructor(p?: Ic2s_dress_up_image_in_scene);
        public typeId: number;
        public type: number;
        public static encode(m: Ic2s_dress_up_image_in_scene, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_dress_up_image_in_scene;
    }

    interface Ip_dress_up_timeout {
        type: number;
        typeId: number;
    }

    class p_dress_up_timeout implements Ip_dress_up_timeout {
        constructor(p?: Ip_dress_up_timeout);
        public type: number;
        public typeId: number;
        public static encode(m: Ip_dress_up_timeout, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_dress_up_timeout;
    }

    interface Is2c_dress_up_timeout {
        list?: (Ip_dress_up_timeout[]|null);
    }

    class s2c_dress_up_timeout implements Is2c_dress_up_timeout {
        public static cmd: number;
        constructor(p?: Is2c_dress_up_timeout);
        public list: Ip_dress_up_timeout[];
        public static encode(m: Is2c_dress_up_timeout, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_dress_up_timeout;
    }

    interface Ic2s_welfare_info_request {
    }

    class c2s_welfare_info_request implements Ic2s_welfare_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_welfare_info_request);
        public static encode(m: Ic2s_welfare_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_welfare_info_request;
    }

    interface Is2c_welfare_info_reply {
        signInDays?: (number[]|null);
        accSignInReceivedReward?: (number[]|null);
        sevenLoginDays: number;
        sevenLoginReceivedReward?: (number[]|null);
        levelSpurtReceivedReward?: (number[]|null);
        vipLevelSpurtReceivedReward?: (number[]|null);
    }

    class s2c_welfare_info_reply implements Is2c_welfare_info_reply {
        public static cmd: number;
        constructor(p?: Is2c_welfare_info_reply);
        public signInDays: number[];
        public accSignInReceivedReward: number[];
        public sevenLoginDays: number;
        public sevenLoginReceivedReward: number[];
        public levelSpurtReceivedReward: number[];
        public vipLevelSpurtReceivedReward: number[];
        public static encode(m: Is2c_welfare_info_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_welfare_info_reply;
    }

    interface Ic2s_sign_in_request {
        type: number;
    }

    class c2s_sign_in_request implements Ic2s_sign_in_request {
        public static cmd: number;
        constructor(p?: Ic2s_sign_in_request);
        public type: number;
        public static encode(m: Ic2s_sign_in_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_sign_in_request;
    }

    interface Ic2s_fetch_acc_sign_reward_request {
        days: number;
    }

    class c2s_fetch_acc_sign_reward_request implements Ic2s_fetch_acc_sign_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_fetch_acc_sign_reward_request);
        public days: number;
        public static encode(m: Ic2s_fetch_acc_sign_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_fetch_acc_sign_reward_request;
    }

    interface Ic2s_fetch_seven_login_reward_request {
        days: number;
    }

    class c2s_fetch_seven_login_reward_request implements Ic2s_fetch_seven_login_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_fetch_seven_login_reward_request);
        public days: number;
        public static encode(m: Ic2s_fetch_seven_login_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_fetch_seven_login_reward_request;
    }

    interface Is2c_level_spurt_limit_info_notify {
        list?: (Ip_kv_pair[]|null);
    }

    class s2c_level_spurt_limit_info_notify implements Is2c_level_spurt_limit_info_notify {
        public static cmd: number;
        constructor(p?: Is2c_level_spurt_limit_info_notify);
        public list: Ip_kv_pair[];
        public static encode(m: Is2c_level_spurt_limit_info_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_level_spurt_limit_info_notify;
    }

    interface Ic2s_fetch_level_spurt_gift_request {
        level: number;
        type: number;
    }

    class c2s_fetch_level_spurt_gift_request implements Ic2s_fetch_level_spurt_gift_request {
        public static cmd: number;
        constructor(p?: Ic2s_fetch_level_spurt_gift_request);
        public level: number;
        public type: number;
        public static encode(m: Ic2s_fetch_level_spurt_gift_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_fetch_level_spurt_gift_request;
    }

    interface Ic2s_fetch_wechat_bookmark_gift_request {
    }

    class c2s_fetch_wechat_bookmark_gift_request implements Ic2s_fetch_wechat_bookmark_gift_request {
        public static cmd: number;
        constructor(p?: Ic2s_fetch_wechat_bookmark_gift_request);
        public static encode(m: Ic2s_fetch_wechat_bookmark_gift_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_fetch_wechat_bookmark_gift_request;
    }

    interface Is2c_fetch_wechat_bookmark_gift_reply {
        fetchFlag: number;
    }

    class s2c_fetch_wechat_bookmark_gift_reply implements Is2c_fetch_wechat_bookmark_gift_reply {
        public static cmd: number;
        constructor(p?: Is2c_fetch_wechat_bookmark_gift_reply);
        public fetchFlag: number;
        public static encode(m: Is2c_fetch_wechat_bookmark_gift_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_fetch_wechat_bookmark_gift_reply;
    }

    interface Ic2s_is_fetch_wechat_bookmark_gift_request {
    }

    class c2s_is_fetch_wechat_bookmark_gift_request implements Ic2s_is_fetch_wechat_bookmark_gift_request {
        public static cmd: number;
        constructor(p?: Ic2s_is_fetch_wechat_bookmark_gift_request);
        public static encode(m: Ic2s_is_fetch_wechat_bookmark_gift_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_is_fetch_wechat_bookmark_gift_request;
    }

    interface Is2c_is_fetch_wechat_bookmark_gift_request {
        fetchFlag: number;
        firstFlag: number;
    }

    class s2c_is_fetch_wechat_bookmark_gift_request implements Is2c_is_fetch_wechat_bookmark_gift_request {
        public static cmd: number;
        constructor(p?: Is2c_is_fetch_wechat_bookmark_gift_request);
        public fetchFlag: number;
        public firstFlag: number;
        public static encode(m: Is2c_is_fetch_wechat_bookmark_gift_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_is_fetch_wechat_bookmark_gift_request;
    }

    interface Igeneral_gang_info_p {
        gangId: (number|Long);
        rank: number;
        gangName: string;
        gangLevel: number;
        totalCombat: number;
        leaderName: string;
        memberCount: number;
        competitionLevel: number;
    }

    class general_gang_info_p implements Igeneral_gang_info_p {
        constructor(p?: Igeneral_gang_info_p);
        public gangId: (number|Long);
        public rank: number;
        public gangName: string;
        public gangLevel: number;
        public totalCombat: number;
        public leaderName: string;
        public memberCount: number;
        public competitionLevel: number;
        public static encode(m: Igeneral_gang_info_p, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): general_gang_info_p;
    }

    interface Imember_info_p {
        roleId: (number|Long);
        roleName: string;
        level: number;
        job: number;
        contribution: number;
        combat: number;
        isOnline: number;
        lastOnlineTime: (number|Long);
        contributionTot: (number|Long);
        vipLevel?: (number|null);
    }

    class member_info_p implements Imember_info_p {
        constructor(p?: Imember_info_p);
        public roleId: (number|Long);
        public roleName: string;
        public level: number;
        public job: number;
        public contribution: number;
        public combat: number;
        public isOnline: number;
        public lastOnlineTime: (number|Long);
        public contributionTot: (number|Long);
        public vipLevel: number;
        public static encode(m: Imember_info_p, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): member_info_p;
    }

    interface Ic2s_query_gang_request {
        page: number;
    }

    class c2s_query_gang_request implements Ic2s_query_gang_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_gang_request);
        public page: number;
        public static encode(m: Ic2s_query_gang_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_gang_request;
    }

    interface Is2c_query_gang_reply {
        gangInfo?: (Igeneral_gang_info_p[]|null);
        haveAppliedGangId?: ((number|Long)[]|null);
    }

    class s2c_query_gang_reply implements Is2c_query_gang_reply {
        public static cmd: number;
        constructor(p?: Is2c_query_gang_reply);
        public gangInfo: Igeneral_gang_info_p[];
        public haveAppliedGangId: (number|Long)[];
        public static encode(m: Is2c_query_gang_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_gang_reply;
    }

    interface Ic2s_search_gang_request {
        gangName: string;
    }

    class c2s_search_gang_request implements Ic2s_search_gang_request {
        public static cmd: number;
        constructor(p?: Ic2s_search_gang_request);
        public gangName: string;
        public static encode(m: Ic2s_search_gang_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_search_gang_request;
    }

    interface Is2c_search_gang_reply {
        gangInfo?: (Igeneral_gang_info_p[]|null);
        haveAppliedGangId?: ((number|Long)[]|null);
    }

    class s2c_search_gang_reply implements Is2c_search_gang_reply {
        public static cmd: number;
        constructor(p?: Is2c_search_gang_reply);
        public gangInfo: Igeneral_gang_info_p[];
        public haveAppliedGangId: (number|Long)[];
        public static encode(m: Is2c_search_gang_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_search_gang_reply;
    }

    interface Iapplicant_info {
        roleId: (number|Long);
        name: string;
        level: number;
        vipLevel: number;
        combat: number;
    }

    class applicant_info implements Iapplicant_info {
        constructor(p?: Iapplicant_info);
        public roleId: (number|Long);
        public name: string;
        public level: number;
        public vipLevel: number;
        public combat: number;
        public static encode(m: Iapplicant_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): applicant_info;
    }

    interface Ic2s_query_own_gang_request {
    }

    class c2s_query_own_gang_request implements Ic2s_query_own_gang_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_own_gang_request);
        public static encode(m: Ic2s_query_own_gang_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_own_gang_request;
    }

    interface Is2c_query_own_gang_reply {
        gangId: (number|Long);
        gangName: string;
        gangLevel: number;
        leaderId: (number|Long);
        leaderName: string;
        memberCount: number;
        competition: number;
        totalCombat: (number|Long);
        fund: number;
        board: string;
        members?: (Imember_info_p[]|null);
        applicants?: (Iapplicant_info[]|null);
        isAutoAccept: number;
        levelLimit: number;
        combatLimit: number;
        isReceivedWelfare: number;
    }

    class s2c_query_own_gang_reply implements Is2c_query_own_gang_reply {
        public static cmd: number;
        constructor(p?: Is2c_query_own_gang_reply);
        public gangId: (number|Long);
        public gangName: string;
        public gangLevel: number;
        public leaderId: (number|Long);
        public leaderName: string;
        public memberCount: number;
        public competition: number;
        public totalCombat: (number|Long);
        public fund: number;
        public board: string;
        public members: Imember_info_p[];
        public applicants: Iapplicant_info[];
        public isAutoAccept: number;
        public levelLimit: number;
        public combatLimit: number;
        public isReceivedWelfare: number;
        public static encode(m: Is2c_query_own_gang_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_own_gang_reply;
    }

    interface Ic2s_create_gang_request {
        gangName: string;
    }

    class c2s_create_gang_request implements Ic2s_create_gang_request {
        public static cmd: number;
        constructor(p?: Ic2s_create_gang_request);
        public gangName: string;
        public static encode(m: Ic2s_create_gang_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_create_gang_request;
    }

    interface Ic2s_change_gang_condition_request {
        gangId: (number|Long);
        levelLimit: number;
        combatLimit: number;
        isAuto: number;
    }

    class c2s_change_gang_condition_request implements Ic2s_change_gang_condition_request {
        public static cmd: number;
        constructor(p?: Ic2s_change_gang_condition_request);
        public gangId: (number|Long);
        public levelLimit: number;
        public combatLimit: number;
        public isAuto: number;
        public static encode(m: Ic2s_change_gang_condition_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_change_gang_condition_request;
    }

    interface Ic2s_apply_gang_request {
        gangIds?: ((number|Long)[]|null);
    }

    class c2s_apply_gang_request implements Ic2s_apply_gang_request {
        public static cmd: number;
        constructor(p?: Ic2s_apply_gang_request);
        public gangIds: (number|Long)[];
        public static encode(m: Ic2s_apply_gang_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_apply_gang_request;
    }

    interface Is2c_apply_gang_reply {
        isAccepted: number;
        appliedGangIds?: ((number|Long)[]|null);
    }

    class s2c_apply_gang_reply implements Is2c_apply_gang_reply {
        public static cmd: number;
        constructor(p?: Is2c_apply_gang_reply);
        public isAccepted: number;
        public appliedGangIds: (number|Long)[];
        public static encode(m: Is2c_apply_gang_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_apply_gang_reply;
    }

    interface Is2c_apply_fail_notify {
        reason: number;
        extra: number;
    }

    class s2c_apply_fail_notify implements Is2c_apply_fail_notify {
        public static cmd: number;
        constructor(p?: Is2c_apply_fail_notify);
        public reason: number;
        public extra: number;
        public static encode(m: Is2c_apply_fail_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_apply_fail_notify;
    }

    interface Is2c_have_applicant_notify {
    }

    class s2c_have_applicant_notify implements Is2c_have_applicant_notify {
        public static cmd: number;
        constructor(p?: Is2c_have_applicant_notify);
        public static encode(m: Is2c_have_applicant_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_have_applicant_notify;
    }

    interface Ic2s_accept_gang_request {
        gangId: (number|Long);
        applicant: (number|Long);
    }

    class c2s_accept_gang_request implements Ic2s_accept_gang_request {
        public static cmd: number;
        constructor(p?: Ic2s_accept_gang_request);
        public gangId: (number|Long);
        public applicant: (number|Long);
        public static encode(m: Ic2s_accept_gang_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_accept_gang_request;
    }

    interface Ic2s_accept_all_gang_request {
        gangId: (number|Long);
    }

    class c2s_accept_all_gang_request implements Ic2s_accept_all_gang_request {
        public static cmd: number;
        constructor(p?: Ic2s_accept_all_gang_request);
        public gangId: (number|Long);
        public static encode(m: Ic2s_accept_all_gang_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_accept_all_gang_request;
    }

    interface Is2c_accepted_notify {
        gangName: string;
    }

    class s2c_accepted_notify implements Is2c_accepted_notify {
        public static cmd: number;
        constructor(p?: Is2c_accepted_notify);
        public gangName: string;
        public static encode(m: Is2c_accepted_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_accepted_notify;
    }

    interface Ic2s_refuse_gang_request {
        gangId: (number|Long);
        applicant: (number|Long);
    }

    class c2s_refuse_gang_request implements Ic2s_refuse_gang_request {
        public static cmd: number;
        constructor(p?: Ic2s_refuse_gang_request);
        public gangId: (number|Long);
        public applicant: (number|Long);
        public static encode(m: Ic2s_refuse_gang_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_refuse_gang_request;
    }

    interface Is2c_refused_notify {
        gangName: string;
    }

    class s2c_refused_notify implements Is2c_refused_notify {
        public static cmd: number;
        constructor(p?: Is2c_refused_notify);
        public gangName: string;
        public static encode(m: Is2c_refused_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_refused_notify;
    }

    interface Ic2s_refuse_all_gang_request {
        gangId: (number|Long);
    }

    class c2s_refuse_all_gang_request implements Ic2s_refuse_all_gang_request {
        public static cmd: number;
        constructor(p?: Ic2s_refuse_all_gang_request);
        public gangId: (number|Long);
        public static encode(m: Ic2s_refuse_all_gang_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_refuse_all_gang_request;
    }

    interface Ic2s_appoint_gang_request {
        gangId: (number|Long);
        roleId: (number|Long);
        jobId: number;
    }

    class c2s_appoint_gang_request implements Ic2s_appoint_gang_request {
        public static cmd: number;
        constructor(p?: Ic2s_appoint_gang_request);
        public gangId: (number|Long);
        public roleId: (number|Long);
        public jobId: number;
        public static encode(m: Ic2s_appoint_gang_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_appoint_gang_request;
    }

    interface Ic2s_kick_out_gang_request {
        gangId: (number|Long);
        roleId: (number|Long);
    }

    class c2s_kick_out_gang_request implements Ic2s_kick_out_gang_request {
        public static cmd: number;
        constructor(p?: Ic2s_kick_out_gang_request);
        public gangId: (number|Long);
        public roleId: (number|Long);
        public static encode(m: Ic2s_kick_out_gang_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_kick_out_gang_request;
    }

    interface Is2c_kicked_out_notify {
    }

    class s2c_kicked_out_notify implements Is2c_kicked_out_notify {
        public static cmd: number;
        constructor(p?: Is2c_kicked_out_notify);
        public static encode(m: Is2c_kicked_out_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_kicked_out_notify;
    }

    interface Ic2s_change_leader_request {
        gangId: (number|Long);
        roleId: (number|Long);
    }

    class c2s_change_leader_request implements Ic2s_change_leader_request {
        public static cmd: number;
        constructor(p?: Ic2s_change_leader_request);
        public gangId: (number|Long);
        public roleId: (number|Long);
        public static encode(m: Ic2s_change_leader_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_change_leader_request;
    }

    interface Ic2s_change_gang_board_request {
        gangId: (number|Long);
        board: string;
    }

    class c2s_change_gang_board_request implements Ic2s_change_gang_board_request {
        public static cmd: number;
        constructor(p?: Ic2s_change_gang_board_request);
        public gangId: (number|Long);
        public board: string;
        public static encode(m: Ic2s_change_gang_board_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_change_gang_board_request;
    }

    interface Ic2s_leave_gang_request {
        gangId: (number|Long);
    }

    class c2s_leave_gang_request implements Ic2s_leave_gang_request {
        public static cmd: number;
        constructor(p?: Ic2s_leave_gang_request);
        public gangId: (number|Long);
        public static encode(m: Ic2s_leave_gang_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_leave_gang_request;
    }

    interface Ic2s_upgrade_gang_request {
        gangId: (number|Long);
    }

    class c2s_upgrade_gang_request implements Ic2s_upgrade_gang_request {
        public static cmd: number;
        constructor(p?: Ic2s_upgrade_gang_request);
        public gangId: (number|Long);
        public static encode(m: Ic2s_upgrade_gang_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_upgrade_gang_request;
    }

    interface Ic2s_receive_gang_welfare_request {
    }

    class c2s_receive_gang_welfare_request implements Ic2s_receive_gang_welfare_request {
        public static cmd: number;
        constructor(p?: Ic2s_receive_gang_welfare_request);
        public static encode(m: Ic2s_receive_gang_welfare_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_receive_gang_welfare_request;
    }

    interface Ic2s_invite_join_gang_request {
        target: (number|Long);
    }

    class c2s_invite_join_gang_request implements Ic2s_invite_join_gang_request {
        public static cmd: number;
        constructor(p?: Ic2s_invite_join_gang_request);
        public target: (number|Long);
        public static encode(m: Ic2s_invite_join_gang_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_invite_join_gang_request;
    }

    interface Is2c_invite_join_gang_notify {
        roleName: string;
        gangId: (number|Long);
        gangName: string;
    }

    class s2c_invite_join_gang_notify implements Is2c_invite_join_gang_notify {
        public static cmd: number;
        constructor(p?: Is2c_invite_join_gang_notify);
        public roleName: string;
        public gangId: (number|Long);
        public gangName: string;
        public static encode(m: Is2c_invite_join_gang_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_invite_join_gang_notify;
    }

    interface Ip_skill_pairs {
        skillId: number;
        skillLevel: number;
    }

    class p_skill_pairs implements Ip_skill_pairs {
        constructor(p?: Ip_skill_pairs);
        public skillId: number;
        public skillLevel: number;
        public static encode(m: Ip_skill_pairs, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_skill_pairs;
    }

    interface Ic2s_query_gang_skill_request {
    }

    class c2s_query_gang_skill_request implements Ic2s_query_gang_skill_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_gang_skill_request);
        public static encode(m: Ic2s_query_gang_skill_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_gang_skill_request;
    }

    interface Is2c_query_gang_skill_reply {
        info?: (Ip_skill_pairs[]|null);
    }

    class s2c_query_gang_skill_reply implements Is2c_query_gang_skill_reply {
        public static cmd: number;
        constructor(p?: Is2c_query_gang_skill_reply);
        public info: Ip_skill_pairs[];
        public static encode(m: Is2c_query_gang_skill_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_gang_skill_reply;
    }

    interface Ic2s_learn_gang_skill_request {
        skillId: number;
    }

    class c2s_learn_gang_skill_request implements Ic2s_learn_gang_skill_request {
        public static cmd: number;
        constructor(p?: Ic2s_learn_gang_skill_request);
        public skillId: number;
        public static encode(m: Ic2s_learn_gang_skill_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_learn_gang_skill_request;
    }

    interface Ip_store_house_record {
        roleId: (number|Long);
        name: string;
        operateType: number;
        equip: Iitem_simple;
        color: number;
        timestamp: number;
    }

    class p_store_house_record implements Ip_store_house_record {
        constructor(p?: Ip_store_house_record);
        public roleId: (number|Long);
        public name: string;
        public operateType: number;
        public equip: Iitem_simple;
        public color: number;
        public timestamp: number;
        public static encode(m: Ip_store_house_record, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_store_house_record;
    }

    interface Ic2s_query_gang_store_house_request {
    }

    class c2s_query_gang_store_house_request implements Ic2s_query_gang_store_house_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_gang_store_house_request);
        public static encode(m: Ic2s_query_gang_store_house_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_gang_store_house_request;
    }

    interface Is2c_query_gang_store_house_reply {
        storePoint: (number|Long);
        equips?: (Ip_item[]|null);
        records?: (Ip_store_house_record[]|null);
    }

    class s2c_query_gang_store_house_reply implements Is2c_query_gang_store_house_reply {
        public static cmd: number;
        constructor(p?: Is2c_query_gang_store_house_reply);
        public storePoint: (number|Long);
        public equips: Ip_item[];
        public records: Ip_store_house_record[];
        public static encode(m: Is2c_query_gang_store_house_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_gang_store_house_reply;
    }

    interface Is2c_store_point_changed_notify {
        storePoint: (number|Long);
    }

    class s2c_store_point_changed_notify implements Is2c_store_point_changed_notify {
        public static cmd: number;
        constructor(p?: Is2c_store_point_changed_notify);
        public storePoint: (number|Long);
        public static encode(m: Is2c_store_point_changed_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_store_point_changed_notify;
    }

    interface Is2c_gang_store_house_record_notify {
        record: Ip_store_house_record;
        json: string;
    }

    class s2c_gang_store_house_record_notify implements Is2c_gang_store_house_record_notify {
        public static cmd: number;
        constructor(p?: Is2c_gang_store_house_record_notify);
        public record: Ip_store_house_record;
        public json: string;
        public static encode(m: Is2c_gang_store_house_record_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_gang_store_house_record_notify;
    }

    interface Ic2s_query_equipment_record_request {
        equips: Iitem_simple;
    }

    class c2s_query_equipment_record_request implements Ic2s_query_equipment_record_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_equipment_record_request);
        public equips: Iitem_simple;
        public static encode(m: Ic2s_query_equipment_record_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_equipment_record_request;
    }

    interface Is2c_query_equipment_record_reply {
        json: string;
    }

    class s2c_query_equipment_record_reply implements Is2c_query_equipment_record_reply {
        public static cmd: number;
        constructor(p?: Is2c_query_equipment_record_reply);
        public json: string;
        public static encode(m: Is2c_query_equipment_record_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_equipment_record_reply;
    }

    interface Ic2s_contribute_equipment_request {
        items?: (Iitem_simple[]|null);
    }

    class c2s_contribute_equipment_request implements Ic2s_contribute_equipment_request {
        public static cmd: number;
        constructor(p?: Ic2s_contribute_equipment_request);
        public items: Iitem_simple[];
        public static encode(m: Ic2s_contribute_equipment_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_contribute_equipment_request;
    }

    interface Ic2s_exchange_equipment_request {
        item: Iitem_simple;
    }

    class c2s_exchange_equipment_request implements Ic2s_exchange_equipment_request {
        public static cmd: number;
        constructor(p?: Ic2s_exchange_equipment_request);
        public item: Iitem_simple;
        public static encode(m: Ic2s_exchange_equipment_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_exchange_equipment_request;
    }

    interface Ic2s_destroy_equipment_request {
        items?: (Iitem_simple[]|null);
    }

    class c2s_destroy_equipment_request implements Ic2s_destroy_equipment_request {
        public static cmd: number;
        constructor(p?: Ic2s_destroy_equipment_request);
        public items: Iitem_simple[];
        public static encode(m: Ic2s_destroy_equipment_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_destroy_equipment_request;
    }

    interface Iwar_situation {
        gangId: (number|Long);
        gangName: string;
        rank: number;
        warState: number;
    }

    class war_situation implements Iwar_situation {
        constructor(p?: Iwar_situation);
        public gangId: (number|Long);
        public gangName: string;
        public rank: number;
        public warState: number;
        public static encode(m: Iwar_situation, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): war_situation;
    }

    interface Ic2s_query_gang_war_request {
    }

    class c2s_query_gang_war_request implements Ic2s_query_gang_war_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_gang_war_request);
        public static encode(m: Ic2s_query_gang_war_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_gang_war_request;
    }

    interface Is2c_query_gang_war_reply {
        isFirstTime: number;
        isBegin: number;
        round: number;
        finishTime: number;
        firstLevel?: (Iwar_situation[]|null);
        secondLevel?: (Iwar_situation[]|null);
        thirdLevel?: (Iwar_situation[]|null);
        fourthLevel?: (Iwar_situation[]|null);
        lastWinner: (number|Long);
    }

    class s2c_query_gang_war_reply implements Is2c_query_gang_war_reply {
        public static cmd: number;
        constructor(p?: Is2c_query_gang_war_reply);
        public isFirstTime: number;
        public isBegin: number;
        public round: number;
        public finishTime: number;
        public firstLevel: Iwar_situation[];
        public secondLevel: Iwar_situation[];
        public thirdLevel: Iwar_situation[];
        public fourthLevel: Iwar_situation[];
        public lastWinner: (number|Long);
        public static encode(m: Is2c_query_gang_war_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_gang_war_reply;
    }

    interface Ic2s_enter_gang_war_request {
    }

    class c2s_enter_gang_war_request implements Ic2s_enter_gang_war_request {
        public static cmd: number;
        constructor(p?: Ic2s_enter_gang_war_request);
        public static encode(m: Ic2s_enter_gang_war_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_enter_gang_war_request;
    }

    interface Ic2s_leave_gang_war_request {
    }

    class c2s_leave_gang_war_request implements Ic2s_leave_gang_war_request {
        public static cmd: number;
        constructor(p?: Ic2s_leave_gang_war_request);
        public static encode(m: Ic2s_leave_gang_war_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_leave_gang_war_request;
    }

    interface Is2c_gang_war_score_notify {
        score: number;
    }

    class s2c_gang_war_score_notify implements Is2c_gang_war_score_notify {
        public static cmd: number;
        constructor(p?: Is2c_gang_war_score_notify);
        public score: number;
        public static encode(m: Is2c_gang_war_score_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_gang_war_score_notify;
    }

    interface Is2c_gang_war_enemy_score_notify {
        score: number;
    }

    class s2c_gang_war_enemy_score_notify implements Is2c_gang_war_enemy_score_notify {
        public static cmd: number;
        constructor(p?: Is2c_gang_war_enemy_score_notify);
        public score: number;
        public static encode(m: Is2c_gang_war_enemy_score_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_gang_war_enemy_score_notify;
    }

    interface Ic2s_occupy_crystal_request {
        id: number;
    }

    class c2s_occupy_crystal_request implements Ic2s_occupy_crystal_request {
        public static cmd: number;
        constructor(p?: Ic2s_occupy_crystal_request);
        public id: number;
        public static encode(m: Ic2s_occupy_crystal_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_occupy_crystal_request;
    }

    interface Ip_crystal {
        id: number;
        belong: number;
        occupySide: number;
        roleList?: ((number|Long)[]|null);
        process: number;
    }

    class p_crystal implements Ip_crystal {
        constructor(p?: Ip_crystal);
        public id: number;
        public belong: number;
        public occupySide: number;
        public roleList: (number|Long)[];
        public process: number;
        public static encode(m: Ip_crystal, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_crystal;
    }

    interface Is2c_crystal_notify {
        info?: (Ip_crystal[]|null);
    }

    class s2c_crystal_notify implements Is2c_crystal_notify {
        public static cmd: number;
        constructor(p?: Is2c_crystal_notify);
        public info: Ip_crystal[];
        public static encode(m: Is2c_crystal_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_crystal_notify;
    }

    interface Ip_result_rank {
        rank: number;
        id: (number|Long);
        name: string;
        occupyTimes: number;
        killTimes: number;
        contribution: number;
    }

    class p_result_rank implements Ip_result_rank {
        constructor(p?: Ip_result_rank);
        public rank: number;
        public id: (number|Long);
        public name: string;
        public occupyTimes: number;
        public killTimes: number;
        public contribution: number;
        public static encode(m: Ip_result_rank, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_result_rank;
    }

    interface Is2c_result_notify {
        winOrLose: number;
        result?: (Ip_result_rank[]|null);
    }

    class s2c_result_notify implements Is2c_result_notify {
        public static cmd: number;
        constructor(p?: Is2c_result_notify);
        public winOrLose: number;
        public result: Ip_result_rank[];
        public static encode(m: Is2c_result_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_result_notify;
    }

    interface Ic2s_query_gang_war_reward_request {
    }

    class c2s_query_gang_war_reward_request implements Ic2s_query_gang_war_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_gang_war_reward_request);
        public static encode(m: Ic2s_query_gang_war_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_gang_war_reward_request;
    }

    interface Is2c_query_gang_war_reward_reply {
        gangName: string;
        roleId: (number|Long);
        type: number;
        winTimes: number;
        endTimes: number;
        rewards?: (Ip_item[]|null);
        isDistributed: number;
        isWelfareReceived: number;
    }

    class s2c_query_gang_war_reward_reply implements Is2c_query_gang_war_reward_reply {
        public static cmd: number;
        constructor(p?: Is2c_query_gang_war_reward_reply);
        public gangName: string;
        public roleId: (number|Long);
        public type: number;
        public winTimes: number;
        public endTimes: number;
        public rewards: Ip_item[];
        public isDistributed: number;
        public isWelfareReceived: number;
        public static encode(m: Is2c_query_gang_war_reward_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_gang_war_reward_reply;
    }

    interface Ic2s_distribute_gang_war_reward_request {
        toWho: (number|Long);
    }

    class c2s_distribute_gang_war_reward_request implements Ic2s_distribute_gang_war_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_distribute_gang_war_reward_request);
        public toWho: (number|Long);
        public static encode(m: Ic2s_distribute_gang_war_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_distribute_gang_war_reward_request;
    }

    interface Ic2s_receive_gang_war_welfare_request {
    }

    class c2s_receive_gang_war_welfare_request implements Ic2s_receive_gang_war_welfare_request {
        public static cmd: number;
        constructor(p?: Ic2s_receive_gang_war_welfare_request);
        public static encode(m: Ic2s_receive_gang_war_welfare_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_receive_gang_war_welfare_request;
    }

    interface Ic2s_enter_gang_dinner_request {
    }

    class c2s_enter_gang_dinner_request implements Ic2s_enter_gang_dinner_request {
        public static cmd: number;
        constructor(p?: Ic2s_enter_gang_dinner_request);
        public static encode(m: Ic2s_enter_gang_dinner_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_enter_gang_dinner_request;
    }

    interface Is2c_have_eat_chicken_notify {
        haveEatOrNot: number;
    }

    class s2c_have_eat_chicken_notify implements Is2c_have_eat_chicken_notify {
        public static cmd: number;
        constructor(p?: Is2c_have_eat_chicken_notify);
        public haveEatOrNot: number;
        public static encode(m: Is2c_have_eat_chicken_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_have_eat_chicken_notify;
    }

    interface Ic2s_eat_chicken_request {
    }

    class c2s_eat_chicken_request implements Ic2s_eat_chicken_request {
        public static cmd: number;
        constructor(p?: Ic2s_eat_chicken_request);
        public static encode(m: Ic2s_eat_chicken_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_eat_chicken_request;
    }

    interface Ic2s_leave_gang_dinner_request {
    }

    class c2s_leave_gang_dinner_request implements Ic2s_leave_gang_dinner_request {
        public static cmd: number;
        constructor(p?: Ic2s_leave_gang_dinner_request);
        public static encode(m: Ic2s_leave_gang_dinner_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_leave_gang_dinner_request;
    }

    interface Is2c_gang_dinner_question_notify {
        questionId: number;
    }

    class s2c_gang_dinner_question_notify implements Is2c_gang_dinner_question_notify {
        public static cmd: number;
        constructor(p?: Is2c_gang_dinner_question_notify);
        public questionId: number;
        public static encode(m: Is2c_gang_dinner_question_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_gang_dinner_question_notify;
    }

    interface Is2c_gang_dinner_answer_notify {
        isRight: number;
    }

    class s2c_gang_dinner_answer_notify implements Is2c_gang_dinner_answer_notify {
        public static cmd: number;
        constructor(p?: Is2c_gang_dinner_answer_notify);
        public isRight: number;
        public static encode(m: Is2c_gang_dinner_answer_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_gang_dinner_answer_notify;
    }

    interface Ip_rank {
        rank: number;
        gangName: string;
        score: number;
    }

    class p_rank implements Ip_rank {
        constructor(p?: Ip_rank);
        public rank: number;
        public gangName: string;
        public score: number;
        public static encode(m: Ip_rank, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_rank;
    }

    interface Is2c_gang_dinner_reward_notify {
        exp: (number|Long);
        contribute: number;
    }

    class s2c_gang_dinner_reward_notify implements Is2c_gang_dinner_reward_notify {
        public static cmd: number;
        constructor(p?: Is2c_gang_dinner_reward_notify);
        public exp: (number|Long);
        public contribute: number;
        public static encode(m: Is2c_gang_dinner_reward_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_gang_dinner_reward_notify;
    }

    interface Is2c_gang_dinner_rank_notify {
        rank?: (Ip_rank[]|null);
    }

    class s2c_gang_dinner_rank_notify implements Is2c_gang_dinner_rank_notify {
        public static cmd: number;
        constructor(p?: Is2c_gang_dinner_rank_notify);
        public rank: Ip_rank[];
        public static encode(m: Is2c_gang_dinner_rank_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_gang_dinner_rank_notify;
    }

    interface Ic2s_gang_beast_info {
    }

    class c2s_gang_beast_info implements Ic2s_gang_beast_info {
        public static cmd: number;
        constructor(p?: Ic2s_gang_beast_info);
        public static encode(m: Ic2s_gang_beast_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_gang_beast_info;
    }

    interface Is2c_gang_beast_info {
        beastFood: number;
        beastTimes: number;
        beastCd: number;
        beastInstanceStatus: number;
    }

    class s2c_gang_beast_info implements Is2c_gang_beast_info {
        public static cmd: number;
        constructor(p?: Is2c_gang_beast_info);
        public beastFood: number;
        public beastTimes: number;
        public beastCd: number;
        public beastInstanceStatus: number;
        public static encode(m: Is2c_gang_beast_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_gang_beast_info;
    }

    interface Ic2s_start_gang_beast_request {
    }

    class c2s_start_gang_beast_request implements Ic2s_start_gang_beast_request {
        public static cmd: number;
        constructor(p?: Ic2s_start_gang_beast_request);
        public static encode(m: Ic2s_start_gang_beast_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_start_gang_beast_request;
    }

    interface Ic2s_enter_gang_beast_request {
    }

    class c2s_enter_gang_beast_request implements Ic2s_enter_gang_beast_request {
        public static cmd: number;
        constructor(p?: Ic2s_enter_gang_beast_request);
        public static encode(m: Ic2s_enter_gang_beast_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_enter_gang_beast_request;
    }

    interface Is2c_gang_beast_open {
        isOpen: number;
    }

    class s2c_gang_beast_open implements Is2c_gang_beast_open {
        public static cmd: number;
        constructor(p?: Is2c_gang_beast_open);
        public isOpen: number;
        public static encode(m: Is2c_gang_beast_open, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_gang_beast_open;
    }

    interface Ip_gangbattle_rank_reward {
        rank: number;
        gangId: number;
        gangName: string;
        gangLeader: string;
        rewards?: (Ip_reward_item[]|null);
    }

    class p_gangbattle_rank_reward implements Ip_gangbattle_rank_reward {
        constructor(p?: Ip_gangbattle_rank_reward);
        public rank: number;
        public gangId: number;
        public gangName: string;
        public gangLeader: string;
        public rewards: Ip_reward_item[];
        public static encode(m: Ip_gangbattle_rank_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_gangbattle_rank_reward;
    }

    interface Ip_reward_item {
        itemId: number;
        count: number;
    }

    class p_reward_item implements Ip_reward_item {
        constructor(p?: Ip_reward_item);
        public itemId: number;
        public count: number;
        public static encode(m: Ip_reward_item, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_reward_item;
    }

    interface Ic2s_get_gangbattle_rank_reward_request {
    }

    class c2s_get_gangbattle_rank_reward_request implements Ic2s_get_gangbattle_rank_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_get_gangbattle_rank_reward_request);
        public static encode(m: Ic2s_get_gangbattle_rank_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_gangbattle_rank_reward_request;
    }

    interface Is2c_get_gangbattle_rank_reward_reply {
        rank?: (Ip_gangbattle_rank_reward[]|null);
    }

    class s2c_get_gangbattle_rank_reward_reply implements Is2c_get_gangbattle_rank_reward_reply {
        public static cmd: number;
        constructor(p?: Is2c_get_gangbattle_rank_reward_reply);
        public rank: Ip_gangbattle_rank_reward[];
        public static encode(m: Is2c_get_gangbattle_rank_reward_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_get_gangbattle_rank_reward_reply;
    }

    interface Ip_gang_war_info {
        gangId: number;
        rankId: number;
        score: number;
        gangName: string;
    }

    class p_gang_war_info implements Ip_gang_war_info {
        constructor(p?: Ip_gang_war_info);
        public gangId: number;
        public rankId: number;
        public score: number;
        public gangName: string;
        public static encode(m: Ip_gang_war_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_gang_war_info;
    }

    interface Ic2s_query_role_gang_tower_request {
    }

    class c2s_query_role_gang_tower_request implements Ic2s_query_role_gang_tower_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_role_gang_tower_request);
        public static encode(m: Ic2s_query_role_gang_tower_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_role_gang_tower_request;
    }

    interface Is2c_role_gang_tower_notify {
        curFloor: number;
        curKillCount: number;
        isFinish: number;
    }

    class s2c_role_gang_tower_notify implements Is2c_role_gang_tower_notify {
        public static cmd: number;
        constructor(p?: Is2c_role_gang_tower_notify);
        public curFloor: number;
        public curKillCount: number;
        public isFinish: number;
        public static encode(m: Is2c_role_gang_tower_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_gang_tower_notify;
    }

    interface Is2c_gang_rank_info_notify {
        gangWarList?: (Ip_gang_war_info[]|null);
        myGangInfo: Ip_gang_war_info;
    }

    class s2c_gang_rank_info_notify implements Is2c_gang_rank_info_notify {
        public static cmd: number;
        constructor(p?: Is2c_gang_rank_info_notify);
        public gangWarList: Ip_gang_war_info[];
        public myGangInfo: Ip_gang_war_info;
        public static encode(m: Is2c_gang_rank_info_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_gang_rank_info_notify;
    }

    interface Is2c_gang_rank_change_notify {
        gangWarList?: (Ip_gang_war_info[]|null);
        myGangInfo: Ip_gang_war_info;
    }

    class s2c_gang_rank_change_notify implements Is2c_gang_rank_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_gang_rank_change_notify);
        public gangWarList: Ip_gang_war_info[];
        public myGangInfo: Ip_gang_war_info;
        public static encode(m: Is2c_gang_rank_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_gang_rank_change_notify;
    }

    interface Is2c_gang_tower_result_notify {
        isFinish: number;
        items?: (Ip_kv_pair[]|null);
        exp: (number|Long);
        floor?: (number|null);
        time?: (number|null);
    }

    class s2c_gang_tower_result_notify implements Is2c_gang_tower_result_notify {
        public static cmd: number;
        constructor(p?: Is2c_gang_tower_result_notify);
        public isFinish: number;
        public items: Ip_kv_pair[];
        public exp: (number|Long);
        public floor: number;
        public time: number;
        public static encode(m: Is2c_gang_tower_result_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_gang_tower_result_notify;
    }

    interface Ic2s_enter_gang_guard_request {
    }

    class c2s_enter_gang_guard_request implements Ic2s_enter_gang_guard_request {
        public static cmd: number;
        constructor(p?: Ic2s_enter_gang_guard_request);
        public static encode(m: Ic2s_enter_gang_guard_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_enter_gang_guard_request;
    }

    interface Ic2s_leave_gang_guard_request {
    }

    class c2s_leave_gang_guard_request implements Ic2s_leave_gang_guard_request {
        public static cmd: number;
        constructor(p?: Ic2s_leave_gang_guard_request);
        public static encode(m: Ic2s_leave_gang_guard_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_leave_gang_guard_request;
    }

    interface Is2c_gang_guard_info_notify {
        rankList?: (Ip_gang_guard_info[]|null);
        myRank: Ip_gang_guard_info;
        expAddi: number;
        wave: number;
        hotDegree: number;
        roleNum: number;
        hotRewardStatus?: (number[]|null);
        encourageTimes: number;
        normalCrystalTimes: number;
        advanceCrystalTimes: number;
    }

    class s2c_gang_guard_info_notify implements Is2c_gang_guard_info_notify {
        public static cmd: number;
        constructor(p?: Is2c_gang_guard_info_notify);
        public rankList: Ip_gang_guard_info[];
        public myRank: Ip_gang_guard_info;
        public expAddi: number;
        public wave: number;
        public hotDegree: number;
        public roleNum: number;
        public hotRewardStatus: number[];
        public encourageTimes: number;
        public normalCrystalTimes: number;
        public advanceCrystalTimes: number;
        public static encode(m: Is2c_gang_guard_info_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_gang_guard_info_notify;
    }

    interface Ip_gang_guard_info {
        rankId: number;
        accDamage: (number|Long);
        roleName: string;
    }

    class p_gang_guard_info implements Ip_gang_guard_info {
        constructor(p?: Ip_gang_guard_info);
        public rankId: number;
        public accDamage: (number|Long);
        public roleName: string;
        public static encode(m: Ip_gang_guard_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_gang_guard_info;
    }

    interface Ic2s_query_gang_guard_reward_request {
        id: number;
    }

    class c2s_query_gang_guard_reward_request implements Ic2s_query_gang_guard_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_gang_guard_reward_request);
        public id: number;
        public static encode(m: Ic2s_query_gang_guard_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_gang_guard_reward_request;
    }

    interface Ic2s_gang_guard_encourage_request {
    }

    class c2s_gang_guard_encourage_request implements Ic2s_gang_guard_encourage_request {
        public static cmd: number;
        constructor(p?: Ic2s_gang_guard_encourage_request);
        public static encode(m: Ic2s_gang_guard_encourage_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_gang_guard_encourage_request;
    }

    interface Is2c_gang_guard_result_notify {
        rankReward?: (Iitem_simple[]|null);
        finishReward?: (Iitem_simple[]|null);
        rankList?: (Ip_gang_guard_info[]|null);
        myRank: Ip_gang_guard_info;
        wave: number;
    }

    class s2c_gang_guard_result_notify implements Is2c_gang_guard_result_notify {
        public static cmd: number;
        constructor(p?: Is2c_gang_guard_result_notify);
        public rankReward: Iitem_simple[];
        public finishReward: Iitem_simple[];
        public rankList: Ip_gang_guard_info[];
        public myRank: Ip_gang_guard_info;
        public wave: number;
        public static encode(m: Is2c_gang_guard_result_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_gang_guard_result_notify;
    }

    interface Ic2s_escort_info {
    }

    class c2s_escort_info implements Ic2s_escort_info {
        public static cmd: number;
        constructor(p?: Ic2s_escort_info);
        public static encode(m: Ic2s_escort_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_escort_info;
    }

    interface Is2c_escort_info {
        escortId: number;
        acceptNum: number;
        event: Ip_escort_event;
        escortPreviewId: number;
    }

    class s2c_escort_info implements Is2c_escort_info {
        public static cmd: number;
        constructor(p?: Is2c_escort_info);
        public escortId: number;
        public acceptNum: number;
        public event: Ip_escort_event;
        public escortPreviewId: number;
        public static encode(m: Is2c_escort_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_escort_info;
    }

    interface Ip_escort_event {
        id: number;
        npcPoints: number;
        rolePoints: number;
        addPoints: number;
    }

    class p_escort_event implements Ip_escort_event {
        constructor(p?: Ip_escort_event);
        public id: number;
        public npcPoints: number;
        public rolePoints: number;
        public addPoints: number;
        public static encode(m: Ip_escort_event, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_escort_event;
    }

    interface Ic2s_refresh_escort {
        opType: number;
        useGold: number;
    }

    class c2s_refresh_escort implements Ic2s_refresh_escort {
        public static cmd: number;
        constructor(p?: Ic2s_refresh_escort);
        public opType: number;
        public useGold: number;
        public static encode(m: Ic2s_refresh_escort, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_refresh_escort;
    }

    interface Is2c_refresh_escort {
        escortPreviewId: number;
    }

    class s2c_refresh_escort implements Is2c_refresh_escort {
        public static cmd: number;
        constructor(p?: Is2c_refresh_escort);
        public escortPreviewId: number;
        public static encode(m: Is2c_refresh_escort, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_refresh_escort;
    }

    interface Ic2s_accept_escort {
    }

    class c2s_accept_escort implements Ic2s_accept_escort {
        public static cmd: number;
        constructor(p?: Ic2s_accept_escort);
        public static encode(m: Ic2s_accept_escort, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_accept_escort;
    }

    interface Is2c_accept_escort {
        escortId: number;
        acceptNum: number;
        escortPreviewId: number;
    }

    class s2c_accept_escort implements Is2c_accept_escort {
        public static cmd: number;
        constructor(p?: Is2c_accept_escort);
        public escortId: number;
        public acceptNum: number;
        public escortPreviewId: number;
        public static encode(m: Is2c_accept_escort, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_accept_escort;
    }

    interface Is2c_activity_escort_event {
        event: Ip_escort_event;
    }

    class s2c_activity_escort_event implements Is2c_activity_escort_event {
        public static cmd: number;
        constructor(p?: Is2c_activity_escort_event);
        public event: Ip_escort_event;
        public static encode(m: Is2c_activity_escort_event, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_activity_escort_event;
    }

    interface Ic2s_respond_escort_event {
        arg: number;
    }

    class c2s_respond_escort_event implements Ic2s_respond_escort_event {
        public static cmd: number;
        constructor(p?: Ic2s_respond_escort_event);
        public arg: number;
        public static encode(m: Ic2s_respond_escort_event, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_respond_escort_event;
    }

    interface Ic2s_submit_escort {
    }

    class c2s_submit_escort implements Ic2s_submit_escort {
        public static cmd: number;
        constructor(p?: Ic2s_submit_escort);
        public static encode(m: Ic2s_submit_escort, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_submit_escort;
    }

    interface Is2c_submit_escort {
        finishEscortId: number;
        isDouble: number;
        restAcceptNum: number;
        rw?: (Ip_escort_rw[]|null);
    }

    class s2c_submit_escort implements Is2c_submit_escort {
        public static cmd: number;
        constructor(p?: Is2c_submit_escort);
        public finishEscortId: number;
        public isDouble: number;
        public restAcceptNum: number;
        public rw: Ip_escort_rw[];
        public static encode(m: Is2c_submit_escort, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_submit_escort;
    }

    interface Ip_escort_rw {
        itemId: number;
        itemNum: (number|Long);
    }

    class p_escort_rw implements Ip_escort_rw {
        constructor(p?: Ip_escort_rw);
        public itemId: number;
        public itemNum: (number|Long);
        public static encode(m: Ip_escort_rw, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_escort_rw;
    }

    interface Is2c_marriage_info {
        spouseId: (number|Long);
        spouseName: string;
        typeList?: (number[]|null);
        marriageTime?: (number|null);
        loveBoxBuyTime?: (number|null);
        coupleBoxBuyTime?: (number|null);
    }

    class s2c_marriage_info implements Is2c_marriage_info {
        public static cmd: number;
        constructor(p?: Is2c_marriage_info);
        public spouseId: (number|Long);
        public spouseName: string;
        public typeList: number[];
        public marriageTime: number;
        public loveBoxBuyTime: number;
        public coupleBoxBuyTime: number;
        public static encode(m: Is2c_marriage_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_marriage_info;
    }

    interface Ic2s_make_proposal {
        targetId: (number|Long);
        type: number;
        onlyCheck: number;
    }

    class c2s_make_proposal implements Ic2s_make_proposal {
        public static cmd: number;
        constructor(p?: Ic2s_make_proposal);
        public targetId: (number|Long);
        public type: number;
        public onlyCheck: number;
        public static encode(m: Ic2s_make_proposal, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_make_proposal;
    }

    interface Is2c_be_proposed_notify {
        fromId: (number|Long);
        fromName: string;
        type?: (number|null);
    }

    class s2c_be_proposed_notify implements Is2c_be_proposed_notify {
        public static cmd: number;
        constructor(p?: Is2c_be_proposed_notify);
        public fromId: (number|Long);
        public fromName: string;
        public type: number;
        public static encode(m: Is2c_be_proposed_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_be_proposed_notify;
    }

    interface Ic2s_response_propose {
        fromId: (number|Long);
        type: number;
    }

    class c2s_response_propose implements Ic2s_response_propose {
        public static cmd: number;
        constructor(p?: Ic2s_response_propose);
        public fromId: (number|Long);
        public type: number;
        public static encode(m: Ic2s_response_propose, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_response_propose;
    }

    interface Is2c_response_propose_notify {
        playerName: string;
        type: number;
        playerId: (number|Long);
    }

    class s2c_response_propose_notify implements Is2c_response_propose_notify {
        public static cmd: number;
        constructor(p?: Is2c_response_propose_notify);
        public playerName: string;
        public type: number;
        public playerId: (number|Long);
        public static encode(m: Is2c_response_propose_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_response_propose_notify;
    }

    interface Ic2s_divorce_request {
        type: number;
    }

    class c2s_divorce_request implements Ic2s_divorce_request {
        public static cmd: number;
        constructor(p?: Ic2s_divorce_request);
        public type: number;
        public static encode(m: Ic2s_divorce_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_divorce_request;
    }

    interface Is2c_divorce_notify {
    }

    class s2c_divorce_notify implements Is2c_divorce_notify {
        public static cmd: number;
        constructor(p?: Is2c_divorce_notify);
        public static encode(m: Is2c_divorce_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_divorce_notify;
    }

    interface Ic2s_response_divorce {
        fromId: (number|Long);
        type: number;
    }

    class c2s_response_divorce implements Ic2s_response_divorce {
        public static cmd: number;
        constructor(p?: Ic2s_response_divorce);
        public fromId: (number|Long);
        public type: number;
        public static encode(m: Ic2s_response_divorce, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_response_divorce;
    }

    interface Is2c_response_divorce_notify {
        type: number;
        playerId: (number|Long);
        playerName: string;
    }

    class s2c_response_divorce_notify implements Is2c_response_divorce_notify {
        public static cmd: number;
        constructor(p?: Is2c_response_divorce_notify);
        public type: number;
        public playerId: (number|Long);
        public playerName: string;
        public static encode(m: Is2c_response_divorce_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_response_divorce_notify;
    }

    interface Ic2s_list_single_friend {
    }

    class c2s_list_single_friend implements Ic2s_list_single_friend {
        public static cmd: number;
        constructor(p?: Ic2s_list_single_friend);
        public static encode(m: Ic2s_list_single_friend, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_list_single_friend;
    }

    interface Is2c_list_single_friend {
        list?: ((number|Long)[]|null);
    }

    class s2c_list_single_friend implements Is2c_list_single_friend {
        public static cmd: number;
        constructor(p?: Is2c_list_single_friend);
        public list: (number|Long)[];
        public static encode(m: Is2c_list_single_friend, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_list_single_friend;
    }

    interface Ic2s_wedding_panel {
    }

    class c2s_wedding_panel implements Ic2s_wedding_panel {
        public static cmd: number;
        constructor(p?: Ic2s_wedding_panel);
        public static encode(m: Ic2s_wedding_panel, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_wedding_panel;
    }

    interface Is2c_wedding_panel {
        weddingNum: number;
        wdIds?: (number[]|null);
    }

    class s2c_wedding_panel implements Is2c_wedding_panel {
        public static cmd: number;
        constructor(p?: Is2c_wedding_panel);
        public weddingNum: number;
        public wdIds: number[];
        public static encode(m: Is2c_wedding_panel, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_wedding_panel;
    }

    interface Ic2s_reserve_wedding {
        id: number;
    }

    class c2s_reserve_wedding implements Ic2s_reserve_wedding {
        public static cmd: number;
        constructor(p?: Ic2s_reserve_wedding);
        public id: number;
        public static encode(m: Ic2s_reserve_wedding, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_reserve_wedding;
    }

    interface Iinvite_role {
        playerId: (number|Long);
        playerName: string;
        isOnline?: (number|null);
        vipLevel?: (number|null);
    }

    class invite_role implements Iinvite_role {
        constructor(p?: Iinvite_role);
        public playerId: (number|Long);
        public playerName: string;
        public isOnline: number;
        public vipLevel: number;
        public static encode(m: Iinvite_role, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): invite_role;
    }

    interface Ic2s_invite_info {
    }

    class c2s_invite_info implements Ic2s_invite_info {
        public static cmd: number;
        constructor(p?: Ic2s_invite_info);
        public static encode(m: Ic2s_invite_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_invite_info;
    }

    interface Is2c_invite_info {
        totalNum: number;
        currUseNum: number;
        inviteList?: (Iinvite_role[]|null);
    }

    class s2c_invite_info implements Is2c_invite_info {
        public static cmd: number;
        constructor(p?: Is2c_invite_info);
        public totalNum: number;
        public currUseNum: number;
        public inviteList: Iinvite_role[];
        public static encode(m: Is2c_invite_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_invite_info;
    }

    interface Ic2s_buy_invite_num {
        num: number;
    }

    class c2s_buy_invite_num implements Ic2s_buy_invite_num {
        public static cmd: number;
        constructor(p?: Ic2s_buy_invite_num);
        public num: number;
        public static encode(m: Ic2s_buy_invite_num, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_buy_invite_num;
    }

    interface Is2c_buy_invite_num {
        totalNum: number;
        currUseNum: number;
    }

    class s2c_buy_invite_num implements Is2c_buy_invite_num {
        public static cmd: number;
        constructor(p?: Is2c_buy_invite_num);
        public totalNum: number;
        public currUseNum: number;
        public static encode(m: Is2c_buy_invite_num, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_buy_invite_num;
    }

    interface Ic2s_invite_friend {
        playerId: (number|Long);
    }

    class c2s_invite_friend implements Ic2s_invite_friend {
        public static cmd: number;
        constructor(p?: Ic2s_invite_friend);
        public playerId: (number|Long);
        public static encode(m: Ic2s_invite_friend, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_invite_friend;
    }

    interface Ic2s_wedding_helper {
    }

    class c2s_wedding_helper implements Ic2s_wedding_helper {
        public static cmd: number;
        constructor(p?: Ic2s_wedding_helper);
        public static encode(m: Ic2s_wedding_helper, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_wedding_helper;
    }

    interface Is2c_wedding_helper {
        boyName: string;
        boyTrans: number;
        girlName: string;
        girlTrans: number;
        time: number;
        boyId?: (number|Long|null);
        girlId?: (number|Long|null);
    }

    class s2c_wedding_helper implements Is2c_wedding_helper {
        public static cmd: number;
        constructor(p?: Is2c_wedding_helper);
        public boyName: string;
        public boyTrans: number;
        public girlName: string;
        public girlTrans: number;
        public time: number;
        public boyId: (number|Long);
        public girlId: (number|Long);
        public static encode(m: Is2c_wedding_helper, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_wedding_helper;
    }

    interface Ic2s_wedding_passport {
    }

    class c2s_wedding_passport implements Ic2s_wedding_passport {
        public static cmd: number;
        constructor(p?: Ic2s_wedding_passport);
        public static encode(m: Ic2s_wedding_passport, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_wedding_passport;
    }

    interface Ic2s_wedding_join {
    }

    class c2s_wedding_join implements Ic2s_wedding_join {
        public static cmd: number;
        constructor(p?: Ic2s_wedding_join);
        public static encode(m: Ic2s_wedding_join, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_wedding_join;
    }

    interface Is2c_wedding_celebration {
        state: number;
        foodNum: number;
        exp: (number|Long);
        giftState: number;
        hotScore: number;
        endTime: number;
        boyId: (number|Long);
        girlId: (number|Long);
    }

    class s2c_wedding_celebration implements Is2c_wedding_celebration {
        public static cmd: number;
        constructor(p?: Is2c_wedding_celebration);
        public state: number;
        public foodNum: number;
        public exp: (number|Long);
        public giftState: number;
        public hotScore: number;
        public endTime: number;
        public boyId: (number|Long);
        public girlId: (number|Long);
        public static encode(m: Is2c_wedding_celebration, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_wedding_celebration;
    }

    interface Ic2s_wedding_salute {
        type: number;
        playerId: (number|Long);
    }

    class c2s_wedding_salute implements Ic2s_wedding_salute {
        public static cmd: number;
        constructor(p?: Ic2s_wedding_salute);
        public type: number;
        public playerId: (number|Long);
        public static encode(m: Ic2s_wedding_salute, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_wedding_salute;
    }

    interface Is2c_wedding_salute {
        type: number;
        playerId: (number|Long);
    }

    class s2c_wedding_salute implements Is2c_wedding_salute {
        public static cmd: number;
        constructor(p?: Is2c_wedding_salute);
        public type: number;
        public playerId: (number|Long);
        public static encode(m: Is2c_wedding_salute, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_wedding_salute;
    }

    interface Ic2s_wedding_quit {
    }

    class c2s_wedding_quit implements Ic2s_wedding_quit {
        public static cmd: number;
        constructor(p?: Ic2s_wedding_quit);
        public static encode(m: Ic2s_wedding_quit, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_wedding_quit;
    }

    interface Igift_report {
        time: number;
        playerId1: (number|Long);
        playerName1: string;
        playerId2: (number|Long);
        playerName2: string;
        type: number;
        num: (number|Long);
    }

    class gift_report implements Igift_report {
        constructor(p?: Igift_report);
        public time: number;
        public playerId1: (number|Long);
        public playerName1: string;
        public playerId2: (number|Long);
        public playerName2: string;
        public type: number;
        public num: (number|Long);
        public static encode(m: Igift_report, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): gift_report;
    }

    interface Ic2s_wedding_present_gift_panel {
    }

    class c2s_wedding_present_gift_panel implements Ic2s_wedding_present_gift_panel {
        public static cmd: number;
        constructor(p?: Ic2s_wedding_present_gift_panel);
        public static encode(m: Ic2s_wedding_present_gift_panel, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_wedding_present_gift_panel;
    }

    interface Is2c_wedding_present_gift_panel {
        reportList?: (Igift_report[]|null);
        boyId: (number|Long);
        boyName: string;
        boyTrans: number;
        girlId: (number|Long);
        girlName: string;
        girlTrans: number;
    }

    class s2c_wedding_present_gift_panel implements Is2c_wedding_present_gift_panel {
        public static cmd: number;
        constructor(p?: Is2c_wedding_present_gift_panel);
        public reportList: Igift_report[];
        public boyId: (number|Long);
        public boyName: string;
        public boyTrans: number;
        public girlId: (number|Long);
        public girlName: string;
        public girlTrans: number;
        public static encode(m: Is2c_wedding_present_gift_panel, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_wedding_present_gift_panel;
    }

    interface Ic2s_wedding_present_gift {
        playerId: (number|Long);
        type: number;
        num: number;
    }

    class c2s_wedding_present_gift implements Ic2s_wedding_present_gift {
        public static cmd: number;
        constructor(p?: Ic2s_wedding_present_gift);
        public playerId: (number|Long);
        public type: number;
        public num: number;
        public static encode(m: Ic2s_wedding_present_gift, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_wedding_present_gift;
    }

    interface Ic2s_wedding_guest_manage_panel {
    }

    class c2s_wedding_guest_manage_panel implements Ic2s_wedding_guest_manage_panel {
        public static cmd: number;
        constructor(p?: Ic2s_wedding_guest_manage_panel);
        public static encode(m: Ic2s_wedding_guest_manage_panel, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_wedding_guest_manage_panel;
    }

    interface Is2c_wedding_guest_manage_panel {
        guestList?: (Iinvite_role[]|null);
        num: number;
        totalNum: number;
    }

    class s2c_wedding_guest_manage_panel implements Is2c_wedding_guest_manage_panel {
        public static cmd: number;
        constructor(p?: Is2c_wedding_guest_manage_panel);
        public guestList: Iinvite_role[];
        public num: number;
        public totalNum: number;
        public static encode(m: Is2c_wedding_guest_manage_panel, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_wedding_guest_manage_panel;
    }

    interface Ic2s_wedding_guest_manage {
        playerIds?: ((number|Long)[]|null);
        type: number;
    }

    class c2s_wedding_guest_manage implements Ic2s_wedding_guest_manage {
        public static cmd: number;
        constructor(p?: Ic2s_wedding_guest_manage);
        public playerIds: (number|Long)[];
        public type: number;
        public static encode(m: Ic2s_wedding_guest_manage, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_wedding_guest_manage;
    }

    interface Ic2s_wedding_reserve_state {
    }

    class c2s_wedding_reserve_state implements Ic2s_wedding_reserve_state {
        public static cmd: number;
        constructor(p?: Ic2s_wedding_reserve_state);
        public static encode(m: Ic2s_wedding_reserve_state, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_wedding_reserve_state;
    }

    interface Is2c_wedding_reserve_state {
        type: number;
    }

    class s2c_wedding_reserve_state implements Is2c_wedding_reserve_state {
        public static cmd: number;
        constructor(p?: Is2c_wedding_reserve_state);
        public type: number;
        public static encode(m: Is2c_wedding_reserve_state, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_wedding_reserve_state;
    }

    interface Is2c_wedding_fireworks {
        hotScore: number;
    }

    class s2c_wedding_fireworks implements Is2c_wedding_fireworks {
        public static cmd: number;
        constructor(p?: Is2c_wedding_fireworks);
        public hotScore: number;
        public static encode(m: Is2c_wedding_fireworks, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_wedding_fireworks;
    }

    interface Ic2s_ask_couple_buy_marriage_box {
    }

    class c2s_ask_couple_buy_marriage_box implements Ic2s_ask_couple_buy_marriage_box {
        public static cmd: number;
        constructor(p?: Ic2s_ask_couple_buy_marriage_box);
        public static encode(m: Ic2s_ask_couple_buy_marriage_box, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_ask_couple_buy_marriage_box;
    }

    interface Ic2s_get_buy_marriage_box_reward {
    }

    class c2s_get_buy_marriage_box_reward implements Ic2s_get_buy_marriage_box_reward {
        public static cmd: number;
        constructor(p?: Ic2s_get_buy_marriage_box_reward);
        public static encode(m: Ic2s_get_buy_marriage_box_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_buy_marriage_box_reward;
    }

    interface Ic2s_get_daily_marriage_box_reward {
    }

    class c2s_get_daily_marriage_box_reward implements Ic2s_get_daily_marriage_box_reward {
        public static cmd: number;
        constructor(p?: Ic2s_get_daily_marriage_box_reward);
        public static encode(m: Ic2s_get_daily_marriage_box_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_daily_marriage_box_reward;
    }

    interface Is2c_buy_marriage_box_notify {
    }

    class s2c_buy_marriage_box_notify implements Is2c_buy_marriage_box_notify {
        public static cmd: number;
        constructor(p?: Is2c_buy_marriage_box_notify);
        public static encode(m: Is2c_buy_marriage_box_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_buy_marriage_box_notify;
    }

    interface Ic2s_help_buy_marriage_box {
    }

    class c2s_help_buy_marriage_box implements Ic2s_help_buy_marriage_box {
        public static cmd: number;
        constructor(p?: Ic2s_help_buy_marriage_box);
        public static encode(m: Ic2s_help_buy_marriage_box, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_help_buy_marriage_box;
    }

    interface Ilock_info_p {
        roleId: (number|Long);
        level: number;
        exp: number;
        weared: number;
        basicScore: number;
        allScore: number;
    }

    class lock_info_p implements Ilock_info_p {
        constructor(p?: Ilock_info_p);
        public roleId: (number|Long);
        public level: number;
        public exp: number;
        public weared: number;
        public basicScore: number;
        public allScore: number;
        public static encode(m: Ilock_info_p, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): lock_info_p;
    }

    interface Is2c_marriage_box_buy_time {
        roleId: (number|Long);
        buyTime: number;
    }

    class s2c_marriage_box_buy_time implements Is2c_marriage_box_buy_time {
        public static cmd: number;
        constructor(p?: Is2c_marriage_box_buy_time);
        public roleId: (number|Long);
        public buyTime: number;
        public static encode(m: Is2c_marriage_box_buy_time, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_marriage_box_buy_time;
    }

    interface Ic2s_get_marriage_lock_info {
        roleId?: (number|Long|null);
    }

    class c2s_get_marriage_lock_info implements Ic2s_get_marriage_lock_info {
        public static cmd: number;
        constructor(p?: Ic2s_get_marriage_lock_info);
        public roleId: (number|Long);
        public static encode(m: Ic2s_get_marriage_lock_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_marriage_lock_info;
    }

    interface Is2c_get_marriage_lock_info {
        lockInfo: Ilock_info_p;
    }

    class s2c_get_marriage_lock_info implements Is2c_get_marriage_lock_info {
        public static cmd: number;
        constructor(p?: Is2c_get_marriage_lock_info);
        public lockInfo: Ilock_info_p;
        public static encode(m: Is2c_get_marriage_lock_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_get_marriage_lock_info;
    }

    interface Ic2s_improve_marriage_lock {
        count: number;
    }

    class c2s_improve_marriage_lock implements Ic2s_improve_marriage_lock {
        public static cmd: number;
        constructor(p?: Ic2s_improve_marriage_lock);
        public count: number;
        public static encode(m: Ic2s_improve_marriage_lock, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_improve_marriage_lock;
    }

    interface Is2c_improve_marriage_lock {
        lockInfo: Ilock_info_p;
    }

    class s2c_improve_marriage_lock implements Is2c_improve_marriage_lock {
        public static cmd: number;
        constructor(p?: Is2c_improve_marriage_lock);
        public lockInfo: Ilock_info_p;
        public static encode(m: Is2c_improve_marriage_lock, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_improve_marriage_lock;
    }

    interface Itreasure_world_record_p {
        roleId: (number|Long);
        roleName: string;
        itemId: number;
        count: number;
        extData: string;
    }

    class treasure_world_record_p implements Itreasure_world_record_p {
        constructor(p?: Itreasure_world_record_p);
        public roleId: (number|Long);
        public roleName: string;
        public itemId: number;
        public count: number;
        public extData: string;
        public static encode(m: Itreasure_world_record_p, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): treasure_world_record_p;
    }

    interface Itreasure_personal_record_p {
        itemId: number;
        count: number;
        extData: string;
    }

    class treasure_personal_record_p implements Itreasure_personal_record_p {
        constructor(p?: Itreasure_personal_record_p);
        public itemId: number;
        public count: number;
        public extData: string;
        public static encode(m: Itreasure_personal_record_p, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): treasure_personal_record_p;
    }

    interface Ic2s_query_world_record_request {
        type: number;
    }

    class c2s_query_world_record_request implements Ic2s_query_world_record_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_world_record_request);
        public type: number;
        public static encode(m: Ic2s_query_world_record_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_world_record_request;
    }

    interface Is2c_treasure_world_record_notify {
        type: number;
        record?: (Itreasure_world_record_p[]|null);
    }

    class s2c_treasure_world_record_notify implements Is2c_treasure_world_record_notify {
        public static cmd: number;
        constructor(p?: Is2c_treasure_world_record_notify);
        public type: number;
        public record: Itreasure_world_record_p[];
        public static encode(m: Is2c_treasure_world_record_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_treasure_world_record_notify;
    }

    interface Ic2s_query_personal_record_request {
        type: number;
    }

    class c2s_query_personal_record_request implements Ic2s_query_personal_record_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_personal_record_request);
        public type: number;
        public static encode(m: Ic2s_query_personal_record_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_personal_record_request;
    }

    interface Is2c_treasure_personal_record_notify {
        type: number;
        record?: (Itreasure_personal_record_p[]|null);
    }

    class s2c_treasure_personal_record_notify implements Is2c_treasure_personal_record_notify {
        public static cmd: number;
        constructor(p?: Is2c_treasure_personal_record_notify);
        public type: number;
        public record: Itreasure_personal_record_p[];
        public static encode(m: Is2c_treasure_personal_record_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_treasure_personal_record_notify;
    }

    interface Ic2s_query_integral_request {
        xunbaoType: number;
    }

    class c2s_query_integral_request implements Ic2s_query_integral_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_integral_request);
        public xunbaoType: number;
        public static encode(m: Ic2s_query_integral_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_integral_request;
    }

    interface Is2c_integral_changed_notify {
        integral: number;
        xunbaoType: number;
    }

    class s2c_integral_changed_notify implements Is2c_integral_changed_notify {
        public static cmd: number;
        constructor(p?: Is2c_integral_changed_notify);
        public integral: number;
        public xunbaoType: number;
        public static encode(m: Is2c_integral_changed_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_integral_changed_notify;
    }

    interface Ic2s_find_treasure {
        xunbaoType: number;
        times: number;
        useGold: number;
        useFree: number;
        adwatch: number;
    }

    class c2s_find_treasure implements Ic2s_find_treasure {
        public static cmd: number;
        constructor(p?: Ic2s_find_treasure);
        public xunbaoType: number;
        public times: number;
        public useGold: number;
        public useFree: number;
        public adwatch: number;
        public static encode(m: Ic2s_find_treasure, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_find_treasure;
    }

    interface Is2c_find_treasure {
        reward?: (Ip_item[]|null);
        integralAdd: number;
        chipsAdd: number;
        xunbaoType: number;
        times?: (number|null);
    }

    class s2c_find_treasure implements Is2c_find_treasure {
        public static cmd: number;
        constructor(p?: Is2c_find_treasure);
        public reward: Ip_item[];
        public integralAdd: number;
        public chipsAdd: number;
        public xunbaoType: number;
        public times: number;
        public static encode(m: Is2c_find_treasure, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_find_treasure;
    }

    interface Ic2s_query_rune_free_time {
        xunbaoType: number;
    }

    class c2s_query_rune_free_time implements Ic2s_query_rune_free_time {
        public static cmd: number;
        constructor(p?: Ic2s_query_rune_free_time);
        public xunbaoType: number;
        public static encode(m: Ic2s_query_rune_free_time, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_rune_free_time;
    }

    interface Is2c_query_rune_free_time {
        time: number;
        type: number;
    }

    class s2c_query_rune_free_time implements Is2c_query_rune_free_time {
        public static cmd: number;
        constructor(p?: Is2c_query_rune_free_time);
        public time: number;
        public type: number;
        public static encode(m: Is2c_query_rune_free_time, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_rune_free_time;
    }

    interface Ic2s_take_from_bag {
        xunbaoType: number;
        itemList?: (Iitem_simple[]|null);
    }

    class c2s_take_from_bag implements Ic2s_take_from_bag {
        public static cmd: number;
        constructor(p?: Ic2s_take_from_bag);
        public xunbaoType: number;
        public itemList: Iitem_simple[];
        public static encode(m: Ic2s_take_from_bag, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_take_from_bag;
    }

    interface Ic2s_take_all_from_bag {
        xunbaoType: number;
    }

    class c2s_take_all_from_bag implements Ic2s_take_all_from_bag {
        public static cmd: number;
        constructor(p?: Ic2s_take_all_from_bag);
        public xunbaoType: number;
        public static encode(m: Ic2s_take_all_from_bag, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_take_all_from_bag;
    }

    interface Ic2s_exchange_xunbao_shop {
        xunbaoType: number;
        itemId: number;
        count: number;
    }

    class c2s_exchange_xunbao_shop implements Ic2s_exchange_xunbao_shop {
        public static cmd: number;
        constructor(p?: Ic2s_exchange_xunbao_shop);
        public xunbaoType: number;
        public itemId: number;
        public count: number;
        public static encode(m: Ic2s_exchange_xunbao_shop, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_exchange_xunbao_shop;
    }

    interface Ic2s_open_treasure {
        type: number;
    }

    class c2s_open_treasure implements Ic2s_open_treasure {
        public static cmd: number;
        constructor(p?: Ic2s_open_treasure);
        public type: number;
        public static encode(m: Ic2s_open_treasure, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_open_treasure;
    }

    interface Is2c_open_treasure_reply {
        type: number;
        luckyVal: number;
    }

    class s2c_open_treasure_reply implements Is2c_open_treasure_reply {
        public static cmd: number;
        constructor(p?: Is2c_open_treasure_reply);
        public type: number;
        public luckyVal: number;
        public static encode(m: Is2c_open_treasure_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_open_treasure_reply;
    }

    interface Ic2s_close_treasure {
        type: number;
    }

    class c2s_close_treasure implements Ic2s_close_treasure {
        public static cmd: number;
        constructor(p?: Ic2s_close_treasure);
        public type: number;
        public static encode(m: Ic2s_close_treasure, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_close_treasure;
    }

    interface Ic2s_treasure_times {
        type: number;
    }

    class c2s_treasure_times implements Ic2s_treasure_times {
        public static cmd: number;
        constructor(p?: Ic2s_treasure_times);
        public type: number;
        public static encode(m: Ic2s_treasure_times, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_treasure_times;
    }

    interface Is2c_treasure_times_reply {
        type: number;
        times: number;
    }

    class s2c_treasure_times_reply implements Is2c_treasure_times_reply {
        public static cmd: number;
        constructor(p?: Is2c_treasure_times_reply);
        public type: number;
        public times: number;
        public static encode(m: Is2c_treasure_times_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_treasure_times_reply;
    }

    interface Ip_arena_object {
        id: (number|Long);
        type: number;
        sex: number;
        ranking: number;
        name: string;
        combat: number;
        level: number;
        petType: number;
        weaponId: number;
        horseType: number;
        wingType: number;
        talismanType: number;
        weaponType: number;
        cloakType: number;
        dressUpClothesType: number;
        dressUpWeaponType: number;
        dressUpLightType: number;
        hp: number;
    }

    class p_arena_object implements Ip_arena_object {
        constructor(p?: Ip_arena_object);
        public id: (number|Long);
        public type: number;
        public sex: number;
        public ranking: number;
        public name: string;
        public combat: number;
        public level: number;
        public petType: number;
        public weaponId: number;
        public horseType: number;
        public wingType: number;
        public talismanType: number;
        public weaponType: number;
        public cloakType: number;
        public dressUpClothesType: number;
        public dressUpWeaponType: number;
        public dressUpLightType: number;
        public hp: number;
        public static encode(m: Ip_arena_object, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_arena_object;
    }

    interface Ip_arena {
        ranking: number;
        combat: number;
        canChallengeTimes: number;
        canBuyChallengeTimes: number;
        alreadyEncourageTimes: number;
        objects?: (Ip_arena_object[]|null);
        honor: number;
        lastRewardTime?: (number|null);
    }

    class p_arena implements Ip_arena {
        constructor(p?: Ip_arena);
        public ranking: number;
        public combat: number;
        public canChallengeTimes: number;
        public canBuyChallengeTimes: number;
        public alreadyEncourageTimes: number;
        public objects: Ip_arena_object[];
        public honor: number;
        public lastRewardTime: number;
        public static encode(m: Ip_arena, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_arena;
    }

    interface Ic2s_arena_info_request {
    }

    class c2s_arena_info_request implements Ic2s_arena_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_arena_info_request);
        public static encode(m: Ic2s_arena_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_arena_info_request;
    }

    interface Is2c_arena_info_reply {
        arena: Ip_arena;
    }

    class s2c_arena_info_reply implements Is2c_arena_info_reply {
        public static cmd: number;
        constructor(p?: Is2c_arena_info_reply);
        public arena: Ip_arena;
        public static encode(m: Is2c_arena_info_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_arena_info_reply;
    }

    interface Is2c_arena_info_change_notify {
        arena: Ip_arena;
    }

    class s2c_arena_info_change_notify implements Is2c_arena_info_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_arena_info_change_notify);
        public arena: Ip_arena;
        public static encode(m: Is2c_arena_info_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_arena_info_change_notify;
    }

    interface Ic2s_change_challenge_list_request {
    }

    class c2s_change_challenge_list_request implements Ic2s_change_challenge_list_request {
        public static cmd: number;
        constructor(p?: Ic2s_change_challenge_list_request);
        public static encode(m: Ic2s_change_challenge_list_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_change_challenge_list_request;
    }

    interface Ic2s_challenge_request {
        targetRank: number;
        id: (number|Long);
    }

    class c2s_challenge_request implements Ic2s_challenge_request {
        public static cmd: number;
        constructor(p?: Ic2s_challenge_request);
        public targetRank: number;
        public id: (number|Long);
        public static encode(m: Ic2s_challenge_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_challenge_request;
    }

    interface Is2c_challenge_reply {
        targetId: (number|Long);
    }

    class s2c_challenge_reply implements Is2c_challenge_reply {
        public static cmd: number;
        constructor(p?: Is2c_challenge_reply);
        public targetId: (number|Long);
        public static encode(m: Is2c_challenge_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_challenge_reply;
    }

    interface Ic2s_encourage_request {
    }

    class c2s_encourage_request implements Ic2s_encourage_request {
        public static cmd: number;
        constructor(p?: Ic2s_encourage_request);
        public static encode(m: Ic2s_encourage_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_encourage_request;
    }

    interface Is2c_encourage_reply {
        alreadyEncourageTimes: number;
        combat: number;
    }

    class s2c_encourage_reply implements Is2c_encourage_reply {
        public static cmd: number;
        constructor(p?: Is2c_encourage_reply);
        public alreadyEncourageTimes: number;
        public combat: number;
        public static encode(m: Is2c_encourage_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_encourage_reply;
    }

    interface Ic2s_buy_challenge_times_request {
        times: number;
    }

    class c2s_buy_challenge_times_request implements Ic2s_buy_challenge_times_request {
        public static cmd: number;
        constructor(p?: Ic2s_buy_challenge_times_request);
        public times: number;
        public static encode(m: Ic2s_buy_challenge_times_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_buy_challenge_times_request;
    }

    interface Is2c_buy_challenge_times_reply {
        canChallengeTimes: number;
        canBuyChallengeTimes: number;
    }

    class s2c_buy_challenge_times_reply implements Is2c_buy_challenge_times_reply {
        public static cmd: number;
        constructor(p?: Is2c_buy_challenge_times_reply);
        public canChallengeTimes: number;
        public canBuyChallengeTimes: number;
        public static encode(m: Is2c_buy_challenge_times_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_buy_challenge_times_reply;
    }

    interface Is2c_honor_change_notify {
        honor: number;
    }

    class s2c_honor_change_notify implements Is2c_honor_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_honor_change_notify);
        public honor: number;
        public static encode(m: Is2c_honor_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_honor_change_notify;
    }

    interface Ic2s_fetch_arena_reward_request {
    }

    class c2s_fetch_arena_reward_request implements Ic2s_fetch_arena_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_fetch_arena_reward_request);
        public static encode(m: Ic2s_fetch_arena_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_fetch_arena_reward_request;
    }

    interface Is2c_arena_fight_result_notify {
        result: number;
        exp: (number|Long);
        coin: (number|Long);
        newRanking: number;
        targetId?: (number|null);
    }

    class s2c_arena_fight_result_notify implements Is2c_arena_fight_result_notify {
        public static cmd: number;
        constructor(p?: Is2c_arena_fight_result_notify);
        public result: number;
        public exp: (number|Long);
        public coin: (number|Long);
        public newRanking: number;
        public targetId: number;
        public static encode(m: Is2c_arena_fight_result_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_arena_fight_result_notify;
    }

    interface Ic2s_arena_quit_scene_request {
    }

    class c2s_arena_quit_scene_request implements Ic2s_arena_quit_scene_request {
        public static cmd: number;
        constructor(p?: Ic2s_arena_quit_scene_request);
        public static encode(m: Ic2s_arena_quit_scene_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_arena_quit_scene_request;
    }

    interface Ic2s_arena_get_rank_reward_request {
        rank?: (number|null);
    }

    class c2s_arena_get_rank_reward_request implements Ic2s_arena_get_rank_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_arena_get_rank_reward_request);
        public rank: number;
        public static encode(m: Ic2s_arena_get_rank_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_arena_get_rank_reward_request;
    }

    interface Is2c_arena_get_rank_reward_reply {
        rank?: (number|null);
        itemList?: (Iitem_simple[]|null);
    }

    class s2c_arena_get_rank_reward_reply implements Is2c_arena_get_rank_reward_reply {
        public static cmd: number;
        constructor(p?: Is2c_arena_get_rank_reward_reply);
        public rank: number;
        public itemList: Iitem_simple[];
        public static encode(m: Is2c_arena_get_rank_reward_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_arena_get_rank_reward_reply;
    }

    interface Ic2s_enter_demon_tower_request {
    }

    class c2s_enter_demon_tower_request implements Ic2s_enter_demon_tower_request {
        public static cmd: number;
        constructor(p?: Ic2s_enter_demon_tower_request);
        public static encode(m: Ic2s_enter_demon_tower_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_enter_demon_tower_request;
    }

    interface Ic2s_leave_demon_tower_request {
    }

    class c2s_leave_demon_tower_request implements Ic2s_leave_demon_tower_request {
        public static cmd: number;
        constructor(p?: Ic2s_leave_demon_tower_request);
        public static encode(m: Ic2s_leave_demon_tower_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_leave_demon_tower_request;
    }

    interface Ic2s_query_role_demon_tower_request {
    }

    class c2s_query_role_demon_tower_request implements Ic2s_query_role_demon_tower_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_role_demon_tower_request);
        public static encode(m: Ic2s_query_role_demon_tower_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_role_demon_tower_request;
    }

    interface Is2c_role_demon_tower_notify {
        curFloor: number;
        curKillCount: number;
        isFinish: number;
    }

    class s2c_role_demon_tower_notify implements Is2c_role_demon_tower_notify {
        public static cmd: number;
        constructor(p?: Is2c_role_demon_tower_notify);
        public curFloor: number;
        public curKillCount: number;
        public isFinish: number;
        public static encode(m: Is2c_role_demon_tower_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_demon_tower_notify;
    }

    interface Is2c_demon_tower_result_notify {
        isFinish: number;
        items?: (Ip_kv_pair[]|null);
        exp: (number|Long);
        floor?: (number|null);
        time?: (number|null);
    }

    class s2c_demon_tower_result_notify implements Is2c_demon_tower_result_notify {
        public static cmd: number;
        constructor(p?: Is2c_demon_tower_result_notify);
        public isFinish: number;
        public items: Ip_kv_pair[];
        public exp: (number|Long);
        public floor: number;
        public time: number;
        public static encode(m: Is2c_demon_tower_result_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_demon_tower_result_notify;
    }

    interface Iwant_sale_info_p {
        wantSaleId: (number|Long);
        itemId: number;
        itemNum: number;
        totalPrice: number;
    }

    class want_sale_info_p implements Iwant_sale_info_p {
        constructor(p?: Iwant_sale_info_p);
        public wantSaleId: (number|Long);
        public itemId: number;
        public itemNum: number;
        public totalPrice: number;
        public static encode(m: Iwant_sale_info_p, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): want_sale_info_p;
    }

    interface Isale_info_p {
        saleId: (number|Long);
        type: number;
        status: number;
        itemId: number;
        itemUniqId: (number|Long);
        itemNum: number;
        totalPrice: number;
        marketId: number;
        ownerId: (number|Long);
        putawayTime: number;
        expireTime: number;
        itemInfo: Ip_item;
        hassPasswd: number;
    }

    class sale_info_p implements Isale_info_p {
        constructor(p?: Isale_info_p);
        public saleId: (number|Long);
        public type: number;
        public status: number;
        public itemId: number;
        public itemUniqId: (number|Long);
        public itemNum: number;
        public totalPrice: number;
        public marketId: number;
        public ownerId: (number|Long);
        public putawayTime: number;
        public expireTime: number;
        public itemInfo: Ip_item;
        public hassPasswd: number;
        public static encode(m: Isale_info_p, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): sale_info_p;
    }

    interface Ic2s_look_role_sale_info {
        type: number;
    }

    class c2s_look_role_sale_info implements Ic2s_look_role_sale_info {
        public static cmd: number;
        constructor(p?: Ic2s_look_role_sale_info);
        public type: number;
        public static encode(m: Ic2s_look_role_sale_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_look_role_sale_info;
    }

    interface Is2c_look_role_sale_info {
        saleInfoList?: (Isale_info_p[]|null);
    }

    class s2c_look_role_sale_info implements Is2c_look_role_sale_info {
        public static cmd: number;
        constructor(p?: Is2c_look_role_sale_info);
        public saleInfoList: Isale_info_p[];
        public static encode(m: Is2c_look_role_sale_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_look_role_sale_info;
    }

    interface Ic2s_release_want_sale {
        itemId: number;
        itemNum: number;
        totalPrice: number;
    }

    class c2s_release_want_sale implements Ic2s_release_want_sale {
        public static cmd: number;
        constructor(p?: Ic2s_release_want_sale);
        public itemId: number;
        public itemNum: number;
        public totalPrice: number;
        public static encode(m: Ic2s_release_want_sale, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_release_want_sale;
    }

    interface Is2c_release_want_sale {
        wantInfo: Iwant_sale_info_p;
    }

    class s2c_release_want_sale implements Is2c_release_want_sale {
        public static cmd: number;
        constructor(p?: Is2c_release_want_sale);
        public wantInfo: Iwant_sale_info_p;
        public static encode(m: Is2c_release_want_sale, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_release_want_sale;
    }

    interface Ic2s_sell_to_other_want {
        wantSaleId: number;
        itemNum: number;
    }

    class c2s_sell_to_other_want implements Ic2s_sell_to_other_want {
        public static cmd: number;
        constructor(p?: Ic2s_sell_to_other_want);
        public wantSaleId: number;
        public itemNum: number;
        public static encode(m: Ic2s_sell_to_other_want, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_sell_to_other_want;
    }

    interface Ic2s_look_market {
        marketId: number;
        condition: Isale_condition;
        pageIndex: number;
    }

    class c2s_look_market implements Ic2s_look_market {
        public static cmd: number;
        constructor(p?: Ic2s_look_market);
        public marketId: number;
        public condition: Isale_condition;
        public pageIndex: number;
        public static encode(m: Ic2s_look_market, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_look_market;
    }

    interface Is2c_look_market {
        saleInfoList?: (Isale_info_p[]|null);
    }

    class s2c_look_market implements Is2c_look_market {
        public static cmd: number;
        constructor(p?: Is2c_look_market);
        public saleInfoList: Isale_info_p[];
        public static encode(m: Is2c_look_market, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_look_market;
    }

    interface Isale_condition {
        type: number;
        color: number;
        stage: number;
    }

    class sale_condition implements Isale_condition {
        constructor(p?: Isale_condition);
        public type: number;
        public color: number;
        public stage: number;
        public static encode(m: Isale_condition, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): sale_condition;
    }

    interface Ic2s_search_all_by_name {
        itemName: string;
        pageIndex: number;
    }

    class c2s_search_all_by_name implements Ic2s_search_all_by_name {
        public static cmd: number;
        constructor(p?: Ic2s_search_all_by_name);
        public itemName: string;
        public pageIndex: number;
        public static encode(m: Ic2s_search_all_by_name, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_search_all_by_name;
    }

    interface Is2c_search_all_by_name {
        saleInfoList?: (Isale_info_p[]|null);
    }

    class s2c_search_all_by_name implements Is2c_search_all_by_name {
        public static cmd: number;
        constructor(p?: Is2c_search_all_by_name);
        public saleInfoList: Isale_info_p[];
        public static encode(m: Is2c_search_all_by_name, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_search_all_by_name;
    }

    interface Ic2s_put_away {
        itemId: number;
        uniqId: (number|Long);
        itemNum: number;
        price: number;
        passwd: string;
    }

    class c2s_put_away implements Ic2s_put_away {
        public static cmd: number;
        constructor(p?: Ic2s_put_away);
        public itemId: number;
        public uniqId: (number|Long);
        public itemNum: number;
        public price: number;
        public passwd: string;
        public static encode(m: Ic2s_put_away, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_put_away;
    }

    interface Is2c_put_away {
        saleInfo: Isale_info_p;
    }

    class s2c_put_away implements Is2c_put_away {
        public static cmd: number;
        constructor(p?: Is2c_put_away);
        public saleInfo: Isale_info_p;
        public static encode(m: Is2c_put_away, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_put_away;
    }

    interface Ic2s_buy {
        saleId: (number|Long);
        itemNum: number;
        passwd: string;
    }

    class c2s_buy implements Ic2s_buy {
        public static cmd: number;
        constructor(p?: Ic2s_buy);
        public saleId: (number|Long);
        public itemNum: number;
        public passwd: string;
        public static encode(m: Ic2s_buy, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_buy;
    }

    interface Ic2s_take_down {
        saleId: (number|Long);
    }

    class c2s_take_down implements Ic2s_take_down {
        public static cmd: number;
        constructor(p?: Ic2s_take_down);
        public saleId: (number|Long);
        public static encode(m: Ic2s_take_down, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_take_down;
    }

    interface Ic2s_query_market_list {
    }

    class c2s_query_market_list implements Ic2s_query_market_list {
        public static cmd: number;
        constructor(p?: Ic2s_query_market_list);
        public static encode(m: Ic2s_query_market_list, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_market_list;
    }

    interface Is2c_query_market_list {
        goodsNumList?: (Ip_kv_pair[]|null);
    }

    class s2c_query_market_list implements Is2c_query_market_list {
        public static cmd: number;
        constructor(p?: Is2c_query_market_list);
        public goodsNumList: Ip_kv_pair[];
        public static encode(m: Is2c_query_market_list, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_market_list;
    }

    interface Ic2s_peak_match_request {
        machineName: string;
    }

    class c2s_peak_match_request implements Ic2s_peak_match_request {
        public static cmd: number;
        constructor(p?: Ic2s_peak_match_request);
        public machineName: string;
        public static encode(m: Ic2s_peak_match_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_peak_match_request;
    }

    interface Is2c_peak_match_success_notify {
        enterTime: number;
    }

    class s2c_peak_match_success_notify implements Is2c_peak_match_success_notify {
        public static cmd: number;
        constructor(p?: Is2c_peak_match_success_notify);
        public enterTime: number;
        public static encode(m: Is2c_peak_match_success_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_peak_match_success_notify;
    }

    interface Is2c_peak_match_fight_notify {
        beginFightTime: number;
        endFightTime: number;
    }

    class s2c_peak_match_fight_notify implements Is2c_peak_match_fight_notify {
        public static cmd: number;
        constructor(p?: Is2c_peak_match_fight_notify);
        public beginFightTime: number;
        public endFightTime: number;
        public static encode(m: Is2c_peak_match_fight_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_peak_match_fight_notify;
    }

    interface Ic2s_peak_match_cancel {
    }

    class c2s_peak_match_cancel implements Ic2s_peak_match_cancel {
        public static cmd: number;
        constructor(p?: Ic2s_peak_match_cancel);
        public static encode(m: Ic2s_peak_match_cancel, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_peak_match_cancel;
    }

    interface Ic2s_peak_match_rank {
    }

    class c2s_peak_match_rank implements Ic2s_peak_match_rank {
        public static cmd: number;
        constructor(p?: Ic2s_peak_match_rank);
        public static encode(m: Ic2s_peak_match_rank, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_peak_match_rank;
    }

    interface Ip_peak_match_rank {
        rank: number;
        roleId: (number|Long);
        point: number;
        roleName: string;
    }

    class p_peak_match_rank implements Ip_peak_match_rank {
        constructor(p?: Ip_peak_match_rank);
        public rank: number;
        public roleId: (number|Long);
        public point: number;
        public roleName: string;
        public static encode(m: Ip_peak_match_rank, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_peak_match_rank;
    }

    interface Is2c_peak_match_rank {
        list?: (Ip_peak_match_rank[]|null);
    }

    class s2c_peak_match_rank implements Is2c_peak_match_rank {
        public static cmd: number;
        constructor(p?: Is2c_peak_match_rank);
        public list: Ip_peak_match_rank[];
        public static encode(m: Is2c_peak_match_rank, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_peak_match_rank;
    }

    interface Is2c_peak_match_fight_end {
        winId: (number|Long);
        loseId: (number|Long);
        addExp: (number|Long);
        addPoint: number;
        point: number;
    }

    class s2c_peak_match_fight_end implements Is2c_peak_match_fight_end {
        public static cmd: number;
        constructor(p?: Is2c_peak_match_fight_end);
        public winId: (number|Long);
        public loseId: (number|Long);
        public addExp: (number|Long);
        public addPoint: number;
        public point: number;
        public static encode(m: Is2c_peak_match_fight_end, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_peak_match_fight_end;
    }

    interface Ic2s_peak_match_info {
    }

    class c2s_peak_match_info implements Ic2s_peak_match_info {
        public static cmd: number;
        constructor(p?: Ic2s_peak_match_info);
        public static encode(m: Ic2s_peak_match_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_peak_match_info;
    }

    interface Is2c_peak_match_info {
        point: number;
        honor: number;
        joinRewards?: (number[]|null);
    }

    class s2c_peak_match_info implements Is2c_peak_match_info {
        public static cmd: number;
        constructor(p?: Is2c_peak_match_info);
        public point: number;
        public honor: number;
        public joinRewards: number[];
        public static encode(m: Is2c_peak_match_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_peak_match_info;
    }

    interface Ic2s_peak_match_join_reward {
        count: number;
    }

    class c2s_peak_match_join_reward implements Ic2s_peak_match_join_reward {
        public static cmd: number;
        constructor(p?: Ic2s_peak_match_join_reward);
        public count: number;
        public static encode(m: Ic2s_peak_match_join_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_peak_match_join_reward;
    }

    interface Ic2s_peak_match_grade_reward {
    }

    class c2s_peak_match_grade_reward implements Ic2s_peak_match_grade_reward {
        public static cmd: number;
        constructor(p?: Ic2s_peak_match_grade_reward);
        public static encode(m: Ic2s_peak_match_grade_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_peak_match_grade_reward;
    }

    interface Ic2s_peak_match_quit {
    }

    class c2s_peak_match_quit implements Ic2s_peak_match_quit {
        public static cmd: number;
        constructor(p?: Ic2s_peak_match_quit);
        public static encode(m: Ic2s_peak_match_quit, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_peak_match_quit;
    }

    interface Ic2s_elf_info {
    }

    class c2s_elf_info implements Ic2s_elf_info {
        public static cmd: number;
        constructor(p?: Ic2s_elf_info);
        public static encode(m: Ic2s_elf_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_elf_info;
    }

    interface Is2c_elf_info {
        elfs?: (Ip_elf[]|null);
        battleMaxNum: number;
    }

    class s2c_elf_info implements Is2c_elf_info {
        public static cmd: number;
        constructor(p?: Is2c_elf_info);
        public elfs: Ip_elf[];
        public battleMaxNum: number;
        public static encode(m: Is2c_elf_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_elf_info;
    }

    interface Ip_elf {
        elfId: number;
        isBattle: number;
        skill?: (Ip_elf_skill[]|null);
        equips?: (Ip_elf_equip[]|null);
    }

    class p_elf implements Ip_elf {
        constructor(p?: Ip_elf);
        public elfId: number;
        public isBattle: number;
        public skill: Ip_elf_skill[];
        public equips: Ip_elf_equip[];
        public static encode(m: Ip_elf, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_elf;
    }

    interface Ip_elf_skill {
        skillId: number;
        score: number;
    }

    class p_elf_skill implements Ip_elf_skill {
        constructor(p?: Ip_elf_skill);
        public skillId: number;
        public score: number;
        public static encode(m: Ip_elf_skill, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_elf_skill;
    }

    interface Ic2s_elf_op {
        opType: number;
        elfId: number;
        uniqId: (number|Long);
        consumeItems?: (Iitem_simple[]|null);
    }

    class c2s_elf_op implements Ic2s_elf_op {
        public static cmd: number;
        constructor(p?: Ic2s_elf_op);
        public opType: number;
        public elfId: number;
        public uniqId: (number|Long);
        public consumeItems: Iitem_simple[];
        public static encode(m: Ic2s_elf_op, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_elf_op;
    }

    interface Is2c_elf_op {
        opType: number;
        elf: Ip_elf;
    }

    class s2c_elf_op implements Is2c_elf_op {
        public static cmd: number;
        constructor(p?: Is2c_elf_op);
        public opType: number;
        public elf: Ip_elf;
        public static encode(m: Is2c_elf_op, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_elf_op;
    }

    interface Ic2s_elf_add_battle_pos {
    }

    class c2s_elf_add_battle_pos implements Ic2s_elf_add_battle_pos {
        public static cmd: number;
        constructor(p?: Ic2s_elf_add_battle_pos);
        public static encode(m: Ic2s_elf_add_battle_pos, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_elf_add_battle_pos;
    }

    interface Is2c_elf_add_battle_pos {
        battleMaxNum: number;
    }

    class s2c_elf_add_battle_pos implements Is2c_elf_add_battle_pos {
        public static cmd: number;
        constructor(p?: Is2c_elf_add_battle_pos);
        public battleMaxNum: number;
        public static encode(m: Is2c_elf_add_battle_pos, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_elf_add_battle_pos;
    }

    interface Ic2s_achi_info {
    }

    class c2s_achi_info implements Ic2s_achi_info {
        public static cmd: number;
        constructor(p?: Ic2s_achi_info);
        public static encode(m: Ic2s_achi_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_achi_info;
    }

    interface Is2c_achi_info {
        getPointsRw?: (number[]|null);
        progress?: (Ip_achi_progress[]|null);
    }

    class s2c_achi_info implements Is2c_achi_info {
        public static cmd: number;
        constructor(p?: Is2c_achi_info);
        public getPointsRw: number[];
        public progress: Ip_achi_progress[];
        public static encode(m: Is2c_achi_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_achi_info;
    }

    interface Ip_achi_progress {
        id: number;
        flag: number;
        collectNum: (number|Long);
    }

    class p_achi_progress implements Ip_achi_progress {
        constructor(p?: Ip_achi_progress);
        public id: number;
        public flag: number;
        public collectNum: (number|Long);
        public static encode(m: Ip_achi_progress, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_achi_progress;
    }

    interface Ic2s_fetch_achi_points_rw {
        rwId: number;
    }

    class c2s_fetch_achi_points_rw implements Ic2s_fetch_achi_points_rw {
        public static cmd: number;
        constructor(p?: Ic2s_fetch_achi_points_rw);
        public rwId: number;
        public static encode(m: Ic2s_fetch_achi_points_rw, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_fetch_achi_points_rw;
    }

    interface Ic2s_fetch_achi_rw {
        id: number;
    }

    class c2s_fetch_achi_rw implements Ic2s_fetch_achi_rw {
        public static cmd: number;
        constructor(p?: Ic2s_fetch_achi_rw);
        public id: number;
        public static encode(m: Ic2s_fetch_achi_rw, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_fetch_achi_rw;
    }

    interface Is2c_achi_progress_notify {
        progress?: (Ip_achi_progress[]|null);
    }

    class s2c_achi_progress_notify implements Is2c_achi_progress_notify {
        public static cmd: number;
        constructor(p?: Is2c_achi_progress_notify);
        public progress: Ip_achi_progress[];
        public static encode(m: Is2c_achi_progress_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_achi_progress_notify;
    }

    interface Ic2s_state_info_request {
    }

    class c2s_state_info_request implements Ic2s_state_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_state_info_request);
        public static encode(m: Ic2s_state_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_state_info_request;
    }

    interface Is2c_state_info_reply {
        stateId: number;
        combat: number;
        nextCombat: number;
        isAlreadyGetReward: number;
    }

    class s2c_state_info_reply implements Is2c_state_info_reply {
        public static cmd: number;
        constructor(p?: Is2c_state_info_reply);
        public stateId: number;
        public combat: number;
        public nextCombat: number;
        public isAlreadyGetReward: number;
        public static encode(m: Is2c_state_info_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_state_info_reply;
    }

    interface Is2c_state_info_change_notify {
        stateId: number;
        combat: number;
        nextCombat: number;
    }

    class s2c_state_info_change_notify implements Is2c_state_info_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_state_info_change_notify);
        public stateId: number;
        public combat: number;
        public nextCombat: number;
        public static encode(m: Is2c_state_info_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_state_info_change_notify;
    }

    interface Ic2s_state_increase_request {
    }

    class c2s_state_increase_request implements Ic2s_state_increase_request {
        public static cmd: number;
        constructor(p?: Ic2s_state_increase_request);
        public static encode(m: Ic2s_state_increase_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_state_increase_request;
    }

    interface Ic2s_state_get_daily_reward_request {
    }

    class c2s_state_get_daily_reward_request implements Ic2s_state_get_daily_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_state_get_daily_reward_request);
        public static encode(m: Ic2s_state_get_daily_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_state_get_daily_reward_request;
    }

    interface Ic2s_state_reward_info_request {
    }

    class c2s_state_reward_info_request implements Ic2s_state_reward_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_state_reward_info_request);
        public static encode(m: Ic2s_state_reward_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_state_reward_info_request;
    }

    interface Is2c_state_reward_info_request {
        stateList?: (Ip_kv_pair[]|null);
    }

    class s2c_state_reward_info_request implements Is2c_state_reward_info_request {
        public static cmd: number;
        constructor(p?: Is2c_state_reward_info_request);
        public stateList: Ip_kv_pair[];
        public static encode(m: Is2c_state_reward_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_state_reward_info_request;
    }

    interface Ic2s_state_get_reward_request {
        stateId: number;
    }

    class c2s_state_get_reward_request implements Ic2s_state_get_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_state_get_reward_request);
        public stateId: number;
        public static encode(m: Ic2s_state_get_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_state_get_reward_request;
    }

    interface Is2c_state_get_reward_request {
        stateId: number;
    }

    class s2c_state_get_reward_request implements Is2c_state_get_reward_request {
        public static cmd: number;
        constructor(p?: Is2c_state_get_reward_request);
        public stateId: number;
        public static encode(m: Is2c_state_get_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_state_get_reward_request;
    }

    interface Ianno_info {
        id: number;
        title: string;
        content: string;
        rewardItems?: (Iitem_simple[]|null);
        recvState: number;
        annoType: number;
    }

    class anno_info implements Ianno_info {
        constructor(p?: Ianno_info);
        public id: number;
        public title: string;
        public content: string;
        public rewardItems: Iitem_simple[];
        public recvState: number;
        public annoType: number;
        public static encode(m: Ianno_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): anno_info;
    }

    interface Ic2s_get_update_anno {
    }

    class c2s_get_update_anno implements Ic2s_get_update_anno {
        public static cmd: number;
        constructor(p?: Ic2s_get_update_anno);
        public static encode(m: Ic2s_get_update_anno, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_update_anno;
    }

    interface Is2c_get_update_anno {
        data?: (Ianno_info[]|null);
    }

    class s2c_get_update_anno implements Is2c_get_update_anno {
        public static cmd: number;
        constructor(p?: Is2c_get_update_anno);
        public data: Ianno_info[];
        public static encode(m: Is2c_get_update_anno, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_get_update_anno;
    }

    interface Ic2s_get_update_anno_reward {
    }

    class c2s_get_update_anno_reward implements Ic2s_get_update_anno_reward {
        public static cmd: number;
        constructor(p?: Ic2s_get_update_anno_reward);
        public static encode(m: Ic2s_get_update_anno_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_update_anno_reward;
    }

    interface Ic2s_excode_request {
        excode: string;
    }

    class c2s_excode_request implements Ic2s_excode_request {
        public static cmd: number;
        constructor(p?: Ic2s_excode_request);
        public excode: string;
        public static encode(m: Ic2s_excode_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_excode_request;
    }

    interface Ic2s_query_seven_day_reward {
    }

    class c2s_query_seven_day_reward implements Ic2s_query_seven_day_reward {
        public static cmd: number;
        constructor(p?: Ic2s_query_seven_day_reward);
        public static encode(m: Ic2s_query_seven_day_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_seven_day_reward;
    }

    interface Is2c_query_seven_day_reward {
        data?: (Iseven_day_reward_p[]|null);
    }

    class s2c_query_seven_day_reward implements Is2c_query_seven_day_reward {
        public static cmd: number;
        constructor(p?: Is2c_query_seven_day_reward);
        public data: Iseven_day_reward_p[];
        public static encode(m: Is2c_query_seven_day_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_seven_day_reward;
    }

    interface Ic2s_get_seven_day_reward {
        id: number;
    }

    class c2s_get_seven_day_reward implements Ic2s_get_seven_day_reward {
        public static cmd: number;
        constructor(p?: Ic2s_get_seven_day_reward);
        public id: number;
        public static encode(m: Ic2s_get_seven_day_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_seven_day_reward;
    }

    interface Is2c_seven_day_reward_notify {
        data?: (Iseven_day_reward_p[]|null);
    }

    class s2c_seven_day_reward_notify implements Is2c_seven_day_reward_notify {
        public static cmd: number;
        constructor(p?: Is2c_seven_day_reward_notify);
        public data: Iseven_day_reward_p[];
        public static encode(m: Is2c_seven_day_reward_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_seven_day_reward_notify;
    }

    interface Iseven_day_reward_p {
        id: number;
        endTime: number;
        rewardType: number;
        receiveState: number;
        myRank: number;
        myScore: number;
        rankFlag: number;
    }

    class seven_day_reward_p implements Iseven_day_reward_p {
        constructor(p?: Iseven_day_reward_p);
        public id: number;
        public endTime: number;
        public rewardType: number;
        public receiveState: number;
        public myRank: number;
        public myScore: number;
        public rankFlag: number;
        public static encode(m: Iseven_day_reward_p, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): seven_day_reward_p;
    }

    interface Is2c_server_opened_day_notify {
        day: number;
    }

    class s2c_server_opened_day_notify implements Is2c_server_opened_day_notify {
        public static cmd: number;
        constructor(p?: Is2c_server_opened_day_notify);
        public day: number;
        public static encode(m: Is2c_server_opened_day_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_server_opened_day_notify;
    }

    interface Ic2s_get_seven_day_list {
    }

    class c2s_get_seven_day_list implements Ic2s_get_seven_day_list {
        public static cmd: number;
        constructor(p?: Ic2s_get_seven_day_list);
        public static encode(m: Ic2s_get_seven_day_list, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_seven_day_list;
    }

    interface Is2c_get_seven_day_list_reply {
        list?: (number[]|null);
    }

    class s2c_get_seven_day_list_reply implements Is2c_get_seven_day_list_reply {
        public static cmd: number;
        constructor(p?: Is2c_get_seven_day_list_reply);
        public list: number[];
        public static encode(m: Is2c_get_seven_day_list_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_get_seven_day_list_reply;
    }

    interface Ip_task_struct {
        taskId: number;
        process: number;
    }

    class p_task_struct implements Ip_task_struct {
        constructor(p?: Ip_task_struct);
        public taskId: number;
        public process: number;
        public static encode(m: Ip_task_struct, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_task_struct;
    }

    interface Is2c_seven_day_task_change_notify {
        taskList?: (Ip_task_struct[]|null);
        finishList?: (number[]|null);
        rewardList?: (number[]|null);
    }

    class s2c_seven_day_task_change_notify implements Is2c_seven_day_task_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_seven_day_task_change_notify);
        public taskList: Ip_task_struct[];
        public finishList: number[];
        public rewardList: number[];
        public static encode(m: Is2c_seven_day_task_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_seven_day_task_change_notify;
    }

    interface Ic2s_get_seven_day_task_reward_request {
        taskId: number;
    }

    class c2s_get_seven_day_task_reward_request implements Ic2s_get_seven_day_task_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_get_seven_day_task_reward_request);
        public taskId: number;
        public static encode(m: Ic2s_get_seven_day_task_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_seven_day_task_reward_request;
    }

    interface Ifive_ele_mission {
        missionId: number;
        collectValue: number;
        collectIds?: ((number|Long)[]|null);
        flag: number;
    }

    class five_ele_mission implements Ifive_ele_mission {
        constructor(p?: Ifive_ele_mission);
        public missionId: number;
        public collectValue: number;
        public collectIds: (number|Long)[];
        public flag: number;
        public static encode(m: Ifive_ele_mission, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): five_ele_mission;
    }

    interface Ic2s_five_ele_panel_req {
    }

    class c2s_five_ele_panel_req implements Ic2s_five_ele_panel_req {
        public static cmd: number;
        constructor(p?: Ic2s_five_ele_panel_req);
        public static encode(m: Ic2s_five_ele_panel_req, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_five_ele_panel_req;
    }

    interface Is2c_five_ele_panel_rep {
        fiveEleMissions?: (Ifive_ele_mission[]|null);
        skillIds?: (number[]|null);
    }

    class s2c_five_ele_panel_rep implements Is2c_five_ele_panel_rep {
        public static cmd: number;
        constructor(p?: Is2c_five_ele_panel_rep);
        public fiveEleMissions: Ifive_ele_mission[];
        public skillIds: number[];
        public static encode(m: Is2c_five_ele_panel_rep, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_five_ele_panel_rep;
    }

    interface Ic2s_get_award_req {
        missionId: number;
    }

    class c2s_get_award_req implements Ic2s_get_award_req {
        public static cmd: number;
        constructor(p?: Ic2s_get_award_req);
        public missionId: number;
        public static encode(m: Ic2s_get_award_req, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_award_req;
    }

    interface Is2c_get_award_rep {
        fiveEleMission: Ifive_ele_mission;
    }

    class s2c_get_award_rep implements Is2c_get_award_rep {
        public static cmd: number;
        constructor(p?: Is2c_get_award_rep);
        public fiveEleMission: Ifive_ele_mission;
        public static encode(m: Is2c_get_award_rep, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_get_award_rep;
    }

    interface Ic2s_get_skill_req {
        skillId: number;
    }

    class c2s_get_skill_req implements Ic2s_get_skill_req {
        public static cmd: number;
        constructor(p?: Ic2s_get_skill_req);
        public skillId: number;
        public static encode(m: Ic2s_get_skill_req, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_skill_req;
    }

    interface Is2c_get_skill_rep {
        skillIds?: (number[]|null);
    }

    class s2c_get_skill_rep implements Is2c_get_skill_rep {
        public static cmd: number;
        constructor(p?: Is2c_get_skill_rep);
        public skillIds: number[];
        public static encode(m: Is2c_get_skill_rep, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_get_skill_rep;
    }

    interface Ic2s_query_charge_order_request {
    }

    class c2s_query_charge_order_request implements Ic2s_query_charge_order_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_charge_order_request);
        public static encode(m: Ic2s_query_charge_order_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_charge_order_request;
    }

    interface Is2c_query_charge_order_reply {
        order: string;
    }

    class s2c_query_charge_order_reply implements Is2c_query_charge_order_reply {
        public static cmd: number;
        constructor(p?: Is2c_query_charge_order_reply);
        public order: string;
        public static encode(m: Is2c_query_charge_order_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_charge_order_reply;
    }

    interface Ic2s_query_charge_md5_request {
        info: string;
    }

    class c2s_query_charge_md5_request implements Ic2s_query_charge_md5_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_charge_md5_request);
        public info: string;
        public static encode(m: Ic2s_query_charge_md5_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_charge_md5_request;
    }

    interface Is2c_query_charge_md5_reply {
        md5: string;
    }

    class s2c_query_charge_md5_reply implements Is2c_query_charge_md5_reply {
        public static cmd: number;
        constructor(p?: Is2c_query_charge_md5_reply);
        public md5: string;
        public static encode(m: Is2c_query_charge_md5_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_charge_md5_reply;
    }

    interface Ic2s_query_total_charge_reward_request {
    }

    class c2s_query_total_charge_reward_request implements Ic2s_query_total_charge_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_total_charge_reward_request);
        public static encode(m: Ic2s_query_total_charge_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_total_charge_reward_request;
    }

    interface Is2c_query_total_charge_reward_reply {
        totalCharge: number;
        receivedRewardIds?: (number[]|null);
        endTimestamp: number;
    }

    class s2c_query_total_charge_reward_reply implements Is2c_query_total_charge_reward_reply {
        public static cmd: number;
        constructor(p?: Is2c_query_total_charge_reward_reply);
        public totalCharge: number;
        public receivedRewardIds: number[];
        public endTimestamp: number;
        public static encode(m: Is2c_query_total_charge_reward_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_total_charge_reward_reply;
    }

    interface Ic2s_receive_total_charge_reward_request {
        rewardId: number;
    }

    class c2s_receive_total_charge_reward_request implements Ic2s_receive_total_charge_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_receive_total_charge_reward_request);
        public rewardId: number;
        public static encode(m: Ic2s_receive_total_charge_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_receive_total_charge_reward_request;
    }

    interface Iweek_card_info {
        remainDays: number;
        isReceivedToday: number;
    }

    class week_card_info implements Iweek_card_info {
        constructor(p?: Iweek_card_info);
        public remainDays: number;
        public isReceivedToday: number;
        public static encode(m: Iweek_card_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): week_card_info;
    }

    interface Ic2s_query_charge_request {
    }

    class c2s_query_charge_request implements Ic2s_query_charge_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_charge_request);
        public static encode(m: Ic2s_query_charge_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_charge_request;
    }

    interface Is2c_query_charge_reply {
        chargeIdList?: (number[]|null);
        info: Iweek_card_info;
    }

    class s2c_query_charge_reply implements Is2c_query_charge_reply {
        public static cmd: number;
        constructor(p?: Is2c_query_charge_reply);
        public chargeIdList: number[];
        public info: Iweek_card_info;
        public static encode(m: Is2c_query_charge_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_charge_reply;
    }

    interface Is2c_total_charge_changed_notify {
        totalCharge: number;
        gold: number;
        chargeId: number;
        firstCharge: number;
    }

    class s2c_total_charge_changed_notify implements Is2c_total_charge_changed_notify {
        public static cmd: number;
        constructor(p?: Is2c_total_charge_changed_notify);
        public totalCharge: number;
        public gold: number;
        public chargeId: number;
        public firstCharge: number;
        public static encode(m: Is2c_total_charge_changed_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_total_charge_changed_notify;
    }

    interface Is2c_week_card_notify {
        days: number;
    }

    class s2c_week_card_notify implements Is2c_week_card_notify {
        public static cmd: number;
        constructor(p?: Is2c_week_card_notify);
        public days: number;
        public static encode(m: Is2c_week_card_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_week_card_notify;
    }

    interface Ic2s_received_week_card_request {
    }

    class c2s_received_week_card_request implements Ic2s_received_week_card_request {
        public static cmd: number;
        constructor(p?: Ic2s_received_week_card_request);
        public static encode(m: Ic2s_received_week_card_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_received_week_card_request;
    }

    interface Ic2s_get_first_charge_reward {
    }

    class c2s_get_first_charge_reward implements Ic2s_get_first_charge_reward {
        public static cmd: number;
        constructor(p?: Ic2s_get_first_charge_reward);
        public static encode(m: Ic2s_get_first_charge_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_first_charge_reward;
    }

    interface Ic2s_get_daily_charge_reward {
        rewardId: number;
    }

    class c2s_get_daily_charge_reward implements Ic2s_get_daily_charge_reward {
        public static cmd: number;
        constructor(p?: Ic2s_get_daily_charge_reward);
        public rewardId: number;
        public static encode(m: Ic2s_get_daily_charge_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_daily_charge_reward;
    }

    interface Ic2s_get_continuous_charge_reward {
        rewardId: number;
    }

    class c2s_get_continuous_charge_reward implements Ic2s_get_continuous_charge_reward {
        public static cmd: number;
        constructor(p?: Ic2s_get_continuous_charge_reward);
        public rewardId: number;
        public static encode(m: Ic2s_get_continuous_charge_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_continuous_charge_reward;
    }

    interface Ic2s_get_wx_balance {
        buyDefend?: (number|null);
        xbuyLimit?: (number|null);
        xbuyLimitType?: (number|null);
    }

    class c2s_get_wx_balance implements Ic2s_get_wx_balance {
        public static cmd: number;
        constructor(p?: Ic2s_get_wx_balance);
        public buyDefend: number;
        public xbuyLimit: number;
        public xbuyLimitType: number;
        public static encode(m: Ic2s_get_wx_balance, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_wx_balance;
    }

    interface Ic2s_get_buy_defend_reward {
    }

    class c2s_get_buy_defend_reward implements Ic2s_get_buy_defend_reward {
        public static cmd: number;
        constructor(p?: Ic2s_get_buy_defend_reward);
        public static encode(m: Ic2s_get_buy_defend_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_buy_defend_reward;
    }

    interface Ic2s_create_pay_order {
        type: number;
        typeKey: number;
        money: number;
        ver?: (string|null);
        ext?: (string|null);
    }

    class c2s_create_pay_order implements Ic2s_create_pay_order {
        public static cmd: number;
        constructor(p?: Ic2s_create_pay_order);
        public type: number;
        public typeKey: number;
        public money: number;
        public ver: string;
        public ext: string;
        public static encode(m: Ic2s_create_pay_order, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_create_pay_order;
    }

    interface Is2c_create_pay_order_reply {
        id: (number|Long);
        orderId: string;
        type: number;
        typeKey: number;
        money: number;
        name: string;
        sign?: (string|null);
        productName?: (string|null);
        productDecs?: (string|null);
        notifyUrl?: (string|null);
        expireTime?: (string|null);
        extInfo?: (string|null);
        count?: (number|null);
    }

    class s2c_create_pay_order_reply implements Is2c_create_pay_order_reply {
        public static cmd: number;
        constructor(p?: Is2c_create_pay_order_reply);
        public id: (number|Long);
        public orderId: string;
        public type: number;
        public typeKey: number;
        public money: number;
        public name: string;
        public sign: string;
        public productName: string;
        public productDecs: string;
        public notifyUrl: string;
        public expireTime: string;
        public extInfo: string;
        public count: number;
        public static encode(m: Is2c_create_pay_order_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_create_pay_order_reply;
    }

    interface Ic2s_pay_order_complete {
        id: (number|Long);
        result: number;
    }

    class c2s_pay_order_complete implements Ic2s_pay_order_complete {
        public static cmd: number;
        constructor(p?: Ic2s_pay_order_complete);
        public id: (number|Long);
        public result: number;
        public static encode(m: Ic2s_pay_order_complete, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_pay_order_complete;
    }

    interface Ic2s_proxy_pay_lock {
        id: (number|Long);
    }

    class c2s_proxy_pay_lock implements Ic2s_proxy_pay_lock {
        public static cmd: number;
        constructor(p?: Ic2s_proxy_pay_lock);
        public id: (number|Long);
        public static encode(m: Ic2s_proxy_pay_lock, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_proxy_pay_lock;
    }

    interface Ic2s_use_cash_coupon {
        uniqId: (number|Long);
        type: number;
    }

    class c2s_use_cash_coupon implements Ic2s_use_cash_coupon {
        public static cmd: number;
        constructor(p?: Ic2s_use_cash_coupon);
        public uniqId: (number|Long);
        public type: number;
        public static encode(m: Ic2s_use_cash_coupon, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_use_cash_coupon;
    }

    interface Ic2s_charge_daily_charge_request {
    }

    class c2s_charge_daily_charge_request implements Ic2s_charge_daily_charge_request {
        public static cmd: number;
        constructor(p?: Ic2s_charge_daily_charge_request);
        public static encode(m: Ic2s_charge_daily_charge_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_charge_daily_charge_request;
    }

    interface Is2c_charge_daily_charge_response {
        firstCharge: number;
        dailyCharge: number;
        chargeNum: number;
    }

    class s2c_charge_daily_charge_response implements Is2c_charge_daily_charge_response {
        public static cmd: number;
        constructor(p?: Is2c_charge_daily_charge_response);
        public firstCharge: number;
        public dailyCharge: number;
        public chargeNum: number;
        public static encode(m: Is2c_charge_daily_charge_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_charge_daily_charge_response;
    }

    interface Is2c_charge_success_notify {
    }

    class s2c_charge_success_notify implements Is2c_charge_success_notify {
        public static cmd: number;
        constructor(p?: Is2c_charge_success_notify);
        public static encode(m: Is2c_charge_success_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_charge_success_notify;
    }

    interface Isoul_equip_info_p {
        uniqId: (number|Long);
        itemId: number;
        bound: number;
        grade: number;
        exp: number;
        site: number;
    }

    class soul_equip_info_p implements Isoul_equip_info_p {
        constructor(p?: Isoul_equip_info_p);
        public uniqId: (number|Long);
        public itemId: number;
        public bound: number;
        public grade: number;
        public exp: number;
        public site: number;
        public static encode(m: Isoul_equip_info_p, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): soul_equip_info_p;
    }

    interface Ic2s_role_soul_wear {
    }

    class c2s_role_soul_wear implements Ic2s_role_soul_wear {
        public static cmd: number;
        constructor(p?: Ic2s_role_soul_wear);
        public static encode(m: Ic2s_role_soul_wear, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_role_soul_wear;
    }

    interface Is2c_role_soul_wear {
        roleId: (number|Long);
        info?: (Isoul_equip_info_p[]|null);
    }

    class s2c_role_soul_wear implements Is2c_role_soul_wear {
        public static cmd: number;
        constructor(p?: Is2c_role_soul_wear);
        public roleId: (number|Long);
        public info: Isoul_equip_info_p[];
        public static encode(m: Is2c_role_soul_wear, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_role_soul_wear;
    }

    interface Ic2s_wear_soul_equip {
        uniqId: (number|Long);
    }

    class c2s_wear_soul_equip implements Ic2s_wear_soul_equip {
        public static cmd: number;
        constructor(p?: Ic2s_wear_soul_equip);
        public uniqId: (number|Long);
        public static encode(m: Ic2s_wear_soul_equip, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_wear_soul_equip;
    }

    interface Ic2s_take_off_soul_equip {
        site: number;
    }

    class c2s_take_off_soul_equip implements Ic2s_take_off_soul_equip {
        public static cmd: number;
        constructor(p?: Ic2s_take_off_soul_equip);
        public site: number;
        public static encode(m: Ic2s_take_off_soul_equip, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_take_off_soul_equip;
    }

    interface Ic2s_upgrade_soul_equip {
        site: number;
    }

    class c2s_upgrade_soul_equip implements Ic2s_upgrade_soul_equip {
        public static cmd: number;
        constructor(p?: Ic2s_upgrade_soul_equip);
        public site: number;
        public static encode(m: Ic2s_upgrade_soul_equip, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_upgrade_soul_equip;
    }

    interface Is2c_upgrade_soul_equip {
        site: number;
        newSoul: Isoul_equip_info_p;
    }

    class s2c_upgrade_soul_equip implements Is2c_upgrade_soul_equip {
        public static cmd: number;
        constructor(p?: Is2c_upgrade_soul_equip);
        public site: number;
        public newSoul: Isoul_equip_info_p;
        public static encode(m: Is2c_upgrade_soul_equip, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_upgrade_soul_equip;
    }

    interface Ic2s_decompose_all {
        uniqidList?: ((number|Long)[]|null);
    }

    class c2s_decompose_all implements Ic2s_decompose_all {
        public static cmd: number;
        constructor(p?: Ic2s_decompose_all);
        public uniqidList: (number|Long)[];
        public static encode(m: Ic2s_decompose_all, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_decompose_all;
    }

    interface Ic2s_decompose_soul_equip {
        uniqId: (number|Long);
    }

    class c2s_decompose_soul_equip implements Ic2s_decompose_soul_equip {
        public static cmd: number;
        constructor(p?: Ic2s_decompose_soul_equip);
        public uniqId: (number|Long);
        public static encode(m: Ic2s_decompose_soul_equip, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_decompose_soul_equip;
    }

    interface Ic2s_remove_soul_equip {
        uniqId: (number|Long);
    }

    class c2s_remove_soul_equip implements Ic2s_remove_soul_equip {
        public static cmd: number;
        constructor(p?: Ic2s_remove_soul_equip);
        public uniqId: (number|Long);
        public static encode(m: Ic2s_remove_soul_equip, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_remove_soul_equip;
    }

    interface Is2c_soul_equip_money {
        roleId: (number|Long);
        essence?: (number|null);
        juhun?: (number|null);
        shenhun?: (number|null);
    }

    class s2c_soul_equip_money implements Is2c_soul_equip_money {
        public static cmd: number;
        constructor(p?: Is2c_soul_equip_money);
        public roleId: (number|Long);
        public essence: number;
        public juhun: number;
        public shenhun: number;
        public static encode(m: Is2c_soul_equip_money, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_soul_equip_money;
    }

    interface Is2c_soul_equip_login_info {
        autoDecompose: number;
        essence: number;
        juhun: number;
        shenhun: number;
    }

    class s2c_soul_equip_login_info implements Is2c_soul_equip_login_info {
        public static cmd: number;
        constructor(p?: Is2c_soul_equip_login_info);
        public autoDecompose: number;
        public essence: number;
        public juhun: number;
        public shenhun: number;
        public static encode(m: Is2c_soul_equip_login_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_soul_equip_login_info;
    }

    interface Ic2s_set_auto_decompose {
        type: number;
    }

    class c2s_set_auto_decompose implements Ic2s_set_auto_decompose {
        public static cmd: number;
        constructor(p?: Ic2s_set_auto_decompose);
        public type: number;
        public static encode(m: Ic2s_set_auto_decompose, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_set_auto_decompose;
    }

    interface Is2c_soul_equip_wear_changed {
        roleId: (number|Long);
        site: number;
        info: Isoul_equip_info_p;
    }

    class s2c_soul_equip_wear_changed implements Is2c_soul_equip_wear_changed {
        public static cmd: number;
        constructor(p?: Is2c_soul_equip_wear_changed);
        public roleId: (number|Long);
        public site: number;
        public info: Isoul_equip_info_p;
        public static encode(m: Is2c_soul_equip_wear_changed, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_soul_equip_wear_changed;
    }

    interface Ic2s_checkpoint_info_request {
    }

    class c2s_checkpoint_info_request implements Ic2s_checkpoint_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_checkpoint_info_request);
        public static encode(m: Ic2s_checkpoint_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_checkpoint_info_request;
    }

    interface Is2c_checkpoint_info_reply {
        checkpoint: number;
        currKillMonster: number;
        autoChallenge: number;
        isOpen?: (number|null);
    }

    class s2c_checkpoint_info_reply implements Is2c_checkpoint_info_reply {
        public static cmd: number;
        constructor(p?: Is2c_checkpoint_info_reply);
        public checkpoint: number;
        public currKillMonster: number;
        public autoChallenge: number;
        public isOpen: number;
        public static encode(m: Is2c_checkpoint_info_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_checkpoint_info_reply;
    }

    interface Is2c_checkpoint_monster_count_notify {
        checkpoint: number;
        currKillMonster: number;
    }

    class s2c_checkpoint_monster_count_notify implements Is2c_checkpoint_monster_count_notify {
        public static cmd: number;
        constructor(p?: Is2c_checkpoint_monster_count_notify);
        public checkpoint: number;
        public currKillMonster: number;
        public static encode(m: Is2c_checkpoint_monster_count_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_checkpoint_monster_count_notify;
    }

    interface Ic2s_checkpoint_set_auto_challenge_request {
        autoChallenge: number;
    }

    class c2s_checkpoint_set_auto_challenge_request implements Ic2s_checkpoint_set_auto_challenge_request {
        public static cmd: number;
        constructor(p?: Ic2s_checkpoint_set_auto_challenge_request);
        public autoChallenge: number;
        public static encode(m: Ic2s_checkpoint_set_auto_challenge_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_checkpoint_set_auto_challenge_request;
    }

    interface Is2c_checkpoint_set_auto_challenge_reply {
        autoChallenge: number;
    }

    class s2c_checkpoint_set_auto_challenge_reply implements Is2c_checkpoint_set_auto_challenge_reply {
        public static cmd: number;
        constructor(p?: Is2c_checkpoint_set_auto_challenge_reply);
        public autoChallenge: number;
        public static encode(m: Is2c_checkpoint_set_auto_challenge_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_checkpoint_set_auto_challenge_reply;
    }

    interface Ic2s_checkpoint_challenge_request {
        checkpoint: number;
    }

    class c2s_checkpoint_challenge_request implements Ic2s_checkpoint_challenge_request {
        public static cmd: number;
        constructor(p?: Ic2s_checkpoint_challenge_request);
        public checkpoint: number;
        public static encode(m: Ic2s_checkpoint_challenge_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_checkpoint_challenge_request;
    }

    interface Is2c_checkpoint_challenge_reply {
        checkpoint: number;
        startTime: number;
        endTime: number;
    }

    class s2c_checkpoint_challenge_reply implements Is2c_checkpoint_challenge_reply {
        public static cmd: number;
        constructor(p?: Is2c_checkpoint_challenge_reply);
        public checkpoint: number;
        public startTime: number;
        public endTime: number;
        public static encode(m: Is2c_checkpoint_challenge_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_checkpoint_challenge_reply;
    }

    interface Ic2s_checkpoint_leave_request {
    }

    class c2s_checkpoint_leave_request implements Ic2s_checkpoint_leave_request {
        public static cmd: number;
        constructor(p?: Ic2s_checkpoint_leave_request);
        public static encode(m: Ic2s_checkpoint_leave_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_checkpoint_leave_request;
    }

    interface Is2c_checkpoint_result_reply {
        checkpoint: number;
        result: number;
    }

    class s2c_checkpoint_result_reply implements Is2c_checkpoint_result_reply {
        public static cmd: number;
        constructor(p?: Is2c_checkpoint_result_reply);
        public checkpoint: number;
        public result: number;
        public static encode(m: Is2c_checkpoint_result_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_checkpoint_result_reply;
    }

    interface Ikv_sign {
        id: number;
        value: number;
    }

    class kv_sign implements Ikv_sign {
        constructor(p?: Ikv_sign);
        public id: number;
        public value: number;
        public static encode(m: Ikv_sign, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): kv_sign;
    }

    interface Iactivity_info_p {
        activityId: number;
        mainId: number;
        state: number;
        keyCount?: (number|null);
        singleSign?: (number|null);
        multiSign?: (Ikv_sign[]|null);
    }

    class activity_info_p implements Iactivity_info_p {
        constructor(p?: Iactivity_info_p);
        public activityId: number;
        public mainId: number;
        public state: number;
        public keyCount: number;
        public singleSign: number;
        public multiSign: Ikv_sign[];
        public static encode(m: Iactivity_info_p, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): activity_info_p;
    }

    interface Ic2s_get_activity_info {
    }

    class c2s_get_activity_info implements Ic2s_get_activity_info {
        public static cmd: number;
        constructor(p?: Ic2s_get_activity_info);
        public static encode(m: Ic2s_get_activity_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_activity_info;
    }

    interface Is2c_get_activity_info {
        data?: (Iactivity_info_p[]|null);
    }

    class s2c_get_activity_info implements Is2c_get_activity_info {
        public static cmd: number;
        constructor(p?: Is2c_get_activity_info);
        public data: Iactivity_info_p[];
        public static encode(m: Is2c_get_activity_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_get_activity_info;
    }

    interface Is2c_activity_change_notify {
        data?: (Iactivity_info_p[]|null);
    }

    class s2c_activity_change_notify implements Is2c_activity_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_activity_change_notify);
        public data: Iactivity_info_p[];
        public static encode(m: Is2c_activity_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_activity_change_notify;
    }

    interface Ic2s_get_login_reward {
        activityId: number;
        day: number;
    }

    class c2s_get_login_reward implements Ic2s_get_login_reward {
        public static cmd: number;
        constructor(p?: Ic2s_get_login_reward);
        public activityId: number;
        public day: number;
        public static encode(m: Ic2s_get_login_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_login_reward;
    }

    interface Ic2s_get_charge_reward {
        activityId: number;
        index: number;
    }

    class c2s_get_charge_reward implements Ic2s_get_charge_reward {
        public static cmd: number;
        constructor(p?: Ic2s_get_charge_reward);
        public activityId: number;
        public index: number;
        public static encode(m: Ic2s_get_charge_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_charge_reward;
    }

    interface Ic2s_get_crazy_reward {
        activityId: number;
        index: number;
    }

    class c2s_get_crazy_reward implements Ic2s_get_crazy_reward {
        public static cmd: number;
        constructor(p?: Ic2s_get_crazy_reward);
        public activityId: number;
        public index: number;
        public static encode(m: Ic2s_get_crazy_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_crazy_reward;
    }

    interface Ic2s_exchange_item {
        activityId: number;
        targetId: number;
        num: number;
    }

    class c2s_exchange_item implements Ic2s_exchange_item {
        public static cmd: number;
        constructor(p?: Ic2s_exchange_item);
        public activityId: number;
        public targetId: number;
        public num: number;
        public static encode(m: Ic2s_exchange_item, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_exchange_item;
    }

    interface Ic2s_seek_sign {
        activityId: number;
        cnt: number;
    }

    class c2s_seek_sign implements Ic2s_seek_sign {
        public static cmd: number;
        constructor(p?: Ic2s_seek_sign);
        public activityId: number;
        public cnt: number;
        public static encode(m: Ic2s_seek_sign, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_seek_sign;
    }

    interface Ic2s_buy_fireworks {
        activityId: number;
        num: number;
    }

    class c2s_buy_fireworks implements Ic2s_buy_fireworks {
        public static cmd: number;
        constructor(p?: Ic2s_buy_fireworks);
        public activityId: number;
        public num: number;
        public static encode(m: Ic2s_buy_fireworks, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_buy_fireworks;
    }

    interface Ic2s_query_fireworks_integral {
    }

    class c2s_query_fireworks_integral implements Ic2s_query_fireworks_integral {
        public static cmd: number;
        constructor(p?: Ic2s_query_fireworks_integral);
        public static encode(m: Ic2s_query_fireworks_integral, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_fireworks_integral;
    }

    interface Is2c_query_fireworks_integral_reply {
        fireworksIntegral: number;
    }

    class s2c_query_fireworks_integral_reply implements Is2c_query_fireworks_integral_reply {
        public static cmd: number;
        constructor(p?: Is2c_query_fireworks_integral_reply);
        public fireworksIntegral: number;
        public static encode(m: Is2c_query_fireworks_integral_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_fireworks_integral_reply;
    }

    interface Is2c_use_fireworks_reply {
        reward?: (Ip_item[]|null);
        isMail: number;
        fireworksIntegral: number;
    }

    class s2c_use_fireworks_reply implements Is2c_use_fireworks_reply {
        public static cmd: number;
        constructor(p?: Is2c_use_fireworks_reply);
        public reward: Ip_item[];
        public isMail: number;
        public fireworksIntegral: number;
        public static encode(m: Is2c_use_fireworks_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_use_fireworks_reply;
    }

    interface Ifireworks_world_record_p {
        roleId: (number|Long);
        roleName: string;
        itemId: number;
        count: number;
        extData: string;
    }

    class fireworks_world_record_p implements Ifireworks_world_record_p {
        constructor(p?: Ifireworks_world_record_p);
        public roleId: (number|Long);
        public roleName: string;
        public itemId: number;
        public count: number;
        public extData: string;
        public static encode(m: Ifireworks_world_record_p, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): fireworks_world_record_p;
    }

    interface Ic2s_query_fireworks_record {
    }

    class c2s_query_fireworks_record implements Ic2s_query_fireworks_record {
        public static cmd: number;
        constructor(p?: Ic2s_query_fireworks_record);
        public static encode(m: Ic2s_query_fireworks_record, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_fireworks_record;
    }

    interface Is2c_fireworks_world_record_notify {
        record?: (Ifireworks_world_record_p[]|null);
    }

    class s2c_fireworks_world_record_notify implements Is2c_fireworks_world_record_notify {
        public static cmd: number;
        constructor(p?: Is2c_fireworks_world_record_notify);
        public record: Ifireworks_world_record_p[];
        public static encode(m: Is2c_fireworks_world_record_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_fireworks_world_record_notify;
    }

    interface Ic2s_query_activity_rank_reward {
    }

    class c2s_query_activity_rank_reward implements Ic2s_query_activity_rank_reward {
        public static cmd: number;
        constructor(p?: Ic2s_query_activity_rank_reward);
        public static encode(m: Ic2s_query_activity_rank_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_activity_rank_reward;
    }

    interface Is2c_query_activity_rank_reward {
        data?: (Iactivity_rank_reward_p[]|null);
    }

    class s2c_query_activity_rank_reward implements Is2c_query_activity_rank_reward {
        public static cmd: number;
        constructor(p?: Is2c_query_activity_rank_reward);
        public data: Iactivity_rank_reward_p[];
        public static encode(m: Is2c_query_activity_rank_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_activity_rank_reward;
    }

    interface Ic2s_get_activity_rank_reward {
        id: number;
    }

    class c2s_get_activity_rank_reward implements Ic2s_get_activity_rank_reward {
        public static cmd: number;
        constructor(p?: Ic2s_get_activity_rank_reward);
        public id: number;
        public static encode(m: Ic2s_get_activity_rank_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_activity_rank_reward;
    }

    interface Is2c_activity_rank_reward_notify {
        data?: (Iactivity_rank_reward_p[]|null);
    }

    class s2c_activity_rank_reward_notify implements Is2c_activity_rank_reward_notify {
        public static cmd: number;
        constructor(p?: Is2c_activity_rank_reward_notify);
        public data: Iactivity_rank_reward_p[];
        public static encode(m: Is2c_activity_rank_reward_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_activity_rank_reward_notify;
    }

    interface Iactivity_rank_reward_p {
        id: number;
        endTime: number;
        rewardType: number;
        receiveState: number;
        myRank: number;
        myScore: number;
        rankFlag: number;
    }

    class activity_rank_reward_p implements Iactivity_rank_reward_p {
        constructor(p?: Iactivity_rank_reward_p);
        public id: number;
        public endTime: number;
        public rewardType: number;
        public receiveState: number;
        public myRank: number;
        public myScore: number;
        public rankFlag: number;
        public static encode(m: Iactivity_rank_reward_p, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): activity_rank_reward_p;
    }

    interface Ip_invit_info {
        seqId: number;
        head: string;
        status: number;
    }

    class p_invit_info implements Ip_invit_info {
        constructor(p?: Ip_invit_info);
        public seqId: number;
        public head: string;
        public status: number;
        public static encode(m: Ip_invit_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_invit_info;
    }

    interface Ip_invit_recharge {
        seqId: number;
        awardGold: number;
    }

    class p_invit_recharge implements Ip_invit_recharge {
        constructor(p?: Ip_invit_recharge);
        public seqId: number;
        public awardGold: number;
        public static encode(m: Ip_invit_recharge, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_invit_recharge;
    }

    interface Ic2s_share_info_request {
    }

    class c2s_share_info_request implements Ic2s_share_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_share_info_request);
        public static encode(m: Ic2s_share_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_share_info_request;
    }

    interface Is2c_share_info_reply {
        shareDailyCnt: number;
        shareAwardStatus: number;
        shareRemainCnt: number;
        shareRemainCntTime: number;
        shareTotCnt: (number|Long);
        shareTotCntAwards?: (number[]|null);
        invitTotCntAwardId: number;
        invitRoles?: (Ip_invit_info[]|null);
        invitLevelRoles?: (Ip_invit_info[]|null);
        invitRechargeAwards?: (Ip_invit_recharge[]|null);
        firstShare?: (number|null);
    }

    class s2c_share_info_reply implements Is2c_share_info_reply {
        public static cmd: number;
        constructor(p?: Is2c_share_info_reply);
        public shareDailyCnt: number;
        public shareAwardStatus: number;
        public shareRemainCnt: number;
        public shareRemainCntTime: number;
        public shareTotCnt: (number|Long);
        public shareTotCntAwards: number[];
        public invitTotCntAwardId: number;
        public invitRoles: Ip_invit_info[];
        public invitLevelRoles: Ip_invit_info[];
        public invitRechargeAwards: Ip_invit_recharge[];
        public firstShare: number;
        public static encode(m: Is2c_share_info_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_share_info_reply;
    }

    interface Ic2s_share_share_request {
        shareType: number;
        sharePicture: number;
    }

    class c2s_share_share_request implements Ic2s_share_share_request {
        public static cmd: number;
        constructor(p?: Ic2s_share_share_request);
        public shareType: number;
        public sharePicture: number;
        public static encode(m: Ic2s_share_share_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_share_share_request;
    }

    interface Is2c_share_award_status_notify {
        shareAwardStatus: number;
    }

    class s2c_share_award_status_notify implements Is2c_share_award_status_notify {
        public static cmd: number;
        constructor(p?: Is2c_share_award_status_notify);
        public shareAwardStatus: number;
        public static encode(m: Is2c_share_award_status_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_share_award_status_notify;
    }

    interface Is2c_share_remain_cnt_notify {
        shareRemainCnt: number;
    }

    class s2c_share_remain_cnt_notify implements Is2c_share_remain_cnt_notify {
        public static cmd: number;
        constructor(p?: Is2c_share_remain_cnt_notify);
        public shareRemainCnt: number;
        public static encode(m: Is2c_share_remain_cnt_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_share_remain_cnt_notify;
    }

    interface Ic2s_share_share_award_request {
    }

    class c2s_share_share_award_request implements Ic2s_share_share_award_request {
        public static cmd: number;
        constructor(p?: Ic2s_share_share_award_request);
        public static encode(m: Ic2s_share_share_award_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_share_share_award_request;
    }

    interface Is2c_share_share_award_reply {
        shareRemainCnt: number;
        shareDailyCnt: number;
        shareTotCnt: (number|Long);
        shareRemainTime: number;
    }

    class s2c_share_share_award_reply implements Is2c_share_share_award_reply {
        public static cmd: number;
        constructor(p?: Is2c_share_share_award_reply);
        public shareRemainCnt: number;
        public shareDailyCnt: number;
        public shareTotCnt: (number|Long);
        public shareRemainTime: number;
        public static encode(m: Is2c_share_share_award_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_share_share_award_reply;
    }

    interface Ic2s_share_share_tot_cnt_award_request {
        awardId: number;
    }

    class c2s_share_share_tot_cnt_award_request implements Ic2s_share_share_tot_cnt_award_request {
        public static cmd: number;
        constructor(p?: Ic2s_share_share_tot_cnt_award_request);
        public awardId: number;
        public static encode(m: Ic2s_share_share_tot_cnt_award_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_share_share_tot_cnt_award_request;
    }

    interface Is2c_share_share_tot_cnt_award_reply {
        awardId: number;
    }

    class s2c_share_share_tot_cnt_award_reply implements Is2c_share_share_tot_cnt_award_reply {
        public static cmd: number;
        constructor(p?: Is2c_share_share_tot_cnt_award_reply);
        public awardId: number;
        public static encode(m: Is2c_share_share_tot_cnt_award_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_share_share_tot_cnt_award_reply;
    }

    interface Ic2s_share_invit_tot_cnt_award_request {
    }

    class c2s_share_invit_tot_cnt_award_request implements Ic2s_share_invit_tot_cnt_award_request {
        public static cmd: number;
        constructor(p?: Ic2s_share_invit_tot_cnt_award_request);
        public static encode(m: Ic2s_share_invit_tot_cnt_award_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_share_invit_tot_cnt_award_request;
    }

    interface Is2c_share_invit_tot_cnt_award_reply {
        awardId: number;
    }

    class s2c_share_invit_tot_cnt_award_reply implements Is2c_share_invit_tot_cnt_award_reply {
        public static cmd: number;
        constructor(p?: Is2c_share_invit_tot_cnt_award_reply);
        public awardId: number;
        public static encode(m: Is2c_share_invit_tot_cnt_award_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_share_invit_tot_cnt_award_reply;
    }

    interface Ic2s_share_invit_role_award_request {
        seqId: number;
    }

    class c2s_share_invit_role_award_request implements Ic2s_share_invit_role_award_request {
        public static cmd: number;
        constructor(p?: Ic2s_share_invit_role_award_request);
        public seqId: number;
        public static encode(m: Ic2s_share_invit_role_award_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_share_invit_role_award_request;
    }

    interface Is2c_share_invit_role_award_reply {
        seqId: number;
    }

    class s2c_share_invit_role_award_reply implements Is2c_share_invit_role_award_reply {
        public static cmd: number;
        constructor(p?: Is2c_share_invit_role_award_reply);
        public seqId: number;
        public static encode(m: Is2c_share_invit_role_award_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_share_invit_role_award_reply;
    }

    interface Ic2s_share_invit_level_role_award_request {
        seqId: number;
    }

    class c2s_share_invit_level_role_award_request implements Ic2s_share_invit_level_role_award_request {
        public static cmd: number;
        constructor(p?: Ic2s_share_invit_level_role_award_request);
        public seqId: number;
        public static encode(m: Ic2s_share_invit_level_role_award_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_share_invit_level_role_award_request;
    }

    interface Is2c_share_invit_level_role_award_reply {
        seqId: number;
    }

    class s2c_share_invit_level_role_award_reply implements Is2c_share_invit_level_role_award_reply {
        public static cmd: number;
        constructor(p?: Is2c_share_invit_level_role_award_reply);
        public seqId: number;
        public static encode(m: Is2c_share_invit_level_role_award_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_share_invit_level_role_award_reply;
    }

    interface Ic2s_share_invit_recharge_award_request {
        seqId: number;
    }

    class c2s_share_invit_recharge_award_request implements Ic2s_share_invit_recharge_award_request {
        public static cmd: number;
        constructor(p?: Ic2s_share_invit_recharge_award_request);
        public seqId: number;
        public static encode(m: Ic2s_share_invit_recharge_award_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_share_invit_recharge_award_request;
    }

    interface Is2c_share_invit_recharge_award_reply {
        seqId: number;
        awardGold: number;
    }

    class s2c_share_invit_recharge_award_reply implements Is2c_share_invit_recharge_award_reply {
        public static cmd: number;
        constructor(p?: Is2c_share_invit_recharge_award_reply);
        public seqId: number;
        public awardGold: number;
        public static encode(m: Is2c_share_invit_recharge_award_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_share_invit_recharge_award_reply;
    }

    interface Is2c_share_add_invit_role_notify {
        invitRole: Ip_invit_info;
    }

    class s2c_share_add_invit_role_notify implements Is2c_share_add_invit_role_notify {
        public static cmd: number;
        constructor(p?: Is2c_share_add_invit_role_notify);
        public invitRole: Ip_invit_info;
        public static encode(m: Is2c_share_add_invit_role_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_share_add_invit_role_notify;
    }

    interface Is2c_share_add_invit_level_role_notify {
        invitLevelRole: Ip_invit_info;
    }

    class s2c_share_add_invit_level_role_notify implements Is2c_share_add_invit_level_role_notify {
        public static cmd: number;
        constructor(p?: Is2c_share_add_invit_level_role_notify);
        public invitLevelRole: Ip_invit_info;
        public static encode(m: Is2c_share_add_invit_level_role_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_share_add_invit_level_role_notify;
    }

    interface Is2c_share_add_invit_recharge_notify {
        seqId: number;
        awardGold: number;
    }

    class s2c_share_add_invit_recharge_notify implements Is2c_share_add_invit_recharge_notify {
        public static cmd: number;
        constructor(p?: Is2c_share_add_invit_recharge_notify);
        public seqId: number;
        public awardGold: number;
        public static encode(m: Is2c_share_add_invit_recharge_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_share_add_invit_recharge_notify;
    }

    interface Is2c_share_tot_cnt_notify {
        shareTotCnt: number;
    }

    class s2c_share_tot_cnt_notify implements Is2c_share_tot_cnt_notify {
        public static cmd: number;
        constructor(p?: Is2c_share_tot_cnt_notify);
        public shareTotCnt: number;
        public static encode(m: Is2c_share_tot_cnt_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_share_tot_cnt_notify;
    }

    interface Ip_commerce_employee {
        employeeId: number;
        level?: (number|null);
        grade?: (number|null);
        star?: (number|null);
        score?: (number|null);
        buildingId?: (number|null);
    }

    class p_commerce_employee implements Ip_commerce_employee {
        constructor(p?: Ip_commerce_employee);
        public employeeId: number;
        public level: number;
        public grade: number;
        public star: number;
        public score: number;
        public buildingId: number;
        public static encode(m: Ip_commerce_employee, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_commerce_employee;
    }

    interface Ip_commerce_land {
        landId: number;
        isOpen?: (boolean|null);
        isUsed?: (boolean|null);
    }

    class p_commerce_land implements Ip_commerce_land {
        constructor(p?: Ip_commerce_land);
        public landId: number;
        public isOpen: boolean;
        public isUsed: boolean;
        public static encode(m: Ip_commerce_land, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_commerce_land;
    }

    interface Ip_commerce_building {
        buildingId: number;
        level: number;
        star: number;
        employees?: (Ip_commerce_building_employee[]|null);
        score: number;
        lastRunTime: (number|Long);
        landId: number;
    }

    class p_commerce_building implements Ip_commerce_building {
        constructor(p?: Ip_commerce_building);
        public buildingId: number;
        public level: number;
        public star: number;
        public employees: Ip_commerce_building_employee[];
        public score: number;
        public lastRunTime: (number|Long);
        public landId: number;
        public static encode(m: Ip_commerce_building, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_commerce_building;
    }

    interface Ip_commerce_building_employee {
        positionId: number;
        employeeId?: (number|null);
    }

    class p_commerce_building_employee implements Ip_commerce_building_employee {
        constructor(p?: Ip_commerce_building_employee);
        public positionId: number;
        public employeeId: number;
        public static encode(m: Ip_commerce_building_employee, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_commerce_building_employee;
    }

    interface Ip_commerce_employee_recruit_time {
        type?: (number|null);
        time?: (number|null);
    }

    class p_commerce_employee_recruit_time implements Ip_commerce_employee_recruit_time {
        constructor(p?: Ip_commerce_employee_recruit_time);
        public type: number;
        public time: number;
        public static encode(m: Ip_commerce_employee_recruit_time, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_commerce_employee_recruit_time;
    }

    interface Ic2s_commerce_query_info_request {
    }

    class c2s_commerce_query_info_request implements Ic2s_commerce_query_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_commerce_query_info_request);
        public static encode(m: Ic2s_commerce_query_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_commerce_query_info_request;
    }

    interface Is2c_commerce_query_info_reply {
        level: number;
        employees?: (Ip_commerce_employee[]|null);
        lands?: (Ip_commerce_land[]|null);
        buildings?: (Ip_commerce_building[]|null);
        score?: (number|null);
        recruitTime?: (Ip_commerce_employee_recruit_time[]|null);
        poorHarvest?: (Ip_kv_pair[]|null);
        companySkills?: (number[]|null);
    }

    class s2c_commerce_query_info_reply implements Is2c_commerce_query_info_reply {
        public static cmd: number;
        constructor(p?: Is2c_commerce_query_info_reply);
        public level: number;
        public employees: Ip_commerce_employee[];
        public lands: Ip_commerce_land[];
        public buildings: Ip_commerce_building[];
        public score: number;
        public recruitTime: Ip_commerce_employee_recruit_time[];
        public poorHarvest: Ip_kv_pair[];
        public companySkills: number[];
        public static encode(m: Is2c_commerce_query_info_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_commerce_query_info_reply;
    }

    interface Ic2s_commerce_active_request {
    }

    class c2s_commerce_active_request implements Ic2s_commerce_active_request {
        public static cmd: number;
        constructor(p?: Ic2s_commerce_active_request);
        public static encode(m: Ic2s_commerce_active_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_commerce_active_request;
    }

    interface Ic2s_commerce_upgrade_request {
    }

    class c2s_commerce_upgrade_request implements Ic2s_commerce_upgrade_request {
        public static cmd: number;
        constructor(p?: Ic2s_commerce_upgrade_request);
        public static encode(m: Ic2s_commerce_upgrade_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_commerce_upgrade_request;
    }

    interface Is2c_commerce_company_notify {
        level?: (number|null);
        score?: (number|null);
    }

    class s2c_commerce_company_notify implements Is2c_commerce_company_notify {
        public static cmd: number;
        constructor(p?: Is2c_commerce_company_notify);
        public level: number;
        public score: number;
        public static encode(m: Is2c_commerce_company_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_commerce_company_notify;
    }

    interface Ic2s_commerce_query_coin_per_minute_request {
    }

    class c2s_commerce_query_coin_per_minute_request implements Ic2s_commerce_query_coin_per_minute_request {
        public static cmd: number;
        constructor(p?: Ic2s_commerce_query_coin_per_minute_request);
        public static encode(m: Ic2s_commerce_query_coin_per_minute_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_commerce_query_coin_per_minute_request;
    }

    interface Is2c_commerce_query_coin_per_minute_reply {
        coin?: (number|null);
    }

    class s2c_commerce_query_coin_per_minute_reply implements Is2c_commerce_query_coin_per_minute_reply {
        public static cmd: number;
        constructor(p?: Is2c_commerce_query_coin_per_minute_reply);
        public coin: number;
        public static encode(m: Is2c_commerce_query_coin_per_minute_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_commerce_query_coin_per_minute_reply;
    }

    interface Ic2s_commerce_employee_recruit_request {
        type: number;
    }

    class c2s_commerce_employee_recruit_request implements Ic2s_commerce_employee_recruit_request {
        public static cmd: number;
        constructor(p?: Ic2s_commerce_employee_recruit_request);
        public type: number;
        public static encode(m: Ic2s_commerce_employee_recruit_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_commerce_employee_recruit_request;
    }

    interface Is2c_commerce_employee_recruit_reply {
        employeeId: number;
        type?: (number|null);
        num?: (number|null);
    }

    class s2c_commerce_employee_recruit_reply implements Is2c_commerce_employee_recruit_reply {
        public static cmd: number;
        constructor(p?: Is2c_commerce_employee_recruit_reply);
        public employeeId: number;
        public type: number;
        public num: number;
        public static encode(m: Is2c_commerce_employee_recruit_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_commerce_employee_recruit_reply;
    }

    interface Ic2s_commerce_employee_add_level_request {
        employeeId: number;
        times?: (number|null);
    }

    class c2s_commerce_employee_add_level_request implements Ic2s_commerce_employee_add_level_request {
        public static cmd: number;
        constructor(p?: Ic2s_commerce_employee_add_level_request);
        public employeeId: number;
        public times: number;
        public static encode(m: Ic2s_commerce_employee_add_level_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_commerce_employee_add_level_request;
    }

    interface Ic2s_commerce_employee_add_grade_request {
        employeeId: number;
    }

    class c2s_commerce_employee_add_grade_request implements Ic2s_commerce_employee_add_grade_request {
        public static cmd: number;
        constructor(p?: Ic2s_commerce_employee_add_grade_request);
        public employeeId: number;
        public static encode(m: Ic2s_commerce_employee_add_grade_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_commerce_employee_add_grade_request;
    }

    interface Ic2s_commerce_employee_add_star_request {
        employeeId: number;
    }

    class c2s_commerce_employee_add_star_request implements Ic2s_commerce_employee_add_star_request {
        public static cmd: number;
        constructor(p?: Ic2s_commerce_employee_add_star_request);
        public employeeId: number;
        public static encode(m: Ic2s_commerce_employee_add_star_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_commerce_employee_add_star_request;
    }

    interface Is2c_commerce_employee_notice {
        empolyee?: (Ip_commerce_employee|null);
    }

    class s2c_commerce_employee_notice implements Is2c_commerce_employee_notice {
        public static cmd: number;
        constructor(p?: Is2c_commerce_employee_notice);
        public empolyee?: (Ip_commerce_employee|null);
        public static encode(m: Is2c_commerce_employee_notice, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_commerce_employee_notice;
    }

    interface Is2c_commerce_new_employee_notice {
        employee?: (Ip_commerce_employee|null);
    }

    class s2c_commerce_new_employee_notice implements Is2c_commerce_new_employee_notice {
        public static cmd: number;
        constructor(p?: Is2c_commerce_new_employee_notice);
        public employee?: (Ip_commerce_employee|null);
        public static encode(m: Is2c_commerce_new_employee_notice, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_commerce_new_employee_notice;
    }

    interface Ic2s_commerce_building_buy_land_request {
        landId: number;
    }

    class c2s_commerce_building_buy_land_request implements Ic2s_commerce_building_buy_land_request {
        public static cmd: number;
        constructor(p?: Ic2s_commerce_building_buy_land_request);
        public landId: number;
        public static encode(m: Ic2s_commerce_building_buy_land_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_commerce_building_buy_land_request;
    }

    interface Ic2s_commerce_building_build_request {
        landId: number;
    }

    class c2s_commerce_building_build_request implements Ic2s_commerce_building_build_request {
        public static cmd: number;
        constructor(p?: Ic2s_commerce_building_build_request);
        public landId: number;
        public static encode(m: Ic2s_commerce_building_build_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_commerce_building_build_request;
    }

    interface Ic2s_commerce_building_add_level_request {
        buildingId: number;
        times: number;
    }

    class c2s_commerce_building_add_level_request implements Ic2s_commerce_building_add_level_request {
        public static cmd: number;
        constructor(p?: Ic2s_commerce_building_add_level_request);
        public buildingId: number;
        public times: number;
        public static encode(m: Ic2s_commerce_building_add_level_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_commerce_building_add_level_request;
    }

    interface Ic2s_commerce_building_add_star_request {
        buildingId: number;
    }

    class c2s_commerce_building_add_star_request implements Ic2s_commerce_building_add_star_request {
        public static cmd: number;
        constructor(p?: Ic2s_commerce_building_add_star_request);
        public buildingId: number;
        public static encode(m: Ic2s_commerce_building_add_star_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_commerce_building_add_star_request;
    }

    interface Ic2s_commerce_building_add_employee_request {
        buildingId: number;
        employeeId?: (number|null);
        positionId?: (number|null);
    }

    class c2s_commerce_building_add_employee_request implements Ic2s_commerce_building_add_employee_request {
        public static cmd: number;
        constructor(p?: Ic2s_commerce_building_add_employee_request);
        public buildingId: number;
        public employeeId: number;
        public positionId: number;
        public static encode(m: Ic2s_commerce_building_add_employee_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_commerce_building_add_employee_request;
    }

    interface Ic2s_commerce_building_rm_employee_request {
        buildingId: number;
        employeeId?: (number|null);
        positionId?: (number|null);
    }

    class c2s_commerce_building_rm_employee_request implements Ic2s_commerce_building_rm_employee_request {
        public static cmd: number;
        constructor(p?: Ic2s_commerce_building_rm_employee_request);
        public buildingId: number;
        public employeeId: number;
        public positionId: number;
        public static encode(m: Ic2s_commerce_building_rm_employee_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_commerce_building_rm_employee_request;
    }

    interface Is2c_commerce_building_notice {
        building?: (Ip_commerce_building|null);
    }

    class s2c_commerce_building_notice implements Is2c_commerce_building_notice {
        public static cmd: number;
        constructor(p?: Is2c_commerce_building_notice);
        public building?: (Ip_commerce_building|null);
        public static encode(m: Is2c_commerce_building_notice, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_commerce_building_notice;
    }

    interface Ip_commerce_task_info {
        taskId?: (number|null);
        isComplete?: (number|null);
        isRewarded?: (number|null);
        progress?: (number|null);
    }

    class p_commerce_task_info implements Ip_commerce_task_info {
        constructor(p?: Ip_commerce_task_info);
        public taskId: number;
        public isComplete: number;
        public isRewarded: number;
        public progress: number;
        public static encode(m: Ip_commerce_task_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_commerce_task_info;
    }

    interface Ic2s_commerce_task_query_info_request {
    }

    class c2s_commerce_task_query_info_request implements Ic2s_commerce_task_query_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_commerce_task_query_info_request);
        public static encode(m: Ic2s_commerce_task_query_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_commerce_task_query_info_request;
    }

    interface Is2c_commerce_task_query_info_response {
        taskInfoList?: (Ip_commerce_task_info[]|null);
    }

    class s2c_commerce_task_query_info_response implements Is2c_commerce_task_query_info_response {
        public static cmd: number;
        constructor(p?: Is2c_commerce_task_query_info_response);
        public taskInfoList: Ip_commerce_task_info[];
        public static encode(m: Is2c_commerce_task_query_info_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_commerce_task_query_info_response;
    }

    interface Ic2s_commerce_task_get_reward_request {
        taskId?: (number|null);
    }

    class c2s_commerce_task_get_reward_request implements Ic2s_commerce_task_get_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_commerce_task_get_reward_request);
        public taskId: number;
        public static encode(m: Ic2s_commerce_task_get_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_commerce_task_get_reward_request;
    }

    interface Is2c_commerce_task_get_reward_response {
        taskId?: (number|null);
    }

    class s2c_commerce_task_get_reward_response implements Is2c_commerce_task_get_reward_response {
        public static cmd: number;
        constructor(p?: Is2c_commerce_task_get_reward_response);
        public taskId: number;
        public static encode(m: Is2c_commerce_task_get_reward_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_commerce_task_get_reward_response;
    }

    interface Is2c_commerce_task_info_notify {
        taskInfo?: (Ip_commerce_task_info|null);
    }

    class s2c_commerce_task_info_notify implements Is2c_commerce_task_info_notify {
        public static cmd: number;
        constructor(p?: Is2c_commerce_task_info_notify);
        public taskInfo?: (Ip_commerce_task_info|null);
        public static encode(m: Is2c_commerce_task_info_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_commerce_task_info_notify;
    }

    interface Ic2s_commerce_employee_recruit_ten_request {
        type: number;
    }

    class c2s_commerce_employee_recruit_ten_request implements Ic2s_commerce_employee_recruit_ten_request {
        public static cmd: number;
        constructor(p?: Ic2s_commerce_employee_recruit_ten_request);
        public type: number;
        public static encode(m: Ic2s_commerce_employee_recruit_ten_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_commerce_employee_recruit_ten_request;
    }

    interface Is2c_commerce_employee_recruit_ten_reply {
        list?: (Is2c_commerce_employee_recruit_reply[]|null);
    }

    class s2c_commerce_employee_recruit_ten_reply implements Is2c_commerce_employee_recruit_ten_reply {
        public static cmd: number;
        constructor(p?: Is2c_commerce_employee_recruit_ten_reply);
        public list: Is2c_commerce_employee_recruit_reply[];
        public static encode(m: Is2c_commerce_employee_recruit_ten_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_commerce_employee_recruit_ten_reply;
    }

    interface Is2c_commerce_employee_recruit_free_time_notice {
        recruitTime?: (Ip_commerce_employee_recruit_time|null);
    }

    class s2c_commerce_employee_recruit_free_time_notice implements Is2c_commerce_employee_recruit_free_time_notice {
        public static cmd: number;
        constructor(p?: Is2c_commerce_employee_recruit_free_time_notice);
        public recruitTime?: (Ip_commerce_employee_recruit_time|null);
        public static encode(m: Is2c_commerce_employee_recruit_free_time_notice, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_commerce_employee_recruit_free_time_notice;
    }

    interface Ic2s_commerce_get_free_coin_by_ad_request {
    }

    class c2s_commerce_get_free_coin_by_ad_request implements Ic2s_commerce_get_free_coin_by_ad_request {
        public static cmd: number;
        constructor(p?: Ic2s_commerce_get_free_coin_by_ad_request);
        public static encode(m: Ic2s_commerce_get_free_coin_by_ad_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_commerce_get_free_coin_by_ad_request;
    }

    interface Is2c_commerce_get_free_coin_by_ad_reply {
        coin: number;
    }

    class s2c_commerce_get_free_coin_by_ad_reply implements Is2c_commerce_get_free_coin_by_ad_reply {
        public static cmd: number;
        constructor(p?: Is2c_commerce_get_free_coin_by_ad_reply);
        public coin: number;
        public static encode(m: Is2c_commerce_get_free_coin_by_ad_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_commerce_get_free_coin_by_ad_reply;
    }

    interface Ic2s_commerce_online_coins_request {
    }

    class c2s_commerce_online_coins_request implements Ic2s_commerce_online_coins_request {
        public static cmd: number;
        constructor(p?: Ic2s_commerce_online_coins_request);
        public static encode(m: Ic2s_commerce_online_coins_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_commerce_online_coins_request;
    }

    interface Is2c_commerce_online_coins_reply {
        intervalTime: number;
        coins: number;
    }

    class s2c_commerce_online_coins_reply implements Is2c_commerce_online_coins_reply {
        public static cmd: number;
        constructor(p?: Is2c_commerce_online_coins_reply);
        public intervalTime: number;
        public coins: number;
        public static encode(m: Is2c_commerce_online_coins_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_commerce_online_coins_reply;
    }

    interface Ic2s_commerce_online_coins_fetch_request {
    }

    class c2s_commerce_online_coins_fetch_request implements Ic2s_commerce_online_coins_fetch_request {
        public static cmd: number;
        constructor(p?: Ic2s_commerce_online_coins_fetch_request);
        public static encode(m: Ic2s_commerce_online_coins_fetch_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_commerce_online_coins_fetch_request;
    }

    interface Is2c_commerce_online_coins_fetch_reply {
        coins: number;
    }

    class s2c_commerce_online_coins_fetch_reply implements Is2c_commerce_online_coins_fetch_reply {
        public static cmd: number;
        constructor(p?: Is2c_commerce_online_coins_fetch_reply);
        public coins: number;
        public static encode(m: Is2c_commerce_online_coins_fetch_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_commerce_online_coins_fetch_reply;
    }

    interface Is2c_commerce_free_reward_car_notify {
    }

    class s2c_commerce_free_reward_car_notify implements Is2c_commerce_free_reward_car_notify {
        public static cmd: number;
        constructor(p?: Is2c_commerce_free_reward_car_notify);
        public static encode(m: Is2c_commerce_free_reward_car_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_commerce_free_reward_car_notify;
    }

    interface Ic2s_commerce_free_reward_car_get_request {
    }

    class c2s_commerce_free_reward_car_get_request implements Ic2s_commerce_free_reward_car_get_request {
        public static cmd: number;
        constructor(p?: Ic2s_commerce_free_reward_car_get_request);
        public static encode(m: Ic2s_commerce_free_reward_car_get_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_commerce_free_reward_car_get_request;
    }

    interface Is2c_commerce_free_reward_car_get_reply {
        itemid: number;
        itemnum: number;
    }

    class s2c_commerce_free_reward_car_get_reply implements Is2c_commerce_free_reward_car_get_reply {
        public static cmd: number;
        constructor(p?: Is2c_commerce_free_reward_car_get_reply);
        public itemid: number;
        public itemnum: number;
        public static encode(m: Is2c_commerce_free_reward_car_get_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_commerce_free_reward_car_get_reply;
    }

    interface Ic2s_active_company_skill_request {
        skillid: number;
    }

    class c2s_active_company_skill_request implements Ic2s_active_company_skill_request {
        public static cmd: number;
        constructor(p?: Ic2s_active_company_skill_request);
        public skillid: number;
        public static encode(m: Ic2s_active_company_skill_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_active_company_skill_request;
    }

    interface Is2c_active_company_skill_reply {
        skillid: number;
    }

    class s2c_active_company_skill_reply implements Is2c_active_company_skill_reply {
        public static cmd: number;
        constructor(p?: Is2c_active_company_skill_reply);
        public skillid: number;
        public static encode(m: Is2c_active_company_skill_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_active_company_skill_reply;
    }

    interface Ip_beauty_info {
        id: number;
        level: number;
        star: number;
        exp: number;
        combat: number;
        gift?: (Ip_beauty_gift[]|null);
        skills?: (number[]|null);
    }

    class p_beauty_info implements Ip_beauty_info {
        constructor(p?: Ip_beauty_info);
        public id: number;
        public level: number;
        public star: number;
        public exp: number;
        public combat: number;
        public gift: Ip_beauty_gift[];
        public skills: number[];
        public static encode(m: Ip_beauty_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_beauty_info;
    }

    interface Ip_beauty_gift {
        giftId: number;
        giftValue: number;
    }

    class p_beauty_gift implements Ip_beauty_gift {
        constructor(p?: Ip_beauty_gift);
        public giftId: number;
        public giftValue: number;
        public static encode(m: Ip_beauty_gift, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_beauty_gift;
    }

    interface Ip_beauty_doll_machine {
        value: number;
        num: number;
        vipBuyNum: number;
        rewardList?: (number[]|null);
    }

    class p_beauty_doll_machine implements Ip_beauty_doll_machine {
        constructor(p?: Ip_beauty_doll_machine);
        public value: number;
        public num: number;
        public vipBuyNum: number;
        public rewardList: number[];
        public static encode(m: Ip_beauty_doll_machine, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_beauty_doll_machine;
    }

    interface Ip_beauty_energy {
        num: number;
        vipBuyNum: number;
        nextAppointmentTime: number;
    }

    class p_beauty_energy implements Ip_beauty_energy {
        constructor(p?: Ip_beauty_energy);
        public num: number;
        public vipBuyNum: number;
        public nextAppointmentTime: number;
        public static encode(m: Ip_beauty_energy, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_beauty_energy;
    }

    interface Ip_beauty_system {
        beauties?: (Ip_beauty_info[]|null);
        carnival: Ip_beauty_doll_machine;
        energy: Ip_beauty_energy;
    }

    class p_beauty_system implements Ip_beauty_system {
        constructor(p?: Ip_beauty_system);
        public beauties: Ip_beauty_info[];
        public carnival: Ip_beauty_doll_machine;
        public energy: Ip_beauty_energy;
        public static encode(m: Ip_beauty_system, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_beauty_system;
    }

    interface Ic2s_beauty_system_info_request {
    }

    class c2s_beauty_system_info_request implements Ic2s_beauty_system_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_beauty_system_info_request);
        public static encode(m: Ic2s_beauty_system_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_beauty_system_info_request;
    }

    interface Is2c_beauty_system_info_response {
        systemInfo: Ip_beauty_system;
    }

    class s2c_beauty_system_info_response implements Is2c_beauty_system_info_response {
        public static cmd: number;
        constructor(p?: Is2c_beauty_system_info_response);
        public systemInfo: Ip_beauty_system;
        public static encode(m: Is2c_beauty_system_info_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_beauty_system_info_response;
    }

    interface Ic2s_beauty_open_request {
        beautyId: number;
    }

    class c2s_beauty_open_request implements Ic2s_beauty_open_request {
        public static cmd: number;
        constructor(p?: Ic2s_beauty_open_request);
        public beautyId: number;
        public static encode(m: Ic2s_beauty_open_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_beauty_open_request;
    }

    interface Is2c_beauty_open_response {
        beautyInfo: Ip_beauty_info;
    }

    class s2c_beauty_open_response implements Is2c_beauty_open_response {
        public static cmd: number;
        constructor(p?: Is2c_beauty_open_response);
        public beautyInfo: Ip_beauty_info;
        public static encode(m: Is2c_beauty_open_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_beauty_open_response;
    }

    interface Is2c_auto_open_beauty_notify {
        beautyInfo?: (Ip_beauty_info[]|null);
    }

    class s2c_auto_open_beauty_notify implements Is2c_auto_open_beauty_notify {
        public static cmd: number;
        constructor(p?: Is2c_auto_open_beauty_notify);
        public beautyInfo: Ip_beauty_info[];
        public static encode(m: Is2c_auto_open_beauty_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_auto_open_beauty_notify;
    }

    interface Ic2s_beauty_lv_up_request {
        beautyId: number;
        itemId: number;
    }

    class c2s_beauty_lv_up_request implements Ic2s_beauty_lv_up_request {
        public static cmd: number;
        constructor(p?: Ic2s_beauty_lv_up_request);
        public beautyId: number;
        public itemId: number;
        public static encode(m: Ic2s_beauty_lv_up_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_beauty_lv_up_request;
    }

    interface Is2c_beauty_lv_up_response {
        beautyInfo: Ip_beauty_info;
    }

    class s2c_beauty_lv_up_response implements Is2c_beauty_lv_up_response {
        public static cmd: number;
        constructor(p?: Is2c_beauty_lv_up_response);
        public beautyInfo: Ip_beauty_info;
        public static encode(m: Is2c_beauty_lv_up_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_beauty_lv_up_response;
    }

    interface Ic2s_beauty_star_up_request {
        beautyId: number;
    }

    class c2s_beauty_star_up_request implements Ic2s_beauty_star_up_request {
        public static cmd: number;
        constructor(p?: Ic2s_beauty_star_up_request);
        public beautyId: number;
        public static encode(m: Ic2s_beauty_star_up_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_beauty_star_up_request;
    }

    interface Is2c_beauty_star_up_response {
        beautyInfo: Ip_beauty_info;
    }

    class s2c_beauty_star_up_response implements Is2c_beauty_star_up_response {
        public static cmd: number;
        constructor(p?: Is2c_beauty_star_up_response);
        public beautyInfo: Ip_beauty_info;
        public static encode(m: Is2c_beauty_star_up_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_beauty_star_up_response;
    }

    interface Ic2s_beauty_catch_doll_request {
        operator: number;
    }

    class c2s_beauty_catch_doll_request implements Ic2s_beauty_catch_doll_request {
        public static cmd: number;
        constructor(p?: Ic2s_beauty_catch_doll_request);
        public operator: number;
        public static encode(m: Ic2s_beauty_catch_doll_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_beauty_catch_doll_request;
    }

    interface Is2c_beauty_catch_doll_response {
        dollId?: (number[]|null);
    }

    class s2c_beauty_catch_doll_response implements Is2c_beauty_catch_doll_response {
        public static cmd: number;
        constructor(p?: Is2c_beauty_catch_doll_response);
        public dollId: number[];
        public static encode(m: Is2c_beauty_catch_doll_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_beauty_catch_doll_response;
    }

    interface Ic2s_beauty_get_excited_reward_request {
        rewardId: number;
    }

    class c2s_beauty_get_excited_reward_request implements Ic2s_beauty_get_excited_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_beauty_get_excited_reward_request);
        public rewardId: number;
        public static encode(m: Ic2s_beauty_get_excited_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_beauty_get_excited_reward_request;
    }

    interface Ic2s_beauty_appointment_request {
        beautyId: number;
    }

    class c2s_beauty_appointment_request implements Ic2s_beauty_appointment_request {
        public static cmd: number;
        constructor(p?: Ic2s_beauty_appointment_request);
        public beautyId: number;
        public static encode(m: Ic2s_beauty_appointment_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_beauty_appointment_request;
    }

    interface Is2c_beauty_appointment_reward_response {
        reward?: (Iappointment_reward[]|null);
        energy: Ip_beauty_energy;
    }

    class s2c_beauty_appointment_reward_response implements Is2c_beauty_appointment_reward_response {
        public static cmd: number;
        constructor(p?: Is2c_beauty_appointment_reward_response);
        public reward: Iappointment_reward[];
        public energy: Ip_beauty_energy;
        public static encode(m: Is2c_beauty_appointment_reward_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_beauty_appointment_reward_response;
    }

    interface Iappointment_reward {
        itemId: number;
        num: number;
    }

    class appointment_reward implements Iappointment_reward {
        constructor(p?: Iappointment_reward);
        public itemId: number;
        public num: number;
        public static encode(m: Iappointment_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): appointment_reward;
    }

    interface Ic2s_beauty_buy_num_request {
        select: number;
    }

    class c2s_beauty_buy_num_request implements Ic2s_beauty_buy_num_request {
        public static cmd: number;
        constructor(p?: Ic2s_beauty_buy_num_request);
        public select: number;
        public static encode(m: Ic2s_beauty_buy_num_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_beauty_buy_num_request;
    }

    interface Is2c_vip_buy_num_change_notify {
        change?: (Ibuy_num_change[]|null);
    }

    class s2c_vip_buy_num_change_notify implements Is2c_vip_buy_num_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_vip_buy_num_change_notify);
        public change: Ibuy_num_change[];
        public static encode(m: Is2c_vip_buy_num_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_vip_buy_num_change_notify;
    }

    interface Ibuy_num_change {
        select: number;
        num: number;
        why: number;
    }

    class buy_num_change implements Ibuy_num_change {
        constructor(p?: Ibuy_num_change);
        public select: number;
        public num: number;
        public why: number;
        public static encode(m: Ibuy_num_change, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): buy_num_change;
    }

    interface Ic2s_active_beauty_skill_request {
        beautyId: number;
        skillid: number;
    }

    class c2s_active_beauty_skill_request implements Ic2s_active_beauty_skill_request {
        public static cmd: number;
        constructor(p?: Ic2s_active_beauty_skill_request);
        public beautyId: number;
        public skillid: number;
        public static encode(m: Ic2s_active_beauty_skill_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_active_beauty_skill_request;
    }

    interface Is2c_active_beauty_skill_reply {
        beautyId: number;
        skillid: number;
    }

    class s2c_active_beauty_skill_reply implements Is2c_active_beauty_skill_reply {
        public static cmd: number;
        constructor(p?: Is2c_active_beauty_skill_reply);
        public beautyId: number;
        public skillid: number;
        public static encode(m: Is2c_active_beauty_skill_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_active_beauty_skill_reply;
    }

    interface Ip_equip_smelter {
        exp?: (number|null);
        level?: (number|null);
        combat?: (number|null);
        nextCombat?: (number|null);
    }

    class p_equip_smelter implements Ip_equip_smelter {
        constructor(p?: Ip_equip_smelter);
        public exp: number;
        public level: number;
        public combat: number;
        public nextCombat: number;
        public static encode(m: Ip_equip_smelter, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_equip_smelter;
    }

    interface Ic2s_equip_smelter_info_request {
    }

    class c2s_equip_smelter_info_request implements Ic2s_equip_smelter_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_equip_smelter_info_request);
        public static encode(m: Ic2s_equip_smelter_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_equip_smelter_info_request;
    }

    interface Is2c_equip_smelter_info_reply {
        smelter: Ip_equip_smelter;
    }

    class s2c_equip_smelter_info_reply implements Is2c_equip_smelter_info_reply {
        public static cmd: number;
        constructor(p?: Is2c_equip_smelter_info_reply);
        public smelter: Ip_equip_smelter;
        public static encode(m: Is2c_equip_smelter_info_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_equip_smelter_info_reply;
    }

    interface Is2c_equip_smelter_info_change_notify {
        equipSmelter: Ip_equip_smelter;
    }

    class s2c_equip_smelter_info_change_notify implements Is2c_equip_smelter_info_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_equip_smelter_info_change_notify);
        public equipSmelter: Ip_equip_smelter;
        public static encode(m: Is2c_equip_smelter_info_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_equip_smelter_info_change_notify;
    }

    interface Ip_squire_member_info {
        id: number;
        level: number;
        grade: number;
        exp: number;
        combat: number;
        skills?: (number[]|null);
        equips?: (Ip_squire_equip[]|null);
        isActivating: number;
    }

    class p_squire_member_info implements Ip_squire_member_info {
        constructor(p?: Ip_squire_member_info);
        public id: number;
        public level: number;
        public grade: number;
        public exp: number;
        public combat: number;
        public skills: number[];
        public equips: Ip_squire_equip[];
        public isActivating: number;
        public static encode(m: Ip_squire_member_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_squire_member_info;
    }

    interface Ic2s_squire_info_request {
    }

    class c2s_squire_info_request implements Ic2s_squire_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_squire_info_request);
        public static encode(m: Ic2s_squire_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_squire_info_request;
    }

    interface Is2c_squire_info_response {
        members?: (Ip_squire_member_info[]|null);
    }

    class s2c_squire_info_response implements Is2c_squire_info_response {
        public static cmd: number;
        constructor(p?: Is2c_squire_info_response);
        public members: Ip_squire_member_info[];
        public static encode(m: Is2c_squire_info_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_squire_info_response;
    }

    interface Ic2s_squire_member_open_request {
        memberId: number;
    }

    class c2s_squire_member_open_request implements Ic2s_squire_member_open_request {
        public static cmd: number;
        constructor(p?: Ic2s_squire_member_open_request);
        public memberId: number;
        public static encode(m: Ic2s_squire_member_open_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_squire_member_open_request;
    }

    interface Is2c_squire_member_open_respose {
        member: Ip_squire_member_info;
    }

    class s2c_squire_member_open_respose implements Is2c_squire_member_open_respose {
        public static cmd: number;
        constructor(p?: Is2c_squire_member_open_respose);
        public member: Ip_squire_member_info;
        public static encode(m: Is2c_squire_member_open_respose, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_squire_member_open_respose;
    }

    interface Ic2s_member_lv_up_request {
        itemId: number;
        memberId: number;
    }

    class c2s_member_lv_up_request implements Ic2s_member_lv_up_request {
        public static cmd: number;
        constructor(p?: Ic2s_member_lv_up_request);
        public itemId: number;
        public memberId: number;
        public static encode(m: Ic2s_member_lv_up_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_member_lv_up_request;
    }

    interface Ic2s_member_grade_up_request {
        memberId: number;
    }

    class c2s_member_grade_up_request implements Ic2s_member_grade_up_request {
        public static cmd: number;
        constructor(p?: Ic2s_member_grade_up_request);
        public memberId: number;
        public static encode(m: Ic2s_member_grade_up_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_member_grade_up_request;
    }

    interface Ic2s_member_equip_operating_request {
        memberId: number;
        operating: number;
        uniqId: (number|Long);
    }

    class c2s_member_equip_operating_request implements Ic2s_member_equip_operating_request {
        public static cmd: number;
        constructor(p?: Ic2s_member_equip_operating_request);
        public memberId: number;
        public operating: number;
        public uniqId: (number|Long);
        public static encode(m: Ic2s_member_equip_operating_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_member_equip_operating_request;
    }

    interface Is2c_member_change_response {
        member: Ip_squire_member_info;
        addExp?: (number|null);
    }

    class s2c_member_change_response implements Is2c_member_change_response {
        public static cmd: number;
        constructor(p?: Is2c_member_change_response);
        public member: Ip_squire_member_info;
        public addExp: number;
        public static encode(m: Is2c_member_change_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_member_change_response;
    }

    interface Is2c_member_open_notify {
        member: Ip_squire_member_info;
    }

    class s2c_member_open_notify implements Is2c_member_open_notify {
        public static cmd: number;
        constructor(p?: Is2c_member_open_notify);
        public member: Ip_squire_member_info;
        public static encode(m: Is2c_member_open_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_member_open_notify;
    }

    interface Ic2s_grow_road_date_request {
    }

    class c2s_grow_road_date_request implements Ic2s_grow_road_date_request {
        public static cmd: number;
        constructor(p?: Ic2s_grow_road_date_request);
        public static encode(m: Ic2s_grow_road_date_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_grow_road_date_request;
    }

    interface Is2c_grow_road_date_response {
        day: number;
        growRoad?: (Ip_grow_road_struct|null);
    }

    class s2c_grow_road_date_response implements Is2c_grow_road_date_response {
        public static cmd: number;
        constructor(p?: Is2c_grow_road_date_response);
        public day: number;
        public growRoad?: (Ip_grow_road_struct|null);
        public static encode(m: Is2c_grow_road_date_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_grow_road_date_response;
    }

    interface Ip_grow_road_struct {
        score: number;
        eventList?: (Ip_grow_road_target_struct[]|null);
        pointsRewardList?: (number[]|null);
        deadline?: (number|null);
    }

    class p_grow_road_struct implements Ip_grow_road_struct {
        constructor(p?: Ip_grow_road_struct);
        public score: number;
        public eventList: Ip_grow_road_target_struct[];
        public pointsRewardList: number[];
        public deadline: number;
        public static encode(m: Ip_grow_road_struct, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_grow_road_struct;
    }

    interface Ip_grow_road_target_struct {
        id: number;
        schedule: number;
        target?: (number|null);
        type: number;
    }

    class p_grow_road_target_struct implements Ip_grow_road_target_struct {
        constructor(p?: Ip_grow_road_target_struct);
        public id: number;
        public schedule: number;
        public target: number;
        public type: number;
        public static encode(m: Ip_grow_road_target_struct, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_grow_road_target_struct;
    }

    interface Is2c_grow_road_update_notify {
        eventList: Ip_grow_road_struct;
    }

    class s2c_grow_road_update_notify implements Is2c_grow_road_update_notify {
        public static cmd: number;
        constructor(p?: Is2c_grow_road_update_notify);
        public eventList: Ip_grow_road_struct;
        public static encode(m: Is2c_grow_road_update_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_grow_road_update_notify;
    }

    interface Ic2s_grow_road_get_reward_request {
        type: number;
        id: number;
    }

    class c2s_grow_road_get_reward_request implements Ic2s_grow_road_get_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_grow_road_get_reward_request);
        public type: number;
        public id: number;
        public static encode(m: Ic2s_grow_road_get_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_grow_road_get_reward_request;
    }

    interface Ic2s_query_open_activity_request {
    }

    class c2s_query_open_activity_request implements Ic2s_query_open_activity_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_open_activity_request);
        public static encode(m: Ic2s_query_open_activity_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_open_activity_request;
    }

    interface Is2c_query_open_activity_response {
        activityList?: (Ip_activity[]|null);
    }

    class s2c_query_open_activity_response implements Is2c_query_open_activity_response {
        public static cmd: number;
        constructor(p?: Is2c_query_open_activity_response);
        public activityList: Ip_activity[];
        public static encode(m: Is2c_query_open_activity_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_open_activity_response;
    }

    interface Ip_activity {
        activityId: number;
        endTime: number;
        openTime: number;
    }

    class p_activity implements Ip_activity {
        constructor(p?: Ip_activity);
        public activityId: number;
        public endTime: number;
        public openTime: number;
        public static encode(m: Ip_activity, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_activity;
    }

    interface Ic2s_query_activity_detail_request {
        activityId: number;
    }

    class c2s_query_activity_detail_request implements Ic2s_query_activity_detail_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_activity_detail_request);
        public activityId: number;
        public static encode(m: Ic2s_query_activity_detail_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_activity_detail_request;
    }

    interface Is2c_exchange_activity_response {
        lastExchange?: (Ip_activity_kv[]|null);
    }

    class s2c_exchange_activity_response implements Is2c_exchange_activity_response {
        public static cmd: number;
        constructor(p?: Is2c_exchange_activity_response);
        public lastExchange: Ip_activity_kv[];
        public static encode(m: Is2c_exchange_activity_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_exchange_activity_response;
    }

    interface Is2c_sort_gang_response {
        activityList?: (Ip_sort_gang[]|null);
    }

    class s2c_sort_gang_response implements Is2c_sort_gang_response {
        public static cmd: number;
        constructor(p?: Is2c_sort_gang_response);
        public activityList: Ip_sort_gang[];
        public static encode(m: Is2c_sort_gang_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_sort_gang_response;
    }

    interface Ip_sort_gang {
        gangName: string;
        rank: number;
        memberList?: (Ip_sort_member[]|null);
    }

    class p_sort_gang implements Ip_sort_gang {
        constructor(p?: Ip_sort_gang);
        public gangName: string;
        public rank: number;
        public memberList: Ip_sort_member[];
        public static encode(m: Ip_sort_gang, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_sort_gang;
    }

    interface Ip_sort_member {
        rank: number;
        name: string;
        combat: number;
        title: number;
        head: number;
    }

    class p_sort_member implements Ip_sort_member {
        constructor(p?: Ip_sort_member);
        public rank: number;
        public name: string;
        public combat: number;
        public title: number;
        public head: number;
        public static encode(m: Ip_sort_member, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_sort_member;
    }

    interface Ip_activity_kv {
        key: number;
        value: number;
    }

    class p_activity_kv implements Ip_activity_kv {
        constructor(p?: Ip_activity_kv);
        public key: number;
        public value: number;
        public static encode(m: Ip_activity_kv, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_activity_kv;
    }

    interface Ic2s_get_reward_request {
        activityId: number;
        rewardId: number;
    }

    class c2s_get_reward_request implements Ic2s_get_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_get_reward_request);
        public activityId: number;
        public rewardId: number;
        public static encode(m: Ic2s_get_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_get_reward_request;
    }

    interface Is2c_get_reward_response {
        activityId: number;
        wordExchangeLast?: (Ip_activity_kv|null);
    }

    class s2c_get_reward_response implements Is2c_get_reward_response {
        public static cmd: number;
        constructor(p?: Is2c_get_reward_response);
        public activityId: number;
        public wordExchangeLast?: (Ip_activity_kv|null);
        public static encode(m: Is2c_get_reward_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_get_reward_response;
    }

    interface Is2c_can_wear_title_notify {
        rank: number;
    }

    class s2c_can_wear_title_notify implements Is2c_can_wear_title_notify {
        public static cmd: number;
        constructor(p?: Is2c_can_wear_title_notify);
        public rank: number;
        public static encode(m: Is2c_can_wear_title_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_can_wear_title_notify;
    }

    interface Is2c_open_service_activity_lottery_response {
        point?: (number|null);
        currentDropId?: (number|null);
        remainDropList?: (Ip_kv_pair[]|null);
    }

    class s2c_open_service_activity_lottery_response implements Is2c_open_service_activity_lottery_response {
        public static cmd: number;
        constructor(p?: Is2c_open_service_activity_lottery_response);
        public point: number;
        public currentDropId: number;
        public remainDropList: Ip_kv_pair[];
        public static encode(m: Is2c_open_service_activity_lottery_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_open_service_activity_lottery_response;
    }

    interface Ic2s_open_service_activity_lottery_play_request {
    }

    class c2s_open_service_activity_lottery_play_request implements Ic2s_open_service_activity_lottery_play_request {
        public static cmd: number;
        constructor(p?: Ic2s_open_service_activity_lottery_play_request);
        public static encode(m: Ic2s_open_service_activity_lottery_play_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_open_service_activity_lottery_play_request;
    }

    interface Is2c_open_service_activity_lottery_play_response {
        itemId?: (number|null);
        num?: (number|null);
    }

    class s2c_open_service_activity_lottery_play_response implements Is2c_open_service_activity_lottery_play_response {
        public static cmd: number;
        constructor(p?: Is2c_open_service_activity_lottery_play_response);
        public itemId: number;
        public num: number;
        public static encode(m: Is2c_open_service_activity_lottery_play_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_open_service_activity_lottery_play_response;
    }

    interface Is2c_open_service_open_server_charge_response {
        point?: (number|null);
        rewardedList?: (number[]|null);
    }

    class s2c_open_service_open_server_charge_response implements Is2c_open_service_open_server_charge_response {
        public static cmd: number;
        constructor(p?: Is2c_open_service_open_server_charge_response);
        public point: number;
        public rewardedList: number[];
        public static encode(m: Is2c_open_service_open_server_charge_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_open_service_open_server_charge_response;
    }

    interface Ic2s_open_service_open_server_charge_get_reward_request {
        rewardId?: (number|null);
    }

    class c2s_open_service_open_server_charge_get_reward_request implements Ic2s_open_service_open_server_charge_get_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_open_service_open_server_charge_get_reward_request);
        public rewardId: number;
        public static encode(m: Ic2s_open_service_open_server_charge_get_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_open_service_open_server_charge_get_reward_request;
    }

    interface Is2c_open_service_open_server_charge_get_reward_response {
        rewardId?: (number|null);
    }

    class s2c_open_service_open_server_charge_get_reward_response implements Is2c_open_service_open_server_charge_get_reward_response {
        public static cmd: number;
        constructor(p?: Is2c_open_service_open_server_charge_get_reward_response);
        public rewardId: number;
        public static encode(m: Is2c_open_service_open_server_charge_get_reward_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_open_service_open_server_charge_get_reward_response;
    }

    interface Ic2s_daily_charge_request {
    }

    class c2s_daily_charge_request implements Ic2s_daily_charge_request {
        public static cmd: number;
        constructor(p?: Ic2s_daily_charge_request);
        public static encode(m: Ic2s_daily_charge_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_daily_charge_request;
    }

    interface Is2c_daily_charge_response {
        isGetFirstChargeReward: number;
        isFirstChargeOnThisDay: number;
    }

    class s2c_daily_charge_response implements Is2c_daily_charge_response {
        public static cmd: number;
        constructor(p?: Is2c_daily_charge_response);
        public isGetFirstChargeReward: number;
        public isFirstChargeOnThisDay: number;
        public static encode(m: Is2c_daily_charge_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_daily_charge_response;
    }

    interface Ic2s_daily_charge_get_daily_charge_info_request {
    }

    class c2s_daily_charge_get_daily_charge_info_request implements Ic2s_daily_charge_get_daily_charge_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_daily_charge_get_daily_charge_info_request);
        public static encode(m: Ic2s_daily_charge_get_daily_charge_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_daily_charge_get_daily_charge_info_request;
    }

    interface Is2c_daily_charge_get_daily_charge_info_response {
        roleCharge?: (Ip_daily_role_charge[]|null);
        roleChargeHistory?: (Ip_daily_charge[]|null);
        chargeNum: number;
    }

    class s2c_daily_charge_get_daily_charge_info_response implements Is2c_daily_charge_get_daily_charge_info_response {
        public static cmd: number;
        constructor(p?: Is2c_daily_charge_get_daily_charge_info_response);
        public roleCharge: Ip_daily_role_charge[];
        public roleChargeHistory: Ip_daily_charge[];
        public chargeNum: number;
        public static encode(m: Is2c_daily_charge_get_daily_charge_info_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_daily_charge_get_daily_charge_info_response;
    }

    interface Ip_daily_role_charge {
        charge: number;
        isGetReward: number;
    }

    class p_daily_role_charge implements Ip_daily_role_charge {
        constructor(p?: Ip_daily_role_charge);
        public charge: number;
        public isGetReward: number;
        public static encode(m: Ip_daily_role_charge, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_daily_role_charge;
    }

    interface Ip_daily_charge {
        charge: number;
        day: number;
        canGetReward: number;
    }

    class p_daily_charge implements Ip_daily_charge {
        constructor(p?: Ip_daily_charge);
        public charge: number;
        public day: number;
        public canGetReward: number;
        public static encode(m: Ip_daily_charge, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_daily_charge;
    }

    interface Ic2s_daily_charge_get_reward_request {
        rewardType: number;
        rewardId: number;
    }

    class c2s_daily_charge_get_reward_request implements Ic2s_daily_charge_get_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_daily_charge_get_reward_request);
        public rewardType: number;
        public rewardId: number;
        public static encode(m: Ic2s_daily_charge_get_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_daily_charge_get_reward_request;
    }

    interface Ic2s_open_function_query_reward_request {
    }

    class c2s_open_function_query_reward_request implements Ic2s_open_function_query_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_open_function_query_reward_request);
        public static encode(m: Ic2s_open_function_query_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_open_function_query_reward_request;
    }

    interface Is2c_open_function_query_reward_response {
        idList?: (number[]|null);
    }

    class s2c_open_function_query_reward_response implements Is2c_open_function_query_reward_response {
        public static cmd: number;
        constructor(p?: Is2c_open_function_query_reward_response);
        public idList: number[];
        public static encode(m: Is2c_open_function_query_reward_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_open_function_query_reward_response;
    }

    interface Ic2s_open_function_get_rewared_request {
        id: number;
    }

    class c2s_open_function_get_rewared_request implements Ic2s_open_function_get_rewared_request {
        public static cmd: number;
        constructor(p?: Ic2s_open_function_get_rewared_request);
        public id: number;
        public static encode(m: Ic2s_open_function_get_rewared_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_open_function_get_rewared_request;
    }

    interface Is2c_open_function_get_rewared_response {
        idList?: (number[]|null);
    }

    class s2c_open_function_get_rewared_response implements Is2c_open_function_get_rewared_response {
        public static cmd: number;
        constructor(p?: Is2c_open_function_get_rewared_response);
        public idList: number[];
        public static encode(m: Is2c_open_function_get_rewared_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_open_function_get_rewared_response;
    }

    interface Ip_dungeon_reward {
        id: number;
        type: number;
    }

    class p_dungeon_reward implements Ip_dungeon_reward {
        constructor(p?: Ip_dungeon_reward);
        public id: number;
        public type: number;
        public static encode(m: Ip_dungeon_reward, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_dungeon_reward;
    }

    interface Ip_schedule {
        chapterId: number;
        levelId: number;
        starId: number;
    }

    class p_schedule implements Ip_schedule {
        constructor(p?: Ip_schedule);
        public chapterId: number;
        public levelId: number;
        public starId: number;
        public static encode(m: Ip_schedule, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_schedule;
    }

    interface Ic2s_dungeon_query_info_request {
    }

    class c2s_dungeon_query_info_request implements Ic2s_dungeon_query_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_dungeon_query_info_request);
        public static encode(m: Ic2s_dungeon_query_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_dungeon_query_info_request;
    }

    interface Is2c_dungeon_query_info_response {
        max: Ip_kv_pair;
        strength: number;
        buyStrengthNum: number;
        rewardList?: (Ip_dungeon_reward[]|null);
        strengthList?: (Ip_kv_pair[]|null);
        scheduleList?: (Ip_schedule[]|null);
        chapterStarList?: (Ip_kv_pair[]|null);
    }

    class s2c_dungeon_query_info_response implements Is2c_dungeon_query_info_response {
        public static cmd: number;
        constructor(p?: Is2c_dungeon_query_info_response);
        public max: Ip_kv_pair;
        public strength: number;
        public buyStrengthNum: number;
        public rewardList: Ip_dungeon_reward[];
        public strengthList: Ip_kv_pair[];
        public scheduleList: Ip_schedule[];
        public chapterStarList: Ip_kv_pair[];
        public static encode(m: Is2c_dungeon_query_info_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_dungeon_query_info_response;
    }

    interface Is2c_dungeon_cost_strength_nofity {
        strength: number;
    }

    class s2c_dungeon_cost_strength_nofity implements Is2c_dungeon_cost_strength_nofity {
        public static cmd: number;
        constructor(p?: Is2c_dungeon_cost_strength_nofity);
        public strength: number;
        public static encode(m: Is2c_dungeon_cost_strength_nofity, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_dungeon_cost_strength_nofity;
    }

    interface Is2c_dungeon_schedule_change_notify {
        scheduleChange: Ip_schedule;
        chapterStarList: Ip_kv_pair;
        max?: (Ip_kv_pair|null);
    }

    class s2c_dungeon_schedule_change_notify implements Is2c_dungeon_schedule_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_dungeon_schedule_change_notify);
        public scheduleChange: Ip_schedule;
        public chapterStarList: Ip_kv_pair;
        public max?: (Ip_kv_pair|null);
        public static encode(m: Is2c_dungeon_schedule_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_dungeon_schedule_change_notify;
    }

    interface Ic2s_dungeon_strength_request {
        id: number;
        type: number;
    }

    class c2s_dungeon_strength_request implements Ic2s_dungeon_strength_request {
        public static cmd: number;
        constructor(p?: Ic2s_dungeon_strength_request);
        public id: number;
        public type: number;
        public static encode(m: Ic2s_dungeon_strength_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_dungeon_strength_request;
    }

    interface Is2c_dungeon_strength_response {
        strength: number;
        strengthList?: (Ip_kv_pair[]|null);
    }

    class s2c_dungeon_strength_response implements Is2c_dungeon_strength_response {
        public static cmd: number;
        constructor(p?: Is2c_dungeon_strength_response);
        public strength: number;
        public strengthList: Ip_kv_pair[];
        public static encode(m: Is2c_dungeon_strength_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_dungeon_strength_response;
    }

    interface Ic2s_dungeon_buy_strength_request {
    }

    class c2s_dungeon_buy_strength_request implements Ic2s_dungeon_buy_strength_request {
        public static cmd: number;
        constructor(p?: Ic2s_dungeon_buy_strength_request);
        public static encode(m: Ic2s_dungeon_buy_strength_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_dungeon_buy_strength_request;
    }

    interface Is2c_dungeon_buy_strength_response {
        strength: number;
        buyStrengthNum: number;
    }

    class s2c_dungeon_buy_strength_response implements Is2c_dungeon_buy_strength_response {
        public static cmd: number;
        constructor(p?: Is2c_dungeon_buy_strength_response);
        public strength: number;
        public buyStrengthNum: number;
        public static encode(m: Is2c_dungeon_buy_strength_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_dungeon_buy_strength_response;
    }

    interface Ic2s_dungeon_get_reward_request {
        id: number;
        type: number;
    }

    class c2s_dungeon_get_reward_request implements Ic2s_dungeon_get_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_dungeon_get_reward_request);
        public id: number;
        public type: number;
        public static encode(m: Ic2s_dungeon_get_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_dungeon_get_reward_request;
    }

    interface Is2c_dungeon_get_reward_response {
        rewardList?: (Ip_dungeon_reward[]|null);
    }

    class s2c_dungeon_get_reward_response implements Is2c_dungeon_get_reward_response {
        public static cmd: number;
        constructor(p?: Is2c_dungeon_get_reward_response);
        public rewardList: Ip_dungeon_reward[];
        public static encode(m: Is2c_dungeon_get_reward_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_dungeon_get_reward_response;
    }

    interface Ic2s_query_answer_info_request {
    }

    class c2s_query_answer_info_request implements Ic2s_query_answer_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_answer_info_request);
        public static encode(m: Ic2s_query_answer_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_answer_info_request;
    }

    interface Ip_answer_rank {
        rankPos?: (number|null);
        name?: (string|null);
        points?: (number|null);
    }

    class p_answer_rank implements Ip_answer_rank {
        constructor(p?: Ip_answer_rank);
        public rankPos: number;
        public name: string;
        public points: number;
        public static encode(m: Ip_answer_rank, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_answer_rank;
    }

    interface Is2c_query_answer_info_response {
        num: number;
        time: number;
        points: number;
        rewards?: (number[]|null);
        isFinish: number;
        isDetached: number;
        rankList?: (Ip_answer_rank[]|null);
        myRank: Ip_answer_rank;
    }

    class s2c_query_answer_info_response implements Is2c_query_answer_info_response {
        public static cmd: number;
        constructor(p?: Is2c_query_answer_info_response);
        public num: number;
        public time: number;
        public points: number;
        public rewards: number[];
        public isFinish: number;
        public isDetached: number;
        public rankList: Ip_answer_rank[];
        public myRank: Ip_answer_rank;
        public static encode(m: Is2c_query_answer_info_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_query_answer_info_response;
    }

    interface Ic2s_update_answer_schedule_request {
        num: number;
        result: number;
    }

    class c2s_update_answer_schedule_request implements Ic2s_update_answer_schedule_request {
        public static cmd: number;
        constructor(p?: Ic2s_update_answer_schedule_request);
        public num: number;
        public result: number;
        public static encode(m: Ic2s_update_answer_schedule_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_update_answer_schedule_request;
    }

    interface Is2c_update_answer_schedule_response {
        points?: (number|null);
    }

    class s2c_update_answer_schedule_response implements Is2c_update_answer_schedule_response {
        public static cmd: number;
        constructor(p?: Is2c_update_answer_schedule_response);
        public points: number;
        public static encode(m: Is2c_update_answer_schedule_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_update_answer_schedule_response;
    }

    interface Ic2s_answer_role_get_reward_request {
        num: number;
    }

    class c2s_answer_role_get_reward_request implements Ic2s_answer_role_get_reward_request {
        public static cmd: number;
        constructor(p?: Ic2s_answer_role_get_reward_request);
        public num: number;
        public static encode(m: Ic2s_answer_role_get_reward_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_answer_role_get_reward_request;
    }

    interface Is2c_answer_role_get_reward_response {
        rewards?: (number[]|null);
    }

    class s2c_answer_role_get_reward_response implements Is2c_answer_role_get_reward_response {
        public static cmd: number;
        constructor(p?: Is2c_answer_role_get_reward_response);
        public rewards: number[];
        public static encode(m: Is2c_answer_role_get_reward_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_answer_role_get_reward_response;
    }

    interface Ic2s_answer_finish_activity_request {
    }

    class c2s_answer_finish_activity_request implements Ic2s_answer_finish_activity_request {
        public static cmd: number;
        constructor(p?: Ic2s_answer_finish_activity_request);
        public static encode(m: Ic2s_answer_finish_activity_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_answer_finish_activity_request;
    }

    interface Ic2s_daily_activities_cumulative_online_info_request {
    }

    class c2s_daily_activities_cumulative_online_info_request implements Ic2s_daily_activities_cumulative_online_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_daily_activities_cumulative_online_info_request);
        public static encode(m: Ic2s_daily_activities_cumulative_online_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_daily_activities_cumulative_online_info_request;
    }

    interface Is2c_daily_activities_cumulative_online_info_response {
        rewardList?: (number[]|null);
    }

    class s2c_daily_activities_cumulative_online_info_response implements Is2c_daily_activities_cumulative_online_info_response {
        public static cmd: number;
        constructor(p?: Is2c_daily_activities_cumulative_online_info_response);
        public rewardList: number[];
        public static encode(m: Is2c_daily_activities_cumulative_online_info_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_daily_activities_cumulative_online_info_response;
    }

    interface Ic2s_daily_activities_cumulative_online_get_request {
        num: number;
    }

    class c2s_daily_activities_cumulative_online_get_request implements Ic2s_daily_activities_cumulative_online_get_request {
        public static cmd: number;
        constructor(p?: Ic2s_daily_activities_cumulative_online_get_request);
        public num: number;
        public static encode(m: Ic2s_daily_activities_cumulative_online_get_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_daily_activities_cumulative_online_get_request;
    }

    interface Is2c_daily_activities_cumulative_online_get_response {
        rewardList?: (number[]|null);
    }

    class s2c_daily_activities_cumulative_online_get_response implements Is2c_daily_activities_cumulative_online_get_response {
        public static cmd: number;
        constructor(p?: Is2c_daily_activities_cumulative_online_get_response);
        public rewardList: number[];
        public static encode(m: Is2c_daily_activities_cumulative_online_get_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_daily_activities_cumulative_online_get_response;
    }

    interface Ic2s_daily_activities_daily_special_info_request {
    }

    class c2s_daily_activities_daily_special_info_request implements Ic2s_daily_activities_daily_special_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_daily_activities_daily_special_info_request);
        public static encode(m: Ic2s_daily_activities_daily_special_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_daily_activities_daily_special_info_request;
    }

    interface Is2c_daily_activities_daily_special_info_response {
        free: number;
        cost1: number;
        cost2: number;
    }

    class s2c_daily_activities_daily_special_info_response implements Is2c_daily_activities_daily_special_info_response {
        public static cmd: number;
        constructor(p?: Is2c_daily_activities_daily_special_info_response);
        public free: number;
        public cost1: number;
        public cost2: number;
        public static encode(m: Is2c_daily_activities_daily_special_info_response, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_daily_activities_daily_special_info_response;
    }

    interface Ic2s_daily_activities_daily_special_get_request {
        num: number;
    }

    class c2s_daily_activities_daily_special_get_request implements Ic2s_daily_activities_daily_special_get_request {
        public static cmd: number;
        constructor(p?: Ic2s_daily_activities_daily_special_get_request);
        public num: number;
        public static encode(m: Ic2s_daily_activities_daily_special_get_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_daily_activities_daily_special_get_request;
    }

    interface Ip_boss_arrival_rank {
        roleId?: (number|null);
        name?: (string|null);
        rank?: (number|null);
        damage?: (number|null);
        fightScore?: (number|null);
    }

    class p_boss_arrival_rank implements Ip_boss_arrival_rank {
        constructor(p?: Ip_boss_arrival_rank);
        public roleId: number;
        public name: string;
        public rank: number;
        public damage: number;
        public fightScore: number;
        public static encode(m: Ip_boss_arrival_rank, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_boss_arrival_rank;
    }

    interface Ic2s_boss_arrival_query_info_request {
    }

    class c2s_boss_arrival_query_info_request implements Ic2s_boss_arrival_query_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_boss_arrival_query_info_request);
        public static encode(m: Ic2s_boss_arrival_query_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_boss_arrival_query_info_request;
    }

    interface Is2c_boss_arrival_query_info_reply {
        remainTimes?: (number|null);
    }

    class s2c_boss_arrival_query_info_reply implements Is2c_boss_arrival_query_info_reply {
        public static cmd: number;
        constructor(p?: Is2c_boss_arrival_query_info_reply);
        public remainTimes: number;
        public static encode(m: Is2c_boss_arrival_query_info_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_boss_arrival_query_info_reply;
    }

    interface Ic2s_boss_arrival_query_rank_request {
        monsterId?: (number|null);
    }

    class c2s_boss_arrival_query_rank_request implements Ic2s_boss_arrival_query_rank_request {
        public static cmd: number;
        constructor(p?: Ic2s_boss_arrival_query_rank_request);
        public monsterId: number;
        public static encode(m: Ic2s_boss_arrival_query_rank_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_boss_arrival_query_rank_request;
    }

    interface Is2c_boss_arrival_query_rank_reply {
        selfRank?: (number|null);
        selfDamage?: (number|null);
        rankList?: (Ip_boss_arrival_rank[]|null);
    }

    class s2c_boss_arrival_query_rank_reply implements Is2c_boss_arrival_query_rank_reply {
        public static cmd: number;
        constructor(p?: Is2c_boss_arrival_query_rank_reply);
        public selfRank: number;
        public selfDamage: number;
        public rankList: Ip_boss_arrival_rank[];
        public static encode(m: Is2c_boss_arrival_query_rank_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_boss_arrival_query_rank_reply;
    }

    interface Is2c_boss_arrival_boss_died_notify {
    }

    class s2c_boss_arrival_boss_died_notify implements Is2c_boss_arrival_boss_died_notify {
        public static cmd: number;
        constructor(p?: Is2c_boss_arrival_boss_died_notify);
        public static encode(m: Is2c_boss_arrival_boss_died_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_boss_arrival_boss_died_notify;
    }

    interface Is2c_boss_arrival_reward_notify {
        rewardType?: (number|null);
        rank?: (number|null);
        rewardList?: (Ip_kv_pair[]|null);
    }

    class s2c_boss_arrival_reward_notify implements Is2c_boss_arrival_reward_notify {
        public static cmd: number;
        constructor(p?: Is2c_boss_arrival_reward_notify);
        public rewardType: number;
        public rank: number;
        public rewardList: Ip_kv_pair[];
        public static encode(m: Is2c_boss_arrival_reward_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_boss_arrival_reward_notify;
    }

    interface Ip_each_sale_info {
        id: number;
        status: number;
        endTime: number;
    }

    class p_each_sale_info implements Ip_each_sale_info {
        constructor(p?: Ip_each_sale_info);
        public id: number;
        public status: number;
        public endTime: number;
        public static encode(m: Ip_each_sale_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_each_sale_info;
    }

    interface Is2c_flash_sale_change_notify {
        saleList?: (Ip_each_sale_info[]|null);
    }

    class s2c_flash_sale_change_notify implements Is2c_flash_sale_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_flash_sale_change_notify);
        public saleList: Ip_each_sale_info[];
        public static encode(m: Is2c_flash_sale_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_flash_sale_change_notify;
    }

    interface Ic2s_flash_sale_reward_get_request {
        saleId: number;
    }

    class c2s_flash_sale_reward_get_request implements Ic2s_flash_sale_reward_get_request {
        public static cmd: number;
        constructor(p?: Ic2s_flash_sale_reward_get_request);
        public saleId: number;
        public static encode(m: Ic2s_flash_sale_reward_get_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_flash_sale_reward_get_request;
    }

    interface Ic2s_query_flash_service_info_request {
        contentIdList?: (number[]|null);
    }

    class c2s_query_flash_service_info_request implements Ic2s_query_flash_service_info_request {
        public static cmd: number;
        constructor(p?: Ic2s_query_flash_service_info_request);
        public contentIdList: number[];
        public static encode(m: Ic2s_query_flash_service_info_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_query_flash_service_info_request;
    }

    interface Iplayer_data {
        id: number;
        data: number;
        status: number;
        extra: number;
    }

    class player_data implements Iplayer_data {
        constructor(p?: Iplayer_data);
        public id: number;
        public data: number;
        public status: number;
        public extra: number;
        public static encode(m: Iplayer_data, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): player_data;
    }

    interface Ip_content_info {
        contentId: number;
        mainId: number;
        type: number;
        smallType: number;
        countData?: (number|null);
        data?: (Iplayer_data[]|null);
        openTime?: (number|null);
        closeTime?: (number|null);
        effectOpenTime?: (number|null);
        effectCloseTime?: (number|null);
    }

    class p_content_info implements Ip_content_info {
        constructor(p?: Ip_content_info);
        public contentId: number;
        public mainId: number;
        public type: number;
        public smallType: number;
        public countData: number;
        public data: Iplayer_data[];
        public openTime: number;
        public closeTime: number;
        public effectOpenTime: number;
        public effectCloseTime: number;
        public static encode(m: Ip_content_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_content_info;
    }

    interface Is2c_flash_service_change_notify {
        contentList?: (Ip_content_info[]|null);
    }

    class s2c_flash_service_change_notify implements Is2c_flash_service_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_flash_service_change_notify);
        public contentList: Ip_content_info[];
        public static encode(m: Is2c_flash_service_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_flash_service_change_notify;
    }

    interface Is2c_flash_service_info_notify {
        contentList?: (Ip_content_info[]|null);
    }

    class s2c_flash_service_info_notify implements Is2c_flash_service_info_notify {
        public static cmd: number;
        constructor(p?: Is2c_flash_service_info_notify);
        public contentList: Ip_content_info[];
        public static encode(m: Is2c_flash_service_info_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_flash_service_info_notify;
    }

    interface Ic2s_flash_service_reward_get_request {
        contentId: number;
        subId: number;
    }

    class c2s_flash_service_reward_get_request implements Ic2s_flash_service_reward_get_request {
        public static cmd: number;
        constructor(p?: Ic2s_flash_service_reward_get_request);
        public contentId: number;
        public subId: number;
        public static encode(m: Ic2s_flash_service_reward_get_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_flash_service_reward_get_request;
    }

    interface Ic2s_flash_service_operation_request {
        contentId: number;
        subId: number;
        opt: number;
        extra: number;
    }

    class c2s_flash_service_operation_request implements Ic2s_flash_service_operation_request {
        public static cmd: number;
        constructor(p?: Ic2s_flash_service_operation_request);
        public contentId: number;
        public subId: number;
        public opt: number;
        public extra: number;
        public static encode(m: Ic2s_flash_service_operation_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_flash_service_operation_request;
    }

    interface Ip_cat_record {
        roleId: (number|Long);
        roleName: string;
        costType: number;
        costNum: number;
        winRate: number;
        winNum: number;
    }

    class p_cat_record implements Ip_cat_record {
        constructor(p?: Ip_cat_record);
        public roleId: (number|Long);
        public roleName: string;
        public costType: number;
        public costNum: number;
        public winRate: number;
        public winNum: number;
        public static encode(m: Ip_cat_record, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): p_cat_record;
    }

    interface Ic2s_cat_info {
    }

    class c2s_cat_info implements Ic2s_cat_info {
        public static cmd: number;
        constructor(p?: Ic2s_cat_info);
        public static encode(m: Ic2s_cat_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_cat_info;
    }

    interface Is2c_cat_info {
        serverTimes?: (Ip_kv_pair[]|null);
        goldNum: number;
        catTimes?: (Ip_kv_pair[]|null);
        catRecord?: (Ip_cat_record[]|null);
        isFinished: number;
        canGet?: (number[]|null);
    }

    class s2c_cat_info implements Is2c_cat_info {
        public static cmd: number;
        constructor(p?: Is2c_cat_info);
        public serverTimes: Ip_kv_pair[];
        public goldNum: number;
        public catTimes: Ip_kv_pair[];
        public catRecord: Ip_cat_record[];
        public isFinished: number;
        public canGet: number[];
        public static encode(m: Is2c_cat_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_cat_info;
    }

    interface Ic2s_cat_close_info {
    }

    class c2s_cat_close_info implements Ic2s_cat_close_info {
        public static cmd: number;
        constructor(p?: Ic2s_cat_close_info);
        public static encode(m: Ic2s_cat_close_info, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_cat_close_info;
    }

    interface Is2c_cat_change_notify {
        serverTimes?: (Ip_kv_pair[]|null);
        goldNum: number;
        catTimes?: (Ip_kv_pair[]|null);
        catRecord?: (Ip_cat_record[]|null);
        isFinished: number;
        canGet?: (number[]|null);
    }

    class s2c_cat_change_notify implements Is2c_cat_change_notify {
        public static cmd: number;
        constructor(p?: Is2c_cat_change_notify);
        public serverTimes: Ip_kv_pair[];
        public goldNum: number;
        public catTimes: Ip_kv_pair[];
        public catRecord: Ip_cat_record[];
        public isFinished: number;
        public canGet: number[];
        public static encode(m: Is2c_cat_change_notify, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_cat_change_notify;
    }

    interface Ic2s_draw_cat_request {
    }

    class c2s_draw_cat_request implements Ic2s_draw_cat_request {
        public static cmd: number;
        constructor(p?: Ic2s_draw_cat_request);
        public static encode(m: Ic2s_draw_cat_request, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): c2s_draw_cat_request;
    }

    interface Is2c_draw_cat_reply {
        serverTimes?: (Ip_kv_pair[]|null);
        goldNum: number;
        catTimes?: (Ip_kv_pair[]|null);
        catRecord?: (Ip_cat_record[]|null);
        isFinished: number;
        canGet?: (number[]|null);
        getId: number;
        getMulti: number;
    }

    class s2c_draw_cat_reply implements Is2c_draw_cat_reply {
        public static cmd: number;
        constructor(p?: Is2c_draw_cat_reply);
        public serverTimes: Ip_kv_pair[];
        public goldNum: number;
        public catTimes: Ip_kv_pair[];
        public catRecord: Ip_cat_record[];
        public isFinished: number;
        public canGet: number[];
        public getId: number;
        public getMulti: number;
        public static encode(m: Is2c_draw_cat_reply, w?: protobuf.Writer): protobuf.Writer;
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): s2c_draw_cat_reply;
    }
}

declare const enum PE {
    ENTY_TYPE_MONEY = 0, // 货币
    ENTY_TYPE_ITEM = 1, // 物品
    ENTY_TYPE_PET = 2, // 宠物
    ENTY_TYPE_EXP = 3, // 经验
    BLOCK_IP = 1, // 封IP
    BLOCK_ACCOUNT = 2, // 封账号
    BLOCK_CHAT = 3, // 禁言
    BLOCK_DEVICE = 4, // 封设备
    QUALITY_WHITE = 1, // 白色
    QUALITY_GREEN = 2, // 绿色
    QUALITY_BLUE = 3, // 蓝色
    QUALITY_PURPLE = 4, // 紫色
    QUALITY_ORANGE = 5, // 橙色
    QUALITY_RED = 6, // 红色
    QUALITY_DARK_GOLD = 7, // 暗金色
    QUALITY_PINK = 8, // 粉色
    QUALITY_COLORFUL = 9, // 幻彩色
    MALE = 1, // 男
    FEMALE = 2, // 女
    RACE_HUMAN = 1, // 人族
    RACE_DEMON = 2, // 妖族
    RACE_IMMORTAL = 3, // 仙族
    ROLE_INFO_NAME = 1, // 名字
    ROLE_INFO_SEX = 2, // 性别
    ROLE_INFO_LEVEL = 3, // 等级
    ROLE_INFO_EXP = 4, // 经验
    ROLE_INFO_TITLE = 5, // 称号
    ROLE_INFO_GOLD_UNBOUND = 6, // 非绑元宝
    ROLE_INFO_GOLD_BOUND = 7, // 绑定元宝
    ROLE_INFO_COIN = 8, // 金币
    ROLE_INFO_HP = 9, // 当前血量
    ROLE_INFO_TRANS = 10, // 转职次数
    ROLE_INFO_COMBAT = 11, // 战斗力
    ROLE_INFO_VIP = 12, // 实际VIP等级
    ROLE_EXP_PER_MINUTE = 13, // 每分钟打怪经验
    ROLE_EXP_ADDITIONAL_RATE = 14, // 打怪额外经验加成
    ROLE_PK = 15, // PK值
    ROLE_PK_END_TIME = 16, // PK值清零时间
    ROLE_CHARM = 17, // 魅力值
    ROLE_OVERFLOW_EXP = 18, // 溢出经验
    ROLE_DRAGON_SOUL_LV = 19, // 龙魂等级
    ROLE_SOULE_ESSENCE = 20, // 聚魂-精华
    ROLE_SOULE_JUHUN = 21, // 聚魂-聚魂石
    ROLE_SOULE_SHENHUN = 22, // 聚魂-神魂石
    ROLE_INFO_COIN_INVIT = 23, // 邀请币
    ROLE_ONLINE_TIME = 24, // 在线时长
    SCENE_TYPE_NORMAL = 2, // 安全场景（主城等不自动遇怪）
    MAIL_UNREAD = 0, // 未读
    MAIL_READED = 1, // 已读
    MAIL_EXTRACTED = 2, // 附件已领取
    ANNO_ARG_ROLE = 1, // 角色
    ANNO_ARG_ITEM = 2, // 物品
    ANNO_ARG_NUM = 3, // 数字
    ANNO_ARG_STRING = 4, // 字符串
    ANNO_ARG_LINK = 5, // 链接
    ANNO_ARG_INSTANCE = 6, // 副本
    ANNO_ARG_GANG = 7, // 集团
    ANNO_ARG_MATE = 8, // 伙伴
    ANNO_ARG_DICE = 9, // 骰子
    ANNO_ARG_ARRAY = 10, // 数组
    ANNO_ARG_EMPLOYEE = 11, //员工
    ANNO_LINK_ROLE = 1, 
    ANNO_LINK_TEAM = 2, // 队伍招募公告
    ANNO_LINK_BOSS = 3, // BOSS复活公告
    ANNO_LINK_CRYSTAL = 4, // 水晶
    WORLD_CHAT = 1, // 世界聊天
    GANG_CHAT = 2, // 帮会聊天
    TEAM_CHAT = 3, // 组队聊天(隐藏)
    NEARBY_CHAT = 4, // 附近聊天
    SYSTEM_CHAT = 5, // 系统聊天
    FIGHT_CHAT = 6, // 战斗聊天(个人)
    PERSON_CHAT = 7, // 私聊
    GANG_BOARD = 11, // 集团公告
    CHAT_TYPE_TEXT = 1, // 文本消息
    CHAT_TYPE_VOICE = 2, // 语音消息
    CHAT_TYPE_ITEM = 3, // 物品消息
    MONEY_MAX_NUM = 9223372036854775808, // 钱币上限 bigint上限math:pow(2,63)-1
    MONEY_ITEM_ID_MAX = 1000, //钱币ID上限,不包含此数值
    MONEY_TYPE_GOLD = 1, // 元宝
    MONEY_TYPE_GOLD_BOUND = 2, // 绑定元宝
    MONEY_TYPE_COIN = 3, // 铜币
    MONEY_TYPE_EXP = 5, // 人物经验
    MONEY_TYPE_FATE_LAND_STONE = 6, // 地元石
    MONEY_TYPE_FATE_SKY_STONE = 7, // 天元石
    MONEY_TYPE_FATE_LAND_GRID = 8, // 地符文碎片
    MONEY_TYPE_FATE_SKY_GRID = 9, // 天符文碎片
    MONEY_TYPE_SUIT_CLOTHES = 10, // 时装-五色晶石
    MONEY_TYPE_SUIT_WEAPON = 11, // 炫器-五色灵石
    MONEY_TYPE_SUIT_LIGHT = 12, // 炫光-五色仙器
    MONEY_TYPE_SUIT_BUBBLE = 13, // 气泡-五色仙露
    MONEY_TYPE_SUIT_FRAME = 14, // 相框-五色灵珠
    MONEY_TYPE_HONOR = 15, // 荣誉
    MONEY_TYPE_GANG_CONTRIBUTE = 16, // 集团贡献
    MONEY_TYPE_GANG_FUND = 17, // 集团资金
    MONEY_TYPE_XUNBAO_INTEGER = 18, // 寻宝积分
    MONEY_TYPE_SOUL_EQUIP_ESSENCE = 19, // 精华
    MONEY_TYPE_SOUL_EQUIP_JUHUN = 20, // 聚魂
    MONEY_TYPE_SOUL_EQUIP_SHENHUN = 21, // 神魂
    MONEY_TYPE_COIN_INVIT = 24, // 邀请币
    MONEY_TYPE_FIREWORKS_INTEGER = 50, // 烟花积分
    MONEY_TYPE_XU_NI_BI = 2001, // 虚拟币
    MONEY_TYPE_FLY_COIN = 2002, // 飞行币
    UNBOUND = 0, //不绑定
    BOUND = 1, //绑定
    BAG_TYPE_NORMAL = 1, //人物背包
    BAG_TYPE_STORE = 2, //人物仓库
    BAG_TYPE_FATE_SKY = 3, //人物符文-天符文背包
    BAG_TYPE_FATE_LAND = 4, //人物符文-地符文背包
    BAG_TYPE_EQUIP_XUNBAO = 5, //寻宝系统-装备寻宝仓库
    BAG_TYPE_ELF = 6, //仙灵背包
    BAG_TYPE_GANG_STORE = 7, //集团仓库
    BAG_TYPE_SOUL_EQUIP = 8, //聚魂背包
    BAG_TYPE_SQUIRE_EQUIP = 9, //战队背包
    ITEM_TYPE_MONEY = 1, //钱币类型的特殊道具
    ITEM_TYPE_EQUIP = 2, //人物装备
    ITEM_TYPE_PROPS = 3, // 道具和其他
    ITEM_TYPE_GEM = 4, //宝石
    ITEM_TYPE_FATE_LAND = 5, 
    ITEM_TYPE_FATE_SKY = 6, 
    ITEM_TYPE_ELF_EQUIP = 10, //仙灵装备
    ITEM_TYPE_SOUL_EQUIP = 11, //聚魂装备
    ITEM_TYPE_SQUIRE_EQUIP = 12, //战队装备
    TASK_TYPE_MAIN = 1, //主线
    TASK_TYPE_BRANCH = 2, //支线
    TASK_TYPE_BOUNTY = 3, //赏金循环任务
    TASK_TYPE_GANG = 4, //集团任务(需求未定，占位用)
    TASK_TYPE_TRANS = 5, //转职任务
    TASK_TYPE_NOVICE = 6, //新手任务
    TASK_TYPE_ANSWER = 7, //答题任务
    TASK_TARGET_NULL = 0, //直接交任务
    TASK_TARGET_KILL_MONSTER = 1, //击杀特定场景特定怪的次数
    TASK_TARGET_MONSTER_RW = 2, //击杀特定场景特定怪物掉落的特定道具数量
    TASK_TARGET_GATHER = 3, //采集特定场景特定采集物的次数
    TASK_TARGET_FINISH_INSTANCE = 4, //完成指定副本次数
    TASK_TARGET_KILL_INSTANCE_MONSTER = 5, //副本中杀怪数量
    TASK_TARGET_EQUIP_STRENGTHEN_LV_UP = 6, //装备强化等级
    TASK_TARGET_DRAGON_SOUL_LV_UP = 7, //龙魂升级
    TASK_TARGET_INST_TYPE_EXP_RW = 8, //单次经验副本中获得经验
    TASK_TARGET_FINISH_TOWER = 9, //通关诛仙塔
    TASK_TARGET_WORLD_BOSS_NUM = 10, //世界BOSS参与次数
    TASK_TARGET_DROP_ITEM = 11, //刷怪特殊掉落（进入背包）
    TASK_TARGET_ACTIVITY_POINTS = 12, //日常活跃度变更
    TASK_TARGET_SUBMIT_ESCORT = 13, //交镖
    TASK_TARGET_FRIEND_NUM = 14, //好友数量变化
    TASK_TARGET_FINISH_INSTANCE_TYPE = 15, //按指定星数通关指定难度的副本类型（星数向下兼容，难度绝对匹配）
    TASK_TARGET_WEAR_EQUIP = 16, //穿戴a件b阶c品质d星以上e部位的装备
    TASK_TARGET_KILL_ANY_MONSTER = 17, //击杀任意怪物
    TASK_TARGET_ROLE_LV_UP = 18, //玩家等级达到a级
    TASK_TARGET_EQUIP_STRENGTHEN_SUM = 19, //装备强化之和达到a
    TASK_TARGET_EQUIP_STRENGTHEN_TIMES = 20, //装备强化次数达到a
    TASK_TARGET_ACTIVE_FUN = 21, //激活宠物/翅膀/坐骑/法宝/神兵/披风
    TASK_TARGET_PET_HORSE_LV_UP = 22, //宠物/翅膀/坐骑/法宝/神兵/披风达到a级 data_pet_horse.lv
    TASK_TARGET_PET_UP_TIMES = 23, //宠物/翅膀/坐骑/法宝/神兵/披风升级a次
    TASK_TARGET_STATE_CHANGE = 24, //名望达到a
    TASK_TARGET_EQUIP_GEM_LV_SUM = 25, //装备镶嵌宝石等级之和达到a
    TASK_TARGET_FETCH_ACHI_RW = 26, //领取a次成就
    TASK_TARGET_FIGHT_COMBAT_CHANGE = 27, //战力达到a
    TASK_TARGET_FINISH_ARENA_CHALLENGE = 28, //竞技场参与a次
    TASK_TARGET_FETCH_LV_SUP_GIFT = 29, //冲级豪礼 奖励领取
    TASK_TARGET_TRANS = 30, //完成转职
    TASK_TARGET_WEAR_FATE = 31, //装备a个b品质C等级以上的符文
    TASK_TARGET_PET_LV_UP = 32, //宠物升级
    TASK_TARGET_WEAR_EQUIP_LV = 33, //穿戴A件B阶以上装备
    TASK_TARGET_FINISH_TASK = 34, //完成某个任务
    TASK_TARGET_ACCEPT_TASK = 35, //接受某个任务
    TASK_TARGET_COMMERCE_ACTIVITY = 36, //激活十方大厦
    TASK_TARGET_COMMERCE_LEVEL = 37, // 十方大厦等级
    TASK_TARGET_COMMERCE_BUY_LAND = 38, // 购买土地
    TASK_TARGET_COMMERCE_BUILDING = 39, // 建立商铺
    TASK_TARGET_COMMERCE_BUILDING_LEVEL = 40, // 店铺升级
    TASK_TARGET_COMMERCE_EMPLOYEE_QUALITY = 41, // 招募员工
    TASK_TARGET_COMMERCE_EMPLOYEE_RAISE_SALARY = 42, // 员工涨薪
    TASK_TARGET_COMMERCE_EMPLOYEE_GRADE = 43, // 员工升阶
    TASK_TARGET_COMMERCE_EMPLOYEE_GO_OUT = 44, // 员工派遣
    TASK_TARGET_GARAGE_LEVEL = 45, 
    TASK_TARGET_BEAUTY_OPEN = 46, // 红颜升级
    TASK_TARGET_BEAUTY_LEVEL = 47, // 红颜升级 
    TASK_TARGET_SQUIRE_LEVEL = 48, // 战队升级
    TASK_TARGET_EMPLOYEE_QUALITY_OPEN = 49, // 员工激活 
    TASK_TARGET_EMPLOYEE_QUALITY_LEVEL = 50, // 员工升级
    TASK_TARGET_ENTER_SCENE = 51, // 进入场景
    TASK_TARGET_GOODS = 52, // 使用物品
    TASK_TARGET_CAR_LEVEL = 53, // 车库升级
    TASK_TARGET_CAR_ID = 54, // 豪车激活
    TASK_NEW_PLAY_IN_OASIS = 55, // 进入绿洲
    TASK_TARGET_BEAUTY_APPOINTMENT = 56, // 红颜约会
    TASK_TARGET_GET_DUNGEON_REWARD = 57, // 领取推图奖励
    TASK_TARGET_SQUIRE_MEMBER_ACTIVATING = 58, // 激活战队成员
    TASK_TARGET_SQUIRE_MEMBER_GRADE = 59, // 战队升阶
    TASK_TARGET_ENTER_GANG = 60, // 加入集团
    TASK_TARGET_ROLE_WORLD_CHAT = 61, // 世界频道聊天发言
    TASK_DUNGEON_FINISH_MAP = 62, // 推图完成地图
    TASK_TARGET_BUY_FATE = 63, //兑换符文
    TASK_TARGET_FINISH_BOUNTY_TASK = 64, //完成赏金任务
    TASK_TARGET_EQUIP_GEM_LV = 65, //任意宝石等级达到
    TASK_TARGET_COMMERCE_BUILDING_STAR = 66, //指定店铺升星
    TASK_TARGET_COMMERCE_TARGET_BUILDING_STAR = 67, //任意店铺升星
    TASK_TARGET_CHALLENGE_BOSS = 68, //挑战副本BOSS
    TASK_TARGET_EQUIPMENT_COMPOSE = 90, //装备合成
    TASK_TARGET_SKILL_ACTIVE = 95, //技能激活
    TOTAL_AD_WATCH_TIMES_LIMIT = 10, 
    ZHUO_YUE = 1, //卓越套装id
    WAN_MEI = 2, //完美套装id
    ITEM_EXPERIENCE_EXP_CAT = 21201303, //体验-经验猫
    KICKOUT_SPEED_UP = 1, // 加速嫌疑
    KICKOUT_KEEPALIVE_TIMEOUT = 2, // 心跳超时
    KICKOUT_STOP_SERVER = 3, // 服务器维护
    KICKOUT_MULTI_CLIENT = 4, // 顶号登陆
    KICKOUT_BLACK_DEVICE = 5, // 封禁设备
    KICKOUT_BLACK_ACCOUNT = 6, // 封禁账号
    KICKOUT_BLACK_IP = 7, // 封禁IP
    KICKOUT_BACKSTAGE = 8, // 后台踢人
    ERR_SUCCESS = 0, // 成功
    ERR_INVALID_ARGUMENT = 1, // 非法参数
    ERR_NO_SUCH_OBJECT = 2, // 无此对象
    ERR_NAME_USED = 3, // 角色名已被占用
    ERR_ROLE_COUNT_LIMIT = 4, // 角色数量限制
    ERR_CLASS_NOT_OPEN = 5, // 职业未开放
    ERR_ROLE_NOT_EXIST = 6, // 角色不存在
    ERR_IP_BLOCKED = 7, // 禁IP
    ERR_ACCOUNT_BLOCKED = 8, // 禁账号
    ERR_SHUTUP = 9, // 禁言
    ERR_DEVICE_BLOCKED = 10, // 禁设备
    ERR_STATE_LIMIT = 11, // 状态限制
    ERR_IN_FIGHT = 12, // 战斗中
    ERR_ALREADY = 13, // 已处理某种状态
    ERR_LEVEL_LIMIT = 14, // 等级限制
    ERR_NO_COIN = 15, // 铜币不足
    ERR_IN_FORMATION = 17, // 在阵容中
    ERR_FULL = 18, // 背包空间不足
    ERR_NOT_ONLINE = 19, // 不在
    ERR_TRANS_LIMIT = 20, // 转生不足
    ERR_CANNOT_OPERATE = 22, // 自己加自己
    ERR_ERROR_M_FRIEND_FULL = 23, // 己方好友已达上限
    ERR_ERROR_O_FRIEND_FULL = 24, // 对方好友已达上限
    ERR_ERROR_APPLY_FULL = 25, // 己方好友已达上限
    ERR_ERROR_BLACK_FULL = 26, // 对方好友已达上限
    ERR_NOT_FRIEND = 27, // 双方不是好友
    ERR_SEX_LIMIT = 28, // 性别限制
    ERR_RACE_LIMIT = 29, // 种族限制
    ERR_NO_GOLD = 30, // 元宝不足
    ERR_NO_GOLD_BOUND = 31, // 绑定元宝不足
    ERR_NO_MONEY = 32, // 钱币不足
    ERR_PERMISSION_DENIED = 33, // 权限不足
    ERR_CHAT_TIME_LIMIT = 34, // 聊天间隔时间不足
    ERR_CANNOT_SEND_GIFT = 35, // 不能送礼给NPC
    ERR_CANNOT_RECRUIT_NPC = 36, // 不能招募NPC
    ERR_LACK_NPC_FAVOR = 37, // NPC好感度不足
    ERR_LACK_CHARM = 38, // 魅力不足
    ERR_GIFT_TIMES_LIMIT = 39, // 送礼次数限制
    ERR_CLASS_LIMIT = 40, // 门派限制
    ERR_NOT_WALKABLE = 41, // 该位置不可行走
    ERR_CANNOT_REVIVE = 42, // 不可复活
    ERR_EXP_LIMIT = 43, // 经验不足
    ERR_MONEY_MAX = 47, //钱币数量达到上限
    ERR_UNKNOW_MONEY_TYPE = 48, //未知货币类型
    ERR_LOGIN_VERIFY_FAIL = 50, // 登录校验失败
    ERR_LOGIN_VERIFY_EXCEPTION = 51, // 登录校验异常
    ERR_LOGIN_INVALID_ACCOUNT = 52, // 非法账号
    ERR_INVALID_SERVER_ID = 53, // 非法服务器ID
    ERR_SERVER_IN_MAINTAIN = 54, // 服务器维护中
    ERR_IMG_SEC_CHECK = 55, // 包含敏感字符
    ERR_ROLE_DEAD = 60, // 角色死亡
    ERR_ROLE_NOT_DEAD = 61, // 角色未死亡
    ERR_BATTLE_MODE_LIMIT = 62, // 当前场景不允许使用该模式
    ERR_NO_COIN_PRAY_TIMES = 63, // 金币祈福次数不足
    ERR_NO_EXP_PRAY_TIMES = 64, // 经验祈福次数不足
    ERR_ALREADY_IN_INSTANCE = 70, // 已在副本中
    ERR_NOT_IN_INSTANCE = 71, // 不在副本中
    ERR_INSTANCE_TIMES_LIMIT = 72, // 副本次数不足
    ERR_INSTANCE_LACK_ITEM = 73, // 副本道具不足
    ERR_INSTANCE_NOT_EXIST = 74, // 副本不存在
    ERR_CANNOT_ENTER_INSTANCE = 75, // 不允许进入此副本
    ERR_INSTANCE_IN_CD = 76, // 副本CD中
    ERR_VIP_BUY_INSTANCE_TIMES_LIMIT = 77, // VIP购买次数不足
    ERR_CANNOT_ENTER_INSTANCE_WHEN_IN_TEAM = 78, // 组队状态不能进入副本
    ERR_CANNOT_ENTER_INSTANCE_WHEN_SINGLE = 79, // 单人状态不能进入副本
    ERR_PRE_INSTANCE_NOT_FINISH = 80, // 前置副本未通关
    ERR_TEAM_MEMBER_OFFLINE = 81, // 队员已离线
    ERR_IN_INSTANCE = 82, // 在副本中
    ERR_LEVEL_SPURT_COUNT_LIMIT = 83, // 冲级礼包数量限制
    ERR_MEMBER_NUM_ERROR = 84, // 队伍人数不符不能进入副本
    ERR_VIP_LEVEL_LIMIT = 85, // VIP等级不足
    ERR_NO_COIN_INVIT = 86, // 邀请币不足
    ERR_INSTANCE_IN_PK_STATE = 87, // 处于PK状态中,不可退出副本
    ERR_ESCORT_NOT_ACCEPT = 91, //未押镖
    ERR_ESCORT = 92, //押镖中
    ERR_ESCORT_ACCEPT_NUM_LIMIT = 93, //当日接镖数已达上限
    ERR_ESCORT_NOT_EVENT = 94, //当前未触发押镖奇遇事件
    ERR_ESCORT_NOT_REFRESH = 95, //未刷镖
    ERR_SYSTEM = 99, // 网络超时
    ERR_NET_TIMEOUT = 100, // 连接超时
    ERR_NO_SUCH_PET = 101, // 宠物未找到
    ERR_MAX_PET_TRANS = 102, // 最大转生
    ERR_PET_STANDBY = 103, // 宠物已掠阵
    ERR_NO_FIGHT_PET = 104, // 无出战宠物
    ERR_NO_SUCH_BEAD = 105, // 灵珠未找到
    ERR_HAS_SAME_TYPE_BEAD = 106, // 已镶嵌同种类型的灵珠
    ERR_WRONG_PET_INCREASE_ITEM = 107, //错误的宠物升星道具
    ERR_CHANGE_PET_DOES_NOT_EXIST = 108, //要激活的幻化宠物不存在
    ERR_PET_LEVEL_FULL = 109, //宠物等级已满
    ERR_PET_STAR_RANK_FULL = 110, //宠物星阶已满
    ERR_CHANGE_PET_RANK_FULL = 111, //幻化宠物阶已满
    ERR_WRONG_CHANGE_PET_INCREASE_ITEM = 112, //错误的幻化宠物升阶道具
    ERR_WRONG_HORSE_INCREASE_ITEM = 113, //错误的坐骑升星道具
    ERR_CHANGE_HORSE_DOES_NOT_EXIST = 114, //要激活的幻化坐骑不存在
    ERR_WRONG_CHANGE_HORSE_INCREASE_ITEM = 115, //错误的幻化坐骑升阶道具
    ERR_HORSE_STAR_RANK_FULL = 116, //坐骑星阶已满
    ERR_CHANGE_HORSE_RANK_FULL = 117, //幻化坐骑阶已满
    ERR_WING_LEVEL_FULL = 118, //翅膀等级已满
    ERR_WRONG_WING_INCREASE_ITEM = 119, //错误的翅膀升级道具
    ERR_CHANGE_WING_DOES_NOT_EXIST = 120, //幻化翅膀不存在
    ERR_CHANGE_WING_MAX_LEVEL = 121, //幻化翅膀已达最大上限
    ERR_WRONG_TALISMAN_INCREASE_ITEM = 122, //错误的法宝提升道具
    ERR_CHANGE_TALISMAN_MAX_LEVEL = 123, //幻化法宝最大等级
    ERR_CHANGE_TALISMAN_DOES_NOT_EXIST = 124, //幻化法宝不存在
    ERR_TALISMAN_LEVEL_FULL = 125, //法宝等级已满
    ERR_WRONG_WEAPON_INCREASE_ITEM = 126, //错误的武器提升道具
    ERR_CHANGE_WEAPON_DOES_NOT_EXIST = 127, //幻化神兵不存在
    ERR_CHANGE_WEAPON_MAX_LEVEL = 128, //幻化武器最大等级
    ERR_WEAPON_LEVEL_FULL = 129, //神兵等级已满
    ERR_WRONG_CLOAK_INCREASE_ITEM = 130, //错误的披风提升道具
    ERR_CHANGE_CLOAK_DOES_NOT_EXIST = 131, //幻化披风不存在
    ERR_CHANGE_CLOAK_MAX_LEVEL = 132, //幻化披风等级已满
    ERR_CLOAK_LEVEL_FULL = 133, //披风等级已满
    ERR_GRID_NOT_OPEN = 134, //符文未开启
    ERR_FATE_NOT_IN_BAG = 135, //背包中没有该符文
    ERR_STONE_NOT_ENOUGH = 136, //地元石或天元石不足
    ERR_DEBRIS_NOT_ENOUGH = 137, //地格符文碎片或天格符文碎片不足
    ERR_FATE_BAG_FULL = 138, //符文背包已满
    ERR_CANNOT_EXCHANGE = 139, //地格和天格不能兑换
    ERR_FATE_LOCK = 140, //符文被锁定
    ERR_GRID_CANNOT_BE_REPLACED = 141, //符文不能被替换
    ERR_MAX_CHANGE_DRESS_UP_LEVEL = 142, //最大幻化装扮等级
    ERR_ARENA_RANKING_NOT_EXIST = 143, //竞技场排名不存在
    ERR_INCORRECT_ARENA_REWARD = 144, //错误的竞技场奖励
    ERR_RANKING_NEEDS_REFRESH = 145, //排名需要刷新
    ERR_ENCOURAGE_TIMES_FULL = 146, //激励次数已满
    ERR_EXCEED_BUY_CHALLENGE_TIMES = 147, //超过可购买次数
    ERR_CHALLENGE_TIMES_NOT_ENOUGH = 148, //可挑战次数不足
    ERR_ARENA_NOT_OPEN = 149, //竞技场未开放
    ERR_ARENA_HONOR_NOT_ENOUGH = 150, //竞技场荣誉值不足
    ERR_COMBAT_NOT_ENOUGH = 151, //战斗力不足
    ERR_STATE_FULL = 152, //名望已满
    ERR_STATE_NOT_OPEN = 153, //名望未开启
    ERR_DRAGON_SOUL_MAX_LV = 154, //龙魂已升级到顶级
    ERR_MONTH_CARD_NO_ACTIVE = 155, //月卡-未激活
    ERR_MONTH_CARD_HAD_ACTIVE = 156, //月卡-已激活
    ERR_MONTH_CARD_HAD_FETCH_RW = 157, //月卡-今日奖励已领取
    ERR_LIMITED_TIME_PET = 158, // 限时宠物不能使用该功能
    ERR_ELF_CFG = 180, // 未配置仙灵信息
    ERR_ELF_ACTIVE = 181, // 仙灵已激活
    ERR_ELF_NOT_ACTIVE = 182, // 仙灵未激活
    ERR_ELF_BATTLE_FLAG_NO_CHANGE = 183, // 仙灵出战状态无改变
    ERR_ELF_BATTLE_WEAR_EQUIP_NUM_LIMIT = 184, // 仙灵出战所需装备件数不足
    ERR_ELF_NOT_WEAR = 185, // 当前仙灵未穿戴任何装备
    ERR_ELF_NOT_WEAR_UNIQID = 186, // 当前仙灵未穿戴目标装备
    ERR_ELF_EQUIP_NOT_IN_BAG = 187, // 仙灵背包中找不到目标装备
    ERR_ELF_EQUIP_STRENGTH_LV_MAX = 188, // 仙灵装备已强化到最高级
    ERR_ELF_EQUIP_STRENGTH_COMSUME = 189, // 仙灵装备强化材料不足
    ERR_ELF_EQUIP_COLOR_LIMIT = 190, // 因仙灵装备品质限制，无法穿戴
    ERR_ELF_BATTLE_NUM_LIMIT = 191, // 仙灵出战人数达到上限
    ERR_ELF_BAG_FULL = 192, // 仙灵背包空间不足
    ERR_PET_IN_FIGHT = 200, // 宠物已出战
    ERR_LACK_ITEM = 201, // 道具不足
    ERR_ITEM_CFG = 202, // 道具配置有误
    ERR_ITEM_FOBIDDEN_SELL = 203, // 道具不可丢弃
    ERR_ITEM_USE_NUM_LIMIT = 204, // 道具使用数目达到上限
    ERR_ITEM_CAN_NOT_COMPOSE = 205, // 无法合成目标道具
    ERR_ITEM_NOT_SUBMIT_COMPOSE_ITEM = 206, // 未提交合成材料
    ERR_ITEM_NOT_USE_EFFECT = 207, // 未配置道具使用效果，无法使用
    ERR_STORE_FULL = 208, // 仓库空间满
    ERR_STORE_ITEM_NUM_LIMIT = 209, // 仓库内目标道具不足
    ERR_STORE_CELL_EXTRA_MAX = 210, // 仓库格子扩展数达到上限
    ERR_BAG_CELL_EXTRA_MAX = 211, // 背包格子扩展数达到上限
    ERR_EQUIP_CFG = 301, //没有配置这个装备
    ERR_EQUIP_FORGE_LIMIT = 302, //装备不允许被打造
    ERR_EQUIP_NOT_EXIST = 303, //装备扩展信息丢失
    ERR_EQUIP_NOT_NEXT_ID = 304, //没有下一级装备
    ERR_EQUIP_GEM_NOT_EXIST = 305, //此部位未镶嵌宝石
    ERR_EQUIP_NOT_NEED_FIX_LAST = 306, //耐久度满，无需修复
    ERR_EQUIP_GEM_POS_NOT_EXIST = 307, //宝石孔不存在
    ERR_EQUIP_GEM_LV_LIMIT = 308, //宝石等级不足
    ERR_EQUIP_GEM_TYPE_LIMIT = 309, //宝石类型不符
    ERR_EQUIP_POS_NOT_EXIST_WEAR = 310, //此位置未穿戴装备
    ERR_EQUIP_GEM_NOT_NEXT_LV = 311, //未配置下一级宝石
    ERR_EQUIP_NEXT_GEM_LV_LIMIT = 312, //下一级宝石的等级高于装备可镶嵌的宝石等级
    ERR_EQUIP_NEXT_GEM_TYPE_LIMIT = 313, //下一级宝石类型与可镶嵌类型不符
    ERR_EQUIP_GEM_NOT_NEXT_CONSUME = 314, //未配置下一级宝石的合成规则
    ERR_EQUIP_IS_WEARING = 315, //穿戴中
    ERR_EQUIP_BREAK_DOWN_LIMIT = 316, //此装备不能分解
    ERR_EQUIP_RECAST_LIMIT = 317, //此装备不能重铸
    ERR_EQUIP_ITEM_CAN_NOT_WEAR = 318, //此道具不可穿戴
    ERR_EQUIP_NOT_WEAR = 319, //未穿戴此装备
    ERR_EQUIP_NOT_ACTIVITY = 320, //装备未激活，不可穿戴
    ERR_EQUIP_MAX_STRENGTHEN = 321, //装备位置已强化到当前穿戴装备上限
    ERR_EQUIP_CAN_NOT_TAKEOFF = 322, //此装备穿戴后不可卸下
    ERR_EQUIP_NOT_EXIST_SUIT = 323, //套装不存在
    ERR_EQUIP_SUIT_POS_LIMIT = 324, //套装打造部位不符
    ERR_EQUIP_LV_LIMIT = 325, //装备等级限制
    ERR_EQUIP_NOT_EXIST_WASH_POS = 326, //洗练槽位未激活
    ERR_EQUIP_EXIST_WASH_POS = 327, //重复激活洗练槽位
    ERR_EQUIP_SUIT_COLOR_LIMIT = 328, //套装-材料装备的品质不符
    ERR_EQUIP_SUIT_STAR_LIMIT = 329, //套装-材料装备的星数不符
    ERR_EQUIP_SUIT_HAD_ACTIVITY = 330, //套装-重复激活
    ERR_EQUIP_INIT_CFG_PURPLE_NUM = 331, //装备紫色条目数配置错误
    ERR_EQUIP_INIT_CFG_BLUE_NUM = 332, //装备蓝色条目数配置错误
    ERR_EQUIP_SEX_LIMIT = 333, //装备性别限制
    ERR_EQUIP_NOT_EQUIP = 334, //非装备道具
    ERR_EQUIP_TAKE_APRAT_LIMIT = 335, //此装备不能拆解
    ERR_EQUIP_TAKE_APRAT_BOUND = 336, //绑定装备不能拆解
    ERR_EQUIP_TAKE_APRAT_WRONG = 337, //配置错误
    ERR_EQUIP_NOT_CASH_COUPON = 338, //不是代金卷
    ERR_EQUIP_NOT_CASH_COUPON_CONF = 339, //代金卷配置参数异常
    ERR_EQUIP_WASH_CARVE_FAIL = 340, //洗炼精琢失败
    ERR_EQUIP_WASH_CARVE_FULL = 341, //洗炼精琢已满
    ERR_MALL_ITEM_NOT_EXIST = 401, //商城-配置表中无此商品
    ERR_MALL_BUY_NUM_LIMIT = 402, //商城-已经达到限购上限
    ERR_MALL_CFG = 403, //商城错误
    ERR_MALL_USE_ITEM_LIMIT = 404, //商城-非道具商品不能直接使用
    ERR_ALREADY_INVEST = 410, // 已购买此类型投资计划
    ERR_NOT_INVEST = 411, // 未购买此类型投资计划
    ERR_ALREADY_FETCH_INVESTMENT_REWARD = 412, // 已领取投资计划奖励
    ERR_ALREADY_IN_TEAM = 500, // 已在队伍中
    ERR_TEAM_SCENE_LIMIT = 501, // 该场景不允许组队
    ERR_TEAM_FULL = 502, // 队伍已满
    ERR_ENTER_APPLY_QUEUE = 503, // 进入申请队列
    ERR_NO_TEAM = 504, // 不在队伍中
    ERR_NOT_LEADER = 505, // 不是队长
    ERR_TEAM_NOT_EXIST = 506, // 队伍不存在
    ERR_TEAM_MEMBER_NUM = 507, // 队伍人数不足
    ERR_NOT_SAME_NODE = 508, // 不同游戏服
    ERR_SAME_SEX = 509, // 队友同性别
    ERR_NO_OP_SEX_FRIEND_ONLINE = 510, // 无异性好友在线
    ERROR_GROUP_INSTANCE_LIMIT = 511, // 组队副本中，不能退出队伍
    ERR_TASK_CFG = 601, //任务不存在
    ERR_TASK_NOT_ACCEPT = 602, //任务未接取
    ERR_TASK_NOT_FINISH = 603, //任务未完成
    ERR_TASK_HAD_FINISH = 604, //任务已完成
    ERR_TASK_HAD_ACCEPT = 605, //任务已接取
    ERR_TASK_PRE_TASK_LIMIT = 606, //前置任务未完成
    ERR_TASK_TIMEOUT = 607, //任务已过期
    ERR_TASK_FINISH_BOUNTY_TASK = 608, //已完成今日所有赏金任务
    ERR_TASK_NOT_REST_TASK = 609, //没有可接取的任务
    ERR_TASK_NOT_MATCH_TODO_LIST = 610, //请求领取的任务不在可选列表中
    ERR_TASK_HAD_TODO_ID = 611, //已有备选任务
    ERR_TASK_NOT_PAY_WAY = 612, //未配置付费道具，无法通过付费立即完成任务
    ERR_TASK_NOT_JOIN_GANG = 613, //未加入集团，无法领取/提交集团任务
    ERR_TASK_FINISH_GANG_TASK = 614, //已完成本周所有集团任务
    ERR_TASK_BOUNTY_TASK_REPEAT = 615, //日常任务重复接取
    ERR_BATTLE_NO_SKILL = 701, // 未获得此技能
    ERR_BATTLE_SKILL_CD = 702, // 技能冷却中
    ERR_BATTLE_FAIL = 703, // 技能释放失败
    ERR_BUFF_RACK_LIMIT = 704, // BUFF叠加数限制
    ERR_ACTOR_IN_SAFE = 705, // 攻击方在安全区域内
    ERR_TARGET_IN_SATE = 706, // 目标在安全区域内
    ERR_INVALID_DROP_OWNER = 707, // 不是掉落物归属者
    ERR_DROP_NOT_EXIST = 708, // 掉落物不存在
    ERR_DEMON_TOWER_NOT_OPEN = 710, // 九层妖塔-未开启
    ERR_DEMON_TOWER_LONG_TIME = 711, // 九层妖塔-开启时间已超过10分钟
    ERR_DEMON_TOWER_HAS_FINISH = 712, // 九层妖塔-已通关
    ERR_DEMON_TOWER_LACK_SCENE = 713, // 九层妖塔-未找到场景
    ERR_DEMON_TOWER_ENTER_FAIL = 714, // 九层妖塔-进入活动失败
    ERR_INSTANCE_CANNOT_MOPOUT = 715, // 该副本不可扫荡
    ERR_INSTANCE_NOT_FINISH = 716, // 该副本未完成不可扫荡
    ERR_DEMON_TOWER_LV_LIMIT = 717, // 九层妖塔-层数限制
    ERR_INST_TOWER_LV_LIMIT = 718, // 诛仙塔-层数限制
    ERR_GATHER_OUT_OF_DIST = 719, // 不在采集物范围内
    ERR_IN_GATHER = 720, // 其他玩家正在采集
    ERR_GATHER_NOT_EXIST = 721, // 采集物不存在
    ERR_GATHER_TIMES_LIMIT = 722, // 采集次数限制
    ERR_ZONE_CITY_STATUS_LIMIT = 723, // 凌霄殿状态限制
    ERR_LOGIN_DAYS_NOT_ENOUGH = 724, // 七天登录次数不足
    ERR_NOT_COUPLE = 725, // 非伴侣
    ERR_IN_INSTANCE_CAN_NOT_ENTER_ZONE_CIETY = 726, // 请先退出当前副本再进入世界服
    ERR_IN_DEMON = 727, //  在九层妖塔中
    ERR_NO_COUPLE_INS_BUY_TIMES = 728, // 仙侣副本购买次数不足
    ERR_ACTIVITY_RW_CFG = 801, //活动奖励不存在
    ERR_ACTIVITY_RW_FETCH = 802, //活动奖励已领取
    ERR_ACTIVITY_POINTS_LIMIT = 803, //活动活跃度不足
    ERR_ACTIVITY_FIND_RW_NUM = 804, //可找回的活动次数不足
    ERR_ACTIVITY_MAX_LV = 805, //活跃等级已达上限
    ERR_ACTIVITY_EXP_LIMIT = 806, //活跃等级可用于升级的活跃不足
    ERR_ACTIVITY_LV_LIMIT = 807, //活跃等级限制
    ERR_ACTIVITY_OFFLINE_EXP_TIME_LIMIT = 808, //累计离线挂机时间已达上限
    ERR_ACTIVITY_ONLINE_GOLD_FETCH_NUN = 809, //在线领元宝：每天最多领取N次收益，今天已领取完毕
    ERR_SIGN_IN_DAYS_NOT_ENOUGH = 810, //累计签到天数不足
    ERR_ACHI_POINTS_LIMIT = 811, //成就点数不足
    ERR_ACHI_HAD_FETCH_RW = 812, //已领取过奖励
    ERR_ACHI_NOT_FINISH = 813, //未达成成就领取条件
    ERR_XUNBAO_NO_INTEGRAL = 830, //寻宝-积分不足
    ERR_XUNBAO_TYPE_ERROR = 831, //寻宝-类型错误
    ERR_XUNBAO_ITEM_NOT_EXIT = 832, //寻宝-商城商品不存在
    ERR_XUNBAO_NO_FREE_TIMES = 833, //寻宝-免费次数不够(免费时间未到)
    ERR_XUNBAO_BAG_FULL = 834, //装备寻宝背包空间不足
    ERR_MARKET_SALE_NOT_EXIT = 889, // 市场-订单不存在
    ERR_MARKET_SALE_WRONG_OWNER = 890, // 市场-购买自己的订单
    ERR_MARKET_ITEM_CANNOT_SALE = 891, // 市场-物无法出售
    ERR_MARKET_ERR_PASSWD = 892, // 市场-密码错误
    ERR_TEAM_MEMBER_LEAVE = 900, // 队伍成员远离
    ERR_INTIMACY_NOT_ENOUGH = 901, // 亲密度不足
    ERR_NOT_SINGLE = 902, // 对方已拥有配偶
    ERR_OPERATE_TIMEOUT = 903, // 操作超时
    ERR_IS_MARRIED = 904, // 已结婚
    ERR_GANG_NAME_EXIST = 910, //集团名称已存在
    ERR_GANG_CONDITION_NOT_MATCH = 911, //集团申请条件不满足
    ERR_GANG_NO_RIGHT = 912, //没有权限
    ERR_LACK_GANG_FUND = 913, //集团资金不足
    ERR_NO_GANG = 914, //没有集团
    ERR_NO_POSITION = 915, //职位没有位置
    ERR_NO_SUCH_APPLICANT = 916, //没有该申请者
    ERR_ALREADY_HAVE_GANG = 917, //已有集团
    ERR_GANG_LEVEL_UP_LIMIT = 918, //集团技能达到上限
    ERR_LACK_GANG_CONTRIBUTE = 919, //集团贡献不足
    ERR_GANG_EQUIP_NOT_CONTRIBUTE = 920, //集团-捐献装备条件不符
    ERR_LACK_STORE_POINT = 921, //集团-仓库积分不足
    ERR_NO_RECORD = 922, //集团-没有该记录
    ERR_GANG_MEMBER_FULL = 923, //集团-人数已满
    ERR_GANG_PAGE_OVER = 924, //集团-已经没有更多的集团了
    ERR_NO_GANG_WAR = 925, //集团战-该集团没有参加
    ERR_GANG_WAR_NOT_IN_SCENE = 926, //集团战-不在集团战场景内
    ERR_WRONG_CRYSTAL_ID = 927, //集团战-错误的水晶id
    ERR_NO_NEED_OCCUPY = 928, //集团战-己方已占领水晶
    ERR_ENEMY_OCCUPYING = 929, //集团战-敌方正在占领水晶
    ERR_OCCUPY_OVER_RANGE = 930, //集团战-占领水晶超出范围
    ERR_GANG_WAR_END = 931, //集团战-该集团当场已结束
    ERR_GANG_WAR_NOT_BEGIN = 932, //集团战-集团战未开始
    ERR_NOT_WINNER = 933, //集团战-不是至尊集团
    ERR_ALREADY_IN_GANG_WAR = 934, //集团战-已在集团战内
    ERR_JOIN_TIME_NO_ENOUGH = 935, //集团战-加入集团需要24小时才能进行集团战
    ERR_IN_WAR = 936, //集团战-集团战期间不允许自离集团
    ERR_NO_WINNER = 937, //集团战-无战胜集团
    ERR_HAVE_EATEN = 938, //集团晚宴-已经吃过了
    ERR_DINNER_NOT_START = 939, //集团晚宴-晚宴未开始
    ERR_GANG_STORE_FULL = 940, //集团-仓库空间满
    ERR_GANG_QUIT_WAR_RANK_LIMIT = 941, //集团战-不能解散上榜集团
    ERR_BEAST_IN_CD = 942, //集团神兽-挑战冷却
    ERR_BEAST_NO_FOOD = 943, //集团神兽-兽粮不足
    ERR_GANG_BEAST_OPEN_TIME = 944, //集团神兽-未在副本开启时间段内
    ERR_GANG_BEAST_CHALLAGE_TIME = 945, //集团神兽-本周挑战次数已达上限
    ERR_BEAST_INSTANCE_OPEN = 946, //集团神兽-副本开启中
    ERR_BEAST_INSTANCE_NOT_OPEN = 947, //集团神兽-副本未开启
    ERR_GANG_BEAST_CREATE_TIME_LIMIT = 948, //集团神兽-集团成立时间不足，不能开启活动
    ERR_BEAST_INSTANCE_JOIN_TIME_LIMIT = 949, //集团神兽-加入集团时间不足，不能进入副本
    ERR_NO_WELFARE_CONFIG = 950, //没有找到对应奖励
    ERR_EXCODE_USED = 960, //激活码已使用
    ERR_NO_EXCODE = 961, //无该激活码
    ERR_EXCODE_SAME_TYPE = 962, //已使用同类激活码
    ERR_MARRIAGE_WEDDING_NUM_LIMIT = 963, //预约次数为0，无法预约
    ERR_MARRIAGE_ALREADY_INVITE = 964, // 已邀请过
    ERR_MARRIAGE_NO_WEDDING = 965, // 当前无婚宴
    ERR_MARRIAGE_NO_PASSPORT = 966, // 你是婚礼主人，无需索要请柬
    ERR_MARRIAGE_ALREADY_PASSPORT = 967, // 你已是婚礼宾客，无需索要请柬
    ERR_MARRIAGE_ALREADY_SEND = 968, // 已发送索要请求
    ERR_MARRIAGE_NO_START = 969, // 婚礼还未开始
    ERR_MARRIAGE_NO_ENTER = 970, // 你不是宾客，无法参加婚宴
    ERR_MARRIAGE_NO_MASTER = 971, // 你不是婚礼主人
    ERR_ACTIVITY_NOT_OPEN = 972, //活动未开启
    ERR_SCENE_LIMIT = 973, //场景限制
    ERR_MARRIAGE_LACK_ITEM = 974, // 赠送祝福道具不足
    ERR_MARRIAGE_GUEST_LIMIT = 975, // 婚礼邀请次数不足
    ERR_MARRIAGE_BUY_LIMIT = 976, // 婚礼购买邀请次数超上限
    ERR_MARRIAGE_SCENE_NO_JOIN = 977, //玩家不在场景里
    ERR_MARRIAGE_NO_RESERVE = 978, //请先预约婚礼
    ERR_MARRIAGE_RESERVE_WEDDING = 980, //你已预约婚礼，不能离婚！
    ERR_MARRIAGE_NO_TIME = 981, //婚礼时间已被预约
    ERR_MARRIAGE_TIME_LIMIT = 982, //婚礼时间已过
    ERR_MARRIAGE_NO_PRESENT = 983, //婚礼主人到场才可以拜堂！
    ERR_MARRIAGE_SCENE_LIMIT = 984, // 该物品只能在结婚场景使用
    ERR_MARRIAGE_ALREADY_RESERVE = 985, // 你已预约过一场婚礼，请先参加完婚礼后再次预约！
    ERR_MARRIAGE_NO_COUPLE = 986, // 未结婚
    ERR_MARRIAGE_BOX_EXPIRED = 987, // 爱情宝匣过期或未购买
    ERR_MARRIAGE_BOX_VALID = 988, // 爱情宝匣已购买
    ERR_NO_MARRIAGE_LOCK_WEARED = 989, // 同心锁未穿戴
    ERR_NO_WEEK_CARD = 990, //充值-没有周卡
    ERR_WEEK_CARD_RECEIVED = 991, //充值-周卡当天已领取
    ERR_TOTAL_CHARGE_REWARD_RECEIVED = 992, //充值-该充值返利奖励已领取
    ERR_LACK_TOTAL_CHARGE = 993, //充值-累计充值不足
    ERR_FIVE_ELEMENT_SKILL_LIMIT = 1001, // 先领取奖励
    ERR_NO_CHARGE = 1002, //充值-没有充值
    ERR_CHARGE_REWARD_TYPE_ERROR = 1003, //充值-奖励类型错误
    ERR_LACK_DIALY_CHARGE = 1004, //充值-每日充值数不足
    ERR_LACK_CHARGE = 1005, //充值-充值不足
    ERR_CHARGE_NEXIST_ORDER = 1006, //充值订单不存在
    ERR_CHARGE_NOPROXY_ORDER = 1007, //该订单号不是代付订单
    ERR_CHARGE_LOACKED_ORDER = 1008, //订单号已经锁定
    ERR_CHARGE_ERR_ORDER_STATUS_PAY = 1009, //订单已经支付
    ERR_CHARGE_ORDER_TIMEOUT = 1010, //订单已经超时
    ERR_CHARGE_CREATEORDER_ERRTYPE = 1011, //订单类型异常
    ERR_CHARGE_CREATEORDER_ERRTYPEKEY = 1012, //订单充值ID不存在
    ERR_CHARGE_ORDERSTATUS_ERROR = 1013, //订单充值ID不存在
    ERR_CHARGE_NO_CASH_COUPON = 1014, //没有足够的代金卷
    ERR_CHARGE_ERR_ORDER_STATUS_COMPLETE = 1015, //订单已经完成
    ERR_NO_SEVEN_DAY_REWARD = 995, //七日冲榜-没有奖励可领取
    ERR_EXCODE_TIMEOUT = 996, //该激活码已过期
    ERR_EXCODE_BAG_FULL = 997, //背包已满，无法兑换
    ERR_IN_PEAK_MATCH = 998, //在巅峰竞技匹配状态中
    ERR_SOUL_EQUIP_BAG_FULL = 1100, //聚魂背包满
    ERR_SOUL_EQUIP_WEAR_SITE_FULL = 1101, //聚魂穿戴位置已满
    ERR_SOUL_EQUIP_ATTR_EXITED = 1102, //已存在相同属性聚魂
    ERR_SOUL_EQUIP_NO_SOUL = 1103, //未佩戴聚魂
    ERR_SOUL_LACK_ESSENCE = 1104, //缺少精华
    ERR_SOUL_NO_CONFIG_DATA = 1105, //缺少配置
    ERR_SOUL_BAD_EFFECT_NUM = 1106, //聚魂加成属性数量错误
    ERR_SOUL_NOT_WEARING = 1107, //未佩戴此聚魂
    ERR_SOUL_BAD_JUHUN = 1108, //存在非法聚魂
    ERR_SOUL_LACK_SOUL_EQUIP = 1109, //未拥有此聚魂
    ERR_CHECKPOINT_LEVEL = 1200, // 角色等级不足
    ERR_CHECKPOINT_KILL_COUNT = 1201, // 杀怪数量不足
    ERR_CHECKPOINT_NOT_OPEN = 1202, // 关卡未开启
    ERR_CHECKPOINT_CHALLENGING = 1203, // 关卡正在挑战中
    ERR_CHECKPOINT_AUTO_CHALLENGE = 1204, // 该关卡不可自动挑战
    ERR_NO_CONFIG = 1132, //缺少配置
    ERR_CRAZY_ACTIVITY_NOT_OPEN = 1133, //嗨点活动未开启
    ERR_CRAZY_ACTIVITY_LACK_POINT = 1134, //嗨点活动-缺少嗨点
    ERR_CRAZY_ACTIVITY_CLOSED = 1135, //嗨点活动已结束
    ERR_SHARE_AWARD_COND = 1400, // 奖励条件未达成
    ERR_SHARE_AWARD_GOT = 1401, // 奖励已领取
    ERR_SHARE_AWARD_RECHARGE_N = 1402, // 红包奖励不存在
    ERR_SHARE_AWARD_NO_CNT = 1403, // 没有领奖次数
    ERR_SHARE_AWARD_DAILY_MAX = 1404, // 当天奖励已达最大次数
    ERR_COMMERCE_EMPLOYEE_LEVEL_CFG = 1501, // 没找到等级配置
    ERR_COMMERCE_EMPLOYEE_STAR_CFG = 1502, // 没找到星级配置
    ERR_COMMERCE_EMPLOYEE_MARKET_CFG = 1503, // 没找到市场配置
    ERR_COMMERCE_EMPLOYEE_CFG = 1504, // 没找到员工配置
    ERR_COMMERCE_EMPLOYEE_NOT_FOUND = 1505, // 没找到员工
    ERR_COMMERCE_EMPLOYEE_LOW_GRADE = 1506, // 阶不够, 无法升级
    ERR_COMMERCE_EMPLOYEE_LOW_LEVEL = 1507, // 等级不够, 无法升阶
    ERR_COMMERCE_EMPLOYEE_ALREADY_GRADE = 1508, // 已经升阶, 请先提升等级
    ERR_COMMERCE_EMPLOYEE_GRADE_CFG = 1509, // 没找到阶级配置
    ERR_COMMERCE_COMPANY_CFG = 1521, // 未找到公司配置
    ERR_COMMERCE_COMPANY_LOW_FIGHT_SCORE = 1522, // 实力不足, 无法升级
    ERR_COMMERCE_LAND_CFG = 1531, // 未找到土地配置
    ERR_COMMERCE_LAND_ALREADY_OPEN = 1532, // 土地已经购买
    ERR_COMMERCE_LAND_LEVEL = 1533, // 公司等级不足, 无法开启土地
    ERR_COMMERCE_LAND_NOT_OPEN = 1534, // 土地未购买
    ERR_COMMERCE_LAND_ALREADY_BUILD = 1535, // 土地已经建造了建筑
    ERR_COMMERCE_BUILDING_CFG = 1541, // 未找到建筑配置
    ERR_COMMERCE_BUILDING_NOT_OPEN = 1542, // 建筑未开启
    ERR_COMMERCE_BUILDING_STAR_CFG = 1543, // 未找到建筑星级配置
    ERR_COMMERCE_BUILDING_EMPLOYEE_BUSY = 1544, // 员工已经在其他建筑中
    ERR_COMMERCE_BUILDING_EMPLOYEE_POSITION = 1545, // 位置未开启
    ERR_COMMERCE_BUILDING_EMPLOYEE_NOT_FOUND = 1546, // 这个位置没有员工
    ERR_COMMERCE_BUILDING_LEVEL_NOT_ENOUGH = 1547, // 公司总人数不足
    ERR_COMMERCE_BUILDING_STATE_LIMIT = 1548, // 名望限制无法升级
    ERR_COMMERCE_NOT_OPEN = 1599, // 商业系统未开启
    ERR_BEAUTY_ALREADY_OPEN = 2001, // 红颜已开启
    ERR_BEAUTY_ERROR_WAY = 2002, // 红颜需要自动开启
    ERR_BEAUTY_ID = 2003, // 错误的红颜id
    ERR_BEAUTY_NOT_OPEN = 2004, // 红颜还未开启
    ERR_BEAUTY_ALREADY_MAX_STAR = 2005, // 红颜已经达到最大星级
    ERR_BEAUTY_LV_UP_ITEM = 2006, // 错误的升级消耗品
    ERR_BEAUTY_ALREADY_SEND_MAX_ITEM = 2007, // 当天赠送礼物已达到上限
    ERR_BEAUTY_CATCH_NOT_ENOUGH = 2008, // 抓取娃娃次数不足
    ERR_BEAUTY_ALREADY_GET_REWARD = 2009, // 已领取该奖励
    ERR_BEAUTY_LEVEL_NOT_ENOUGH = 2010, // 红颜等级不够
    ERR_BEAUTY_ENERGY_NOT_ENOUGH = 2011, // 精力不足
    ERR_BEAUTY_BUY_NUM_NOT_ENOUGH = 2012, // 购买次数不足
    ERROR_BEAUTY_LEVEL_NOT_ENOUGH = 2013, // 红颜等级不足
    ERR_BEAUTY_ALREADY_MAX_LEVEL = 2014, // 红颜已达到最大等级
    ERR_BEAUTY_APPOINTMENT_CD = 2015, // 红颜约会cd中
    ERR_SQUIRE_MEMBER_ID = 2051, // 错误的战队成员id
    ERR_SQUIRE_NOT_OPEN = 2052, // 战队成员还未开启
    ERR_SQUIRE_GRADE_LESS = 2053, // 以达到当前品阶最大等级
    ERR_SQUIRE_MEMBER_MAX_LEVEL = 2054, // 已达到最大等级
    ERR_SQUIRE_CANNOT_UP_GRADE = 2055, // 目前还不能升阶
    ERR_SQUIRE_MAX_GRADE = 2056, // 已达到最大阶数
    ERR_SQUIRE_OPERATE = 2057, // 错误的操作类型
    ERR_SQUIRE_EQUIP_NOT_IN_BAG = 2058, // 背包中没有该装备
    ERR_SQUIRE_EQUIP_POS = 2059, // 错误的装备位置
    ERR_SQUIRE_EQUIP_NOT_IN_HAND = 2060, // 用户没有装备该武器
    ERR_GROW_ROAD_OUT_DAY = 2070, // 超过七天
    ERR_GROW_ROAD_ALREADY_GET_REWARD = 2071, // 已领取奖励
    ERR_GROW_ROAD_TASK_NOT_FINISH = 2072, // 任务没完成
    ERR_GROW_ROAD_NOT_OPEN = 2073, // 还未开启
    ERR_GROW_ROAD_SCORE_NOT_ENOUGH = 2074, // 分数不足
    ERR_GROW_ROAD_OUT_GET_TIME = 2075, // 超出领取时间
    ERR_OPEN_SERVICE_WORD_LIMIT = 2080, // 可领取奖励次数不足
    ERR_OPEN_SERVICE_ACTIVITY_NOT_OPEN = 2081, // 活动未开启
    ERR_OPEN_SERVICE_ACTIVITY_CLOSE = 2082, // 活动已关闭
    ERR_OPEN_SERVER_CHARGE_ALREADY_GET = 2083, // 已领取
    ERR_OPEN_SERVER_CHARGE_LOW_POINT = 2084, // 点数不足
    ERR_ACTIVITY_LOTTERY_LOW_POINT = 2085, // 点数不足
    ERR_ACTIVITY_LOTTERY_NONE = 2086, // 没有可抽的奖励了
    ERR_OPEN_SERVICE_SORT_GANG_NOT_IN_RANK = 2087, // 集团狂欢不在排行榜中
    ERR_SEVEN_DAY_NOT_FINISH = 2088, //开服任务未完成
    ERR_SEVEN_DAY_ALREADY_GET = 2089, //开服任务已领取
    ERR_RANK_INTER_NOT_FOUND = 2090, // 中心服务器连接不上
    ERR_RANK_UNDEFINED_LIST = 2091, // 未定义的排行榜
    ERR_RANK_INITGER_RANK_NOT_OPEN = 2092, // 跨服排行榜还未开启
    ERR_COIN_XU_NI_BI = 2093, // 虚拟币不足
    ERR_COIN_FLY = 2094, // 飞行币不足
    ERR_STATE_ALREADY_GET = 2095, // 名望已领取
    ERR_CHARGE_DAILY_ROLE_NOT_CHARGE = 2100, // 用户还未充值
    ERR_CHARGE_DAILY_ALREADY_GET_REWARD = 2101, // 已领取该奖励
    ERR_CHARGE_DAILY_CHARGE_NOT_ENOUGH = 2102, // 用户充值不足
    ERR_CHARGE_DAILY_ACCUMULATION = 2103, // 首冲当天不处理
    ERR_ANTI_ADDICITION_TIME_OUT = 2105, // 防沉迷, 三小时
    ERR_DUNGEON_NO_CHAPTER_ID = 2110, // 章节id不存在
    ERR_DUNGEON_ERR_TYPE = 2111, // 错误的奖励星数
    ERR_DUNGEON_ALREADY_GET_REWARD = 2112, // 已领取该奖励
    ERR_DUNGEON_STAR_NOT_ENOUGH = 2113, // 奖励需要星不足
    ERR_DUNGEON_STRENGTH_ID = 2114, // 错误的体力id
    ERR_DUNGEON_NOT_OPEN = 2115, // 领取体力还未开放
    ERR_DUNGEON_MAX_STRENGTH = 2116, // 已达到体力上限
    ERR_DUNGEON_BUY_NUM_LESS = 2117, // 体力购买次数不足
    ERR_DUNGEON_CANT_ENGER = 2118, // 需要通关之前关卡
    ERR_DUNGEON_STRENGTH_NOT_ENOUGH = 2119, // 所需体力不足
    ERR_VIP_GET_EXP = 2130, // 已领取该经验
    ERR_VIP_BUY_GIFT = 2131, // 已购买该礼包
    ERR_TOWER_ALREADY_GET_REWARD_TODAY = 2035, // 当天已领取每日奖励
    ERR_TOWER_NOT_LIMIT = 2036, // 挑战层数不足
    ERR_ARENA_RANKING_CHANGED = 2201, // 竞技场排名已经改变了
    ERR_ARENA_TIME_ERROR = 2202, // 竞技场还不能领取
    ERR_ANSWER_OUT_TIME_LIMIT = 2205, // 超出时间限制
    ERR_ANSWER_ACTIVITY_FINISH = 2206, // 活动结束
    ERR_ANSWER_COMMIT_NOT_LIMIT = 2207, // 重复答题
    ERR_ANSWER_POINTS_NOT_ENOUGH = 2208, // 积分不足
    ERR_DAILY_ACTIVITY_TIME_SHORT = 2210, // 累计在线时长不足
    ERR_TOTAL_AD_WATCH_TIMES_LIMIT = 2211, // 当天总广告播放次数已达上限
    ERR_FAST_COIN_AD_WATCH_TIMES_LIMIT = 2212, // 当天快速金币广告播放次数已达上限
    ERR_WORLD_BOSS_FAST_REVIVE_AD_WATCH_TIMES_LIMIT = 2213, // 当天快速复活广告播放次数已达上限
    ERR_EX_VIP_DAILY_EXP_AD_WATCH_TIMES_LIMIT = 2214, // 当天额外vip经验广告播放次数已达上限
    ERR_FREE_TREASURE_AD_WATCH_TIMES_LIMIT = 2215, // 当天免费寻宝广告播放次数已达上限
    ERR_FREE_GET_STRENGTH_AD_WATCH_TIMES_LIMIT = 2216, // 当天免费补领体力看广告播放次数已达上限
    ERR_SIGN_AD_WATCH_TIMES_LIMIT = 2217, // 当天签到看广告播放次数已达上限
    ERR_PRAY_AD_WATCH_TIMES_LIMIT = 2218, //当天看广告招商次数已达上限
    ERR_OFFLINE_REWARD_AD_WATCH_TIMES_LIMIT = 2219, //当天看广告离线奖励加倍次数已达上限
    ERR_FREE_CAR_REWARD_NOT_EXIST = 2220, //免费小车奖励不存在
    ERR_TDATACODE_SUCC = 2230, // 激活码使用成功
    ERR_TDATACODE_NEXIST = 2231, // 错误的激活码
    ERR_TDATACODE_USED = 2232, // 激活码已经被使用
    ERR_TDATACODE_GET_REWARD = 2234, // 已经领取过奖励
    ERR_TDATACODE_TIMEOUT = 2235, // 已经过期
    ERR_TDATACODE_ERROR_SERVER_ID = 2236, // 不能在本服领取
    ERR_TDATACODE_ERROR_PLATFORM = 2237, // 不能在本平台领取
    ERR_ACTIVITY_FINISHED = 2300, //活动结束
    ERR_ACTIVITY_INVALID = 2301, //活动失效
    ERR_ACTIVITY_REWARDED = 2302, //活动奖励已领取
    ERR_ACTIVITY_UNFINISHED = 2303, //条件不满足
    ERR_NOT_ACTIVE = 3000, //功能未激活
    ERR_NOT_END_CONTINUE_WINNER = 3001, // 没有终结连赢两次以上的集团
    ERR_ENCOURAGE_TIMES_LIMIT = 3002, // 鼓舞次数上限
    ERR_GANG_GUARD_NOT_BEGIN = 3003, //集团守卫-集团守卫未开始
    ERR_EQUIPMENT_OUT_ACTIVITY = 3004, // 装备已过期
    ERR_LIMIT_BOSS_NOT_OPEN = 3005, // 尚未达到活动开启时间
    ERR_LIMIT_BOSS_LACK_SCENE = 3006, // 限时魔王-未找到场景
    ERR_LUCKY_CAT_FINISHED = 3008, // 活动已经结束
    ERR_LUCKY_CAT_GOLD_NOT_ENOUGH = 3009, // 可用元宝不足
    ERR_LUCKY_CAT_SERVER_NOT_TIMES = 3010, // 全服剩余次数不足
    GP_DEMON_TOWER = 1005, // 九层妖塔
    GP_PEAK_MATCH = 1007, // 巅峰竞技
    GP_GANG_WAR = 2008, // 集团战
    GP_GANG_DINNER = 2009, // 集团晚宴
    GP_GANG_BEAST = 2010, // 集团神兽
    GP_WEDDING = 3001, // 婚礼
    GP_TREASURE_TIME_LIMIT = 2111, //限时寻宝活动
    GP_STATUS_NONE = 0, 
    GP_STATUS_PREPARE = 1, // 准备
    GP_STATUS_OPEN = 2, // 已开启
    GP_STATUS_OVER = 3, // 已结束
    REVIVE_SITU = 1, // 原地复活
    REVIVE_POINT = 2, // 复活点复活
    REVIVE_AD = 3, // 广告复活
    ST_BLOCK_OTHER_ROLE = 1, // 屏蔽他人
    ST_BLOCK_TITLE = 2, // 屏蔽称号
    ST_BLOCK_OTHER_EFFECT = 3, // 屏蔽他人特效
    ST_CLOSE_SHOCK = 4, // 关闭震屏
    ST_BLOCK_MONSTER = 5, // 屏蔽怪物模型
    ST_QUIET = 6, // 静音
    ST_BLOCK_FLOWER_GIFT = 7, // 屏蔽9朵以下送花提示
    ST_BLOCK_FLOWER_EFFECT = 8, // 屏蔽飘花特效
    ST_MUSIC_VOLUME = 9, // 音乐大小
    ST_SOUND_VOLUME = 10, // 音效大小
    ST_DEVOUR_EQUIPMENT = 11, // 自动吞噬紫装
    ST_BLOCK_PINK_EFFECT = 12, // 屏蔽界面粉装特效
    ST_MEMBER_SHOW = 13, // 战队成员是否展示
    COM_OTHER = 10, // 其他
    COM_BUG = 11, // BUG
    COM_COMPLAINT = 12, // 投诉
    COM_RECOMMEND = 13, // 建议
    PRAY_TYPE_COIN = 1, // 铜币祈福
    PRAY_TYPE_EXP = 2, // 经验祈福
    SCENE_PRACTICE = 1, // 练功区
    SCENE_MAIN_CITY = 2, // 主城
    SCENE_INSTANCE = 3, // 副本
    SCENE_ZONE_CITY = 4, // 区域主城
    SCENE_INTER = 5, // 跨服场景
    SCENE_PEAK_MATCH = 6, // 巅峰竞技
    SCENE_GANG_WAR = 7, // 集团争霸
    SCENE_ARENA = 8, // 竞技场
    ENTITY_ROLE = 0, // 角色
    ENTITY_MONSTER = 1, // 怪物
    ENTITY_GATHER = 2, // 采集物
    ENTITY_DROPITEM = 3, // 掉落物
    ENTITY_PET = 4, // 宠物
    ENTITY_NPC = 5, // NPC
    SR_LEVEL = 1, // 等级
    SR_CLASS_ID = 2, // 职业
    SR_CLASS_MODEL = 3, // 职业模型
    SR_MODEL_ID = 4, // 模型ID
    SR_TEAM_ID = 5, // 队伍ID
    SR_IS_LEADER = 6, // 是否队长
    SR_GANG_NAME = 7, // 集团名称
    SR_GANG_POS = 8, // 集团职位
    SR_TITLE_ID = 9, // 称号ID
    SR_WEAPON_ID = 10, // 武器ID
    SR_SPOUSE_NAME = 11, // 配偶名字
    SR_PK = 12, // PK值
    SR_MOVE_SPEED = 16, // 移动速度
    SR_HP = 17, // 当前血量
    SR_HP_MAX = 18, // 最大血量
    SR_NAME = 19, // 角色名字
    SR_MODE = 20, // 角色战斗模式
    SR_HORSE_TYPE = 21, // 坐骑类型
    SR_WING_TYPE = 22, // 翅膀类型
    SR_TALISMAN_TYPE = 23, // 法宝类型
    SR_WEAPON_TYPE = 24, // 神兵类型
    SR_CLOAK_TYPE = 25, // 披风类型
    SR_ACTIVITY_LV = 26, // 活跃度等级形象
    SR_DRESS_UP_CLOTHES_TYPE = 27, //时装类型
    SR_DRESS_UP_WEAPON_TYPE = 28, //炫器类型
    SR_DRESS_UP_LIGHT_TYPE = 29, //炫光类型
    SR_HORSE_POSITION_STATUS = 30, //坐骑状态
    SR_ESCORT = 31, //当前押镖ID
    SR_STATE_ID = 32, // 名望ID
    SR_GANG_ID = 33, //集团ID
    SR_COMBAT = 34, //人物的战斗力
    MON_HP = 1, // 当前血量
    MON_TYPE_ID = 2, // 类型ID
    MON_DROP_OWNER_ID = 4, // 怪物掉落归属者ID
    DROP_OWNER_NONE = 0, // 无归属
    DROP_OWNER_ROLE = 1, // 归属角色
    DROP_OWNER_TEAM = 2, // 归属队伍
    PEAK_MATCH_JOIN_COUNTER = 1, // 巅峰竞技参与次数
    PEAK_MATCH_GRADE_REWARD = 2, // 巅峰竞技段位奖励领取标志
    ISLAND_FIRST_GATHERED_COUNTER = 3, // 仙灵岛第一类采集物已采集次数
    ISLAND_SECOND_GATHERED_COUNTER = 4, // 仙灵岛第二类采集物已采集次数
    FIRST_CHARGE_REWARD_GET_MARK = 5, // 首冲奖励领取标记
    CONTINUOUS_CHARGE_DAYS = 6, // 连续充值天数
    DAILY_CHARGE_GOLD_NUM = 7, // 每日充值数量
    DAILY_CHARGE_REWARD_GET_MARK = 8, // 每日充值奖励领取标记
    CONTINUOUS_CHARGE_REWARD_GET_MARK = 9, // 连续充值奖励领取标记
    FISRST_CHARGE_ON_THIS_DAY = 10, // 首充当天标记1为当天0为非当天
    CHARGE_CONTINUOUS_DAYS_ADDED_TODAY = 11, // 当天是否修改连续充值天数
    PEAK_MATCH_EXP_COUNTER = 12, // 巅峰竞技参与获得经验
    MARRIAGE_DAYS = 14, // 仙侣结缘天数
    MARRIAGE_BOX_LEFT_DAYS = 15, // 爱情宝匣剩余天数
    MARRIAGE_BOX_BUY_REWARD = 16, // 爱情宝匣购买奖励领取标记
    MARRIAGE_BOX_DAILY_REWARD = 17, // 爱情宝匣每日奖励领取标记
    COUPLE_INSTANCE_TODAY_BUY_TIMES = 18, // 夫妻副本今日购买数量
    COUNT_GANG_CONTRIBUTE = 19, //集团贡献
    COUNT_SOUL_AUTO_DECOMPOSE = 20, //聚魂自动分解标志
    COUNT_SOUL_AUTO_DECOMPOSE_COLOR = 21, //聚魂自动分解品质类型
    CRAZY_LOG_LOGIN = 24, //嗨点活动登录日志标记
    BUY_DEFEND_REWARD_GET_MARK = 25, //购买守护“招财童子” 0未支付 1已支付可领取 2已领取
    DAILY_MALL_BUYLIMIT = 26, //X元限购的购买记录
    VIP_TRIAL_INSTANCE_CNT = 27, //vip体验卡魔王副本进入次数
    DAILY_MALL_BUYLIMIT_REWARD = 28, //领奖状态0未领取 1可领取 2已领取
    FIRST_SHARE_AWARD_STATE = 29, //首次分享奖励状态 0-未领取 1-已领取
    FIRST_CHARGE_TIMESTAMP = 30, //首充时间戳 0:未充值 其他首次充值时间
    SUM_CHARGE_NUM = 31, // 充值总数
    TOTAL_AD_WATCH_TIMES = 32, //广告观看总次数
    OFFLINE_AWARD_AD_WATCH_TIMES = 33, //离线收益广告观看次数
    FAST_COIN_AD_WATCH_TIMES = 34, //快速金币广告观看次数
    EX_VIP_DAILY_EXP_AD_WATCH_TIMES = 35, //vip每日看广告额外领取经验次数
    WORLD_BOSS_FAST_REVIVE_AD_WATCH_TIMES = 36, //世界boss每日看广告免费快速复活次数
    FREE_TREASURE_RUNE_AD_WATCH_TIMES = 37, //看广告免费符文寻宝次数
    FREE_GET_STRENGTH_AD_WATCH_TIMES = 38, //看广告免费补领体力次数
    SIGN_AD_WATCH_TIMES = 39, //看广告签到次数
    PRAY_AD_WATCH_TIMES = 40, //看广告免费招商次数
    FREE_TREASURE_EQUIPMENT_AD_WATCH_TIMES = 41, //看广告免费装备寻宝次数
    FREE_TREASURE_PEAK_AD_WATCH_TIMES = 42, //看广告免费符文巅峰寻宝次数
    FREE_TREASURE_SUPREMACY_AD_WATCH_TIMES = 43, //看广告免费至尊寻宝次数
    FREE_EXP_CAT_AD_WATCH_TIMES = 45, //看广告免费领取经验猫时长次数
    FREE_TREASURE_TIME_LIMIT_AD_WATCH_TIMES = 46, //看广告免费限时寻宝次数
    FREE_DAY_LIMIT_GATHER_NORMAL_CRYSTAL_NUM = 47, //个人每日采集普通水晶次数
    FREE_DAY_LIMIT_GATHER_ADVANCE_CRYSTAL_NUM = 48, //个人每日采集高级水晶次数
    RANK_TYPE_ROLE_COMBAT = 1, // 战力
    RANK_TYPE_ROLE_LEVEL = 2, // 等级
    RANK_TYPE_ROLE_HORSE = 3, // 坐骑
    RANK_TYPE_ROLE_BEAULTY = 4, // 红颜
    RANK_TYPE_ROLE_SQUIRE = 5, // 战队 不用
    RANK_TYPE_ROLE_PET = 5, // 宠物
    RANK_TYPE_ROLE_WEAPON = 6, // 神兵
    RANK_TYPE_ROLE_WING = 7, // 翅膀
    RANK_TYPE_ROLE_CHARM = 8, // 魅力
    RANK_TYPE_ROLE_GEM = 9, // 宝石
    RANK_TYPE_ROLE_CHARGE = 10, // 充值
    RANK_TYPE_ROLE_TOWER = 11, // 符文塔
    RANK_TYPE_ROLE_ANSWER = 12, // 答题
    RANK_TYPE_CROSS_ROLE_COMBAT = 1, // 战力
    RANK_TYPE_CROSS_ROLE_LEVEL = 2, // 等级
    RANK_TYPE_CROSS_ROLE_HORSE = 3, // 坐骑
    RANK_TYPE_CROSS_ROLE_BEAULTY = 4, // 红颜
    RANK_TYPE_CROSS_ROLE_SQUIRE = 5, // 战队
    RANK_TYPE_CROSS_ROLE_WEAPON = 6, // 神兵
    RANK_TYPE_CROSS_ROLE_WING = 7, // 翅膀
    RANK_TYPE_CROSS_ROLE_CHARM = 8, // 魅力
    RANK_TYPE_CROSS_ROLE_CHARGE = 9, // 充值
    RANK_TYPE_SEVEN_DAY_GRADE = 201, // 七日冲榜-等级
    RANK_TYPE_SEVEN_DAY_BEAUTY = 202, // 七日冲榜-红颜
    RANK_TYPE_SEVEN_DAY_WEAPON = 203, // 七日冲榜-神兵
    RANK_TYPE_SEVEN_DAY_CHARGE = 204, // 七日冲榜-充值
    RANK_TYPE_SEVEN_DAY_GEMS = 205, // 七日冲榜-镶嵌
    RANK_TYPE_SEVEN_DAY_COMBAT = 206, // 七日冲榜-战力
    RANK_TYPE_SEVEN_DAY_PET = 207, // 七日冲榜-宠物
    DAMAGE_HIT = 1, // 命中
    DAMAGE_DODGE = 2, // 闪避
    DAMAGE_CRIT = 3, // 暴击
    DAMAGE_KNOWING = 4, // 会心
    DAMAGE_PARRY = 5, // 格挡
    DAMAGE_INVINCIBLE = 6, // 无敌
    DAMAGE_SHIELD = 7, // 护盾吸收伤害
    BATTLE_MODE_PEACE = 0, // 和平模式
    BATTLE_MODE_FORCE = 1, // 强制模式
    BATTLE_MODE_ALL = 2, // 全体模式
    INST_TYPE_WORLD_BOSS = 1, // 世界BOSS
    INST_TYPE_VIP_BOSS = 2, // VIP BOSS
    INST_TYPE_ROLE_BOSS = 3, // 个人BOSS
    INST_TYPE_ANCIENT_BOSS = 4, // 上古禁区
    INST_TYPE_EXP = 5, // 经验副本
    INST_TYPE_TASK = 6, // 任务副本
    INST_TYPE_TOWER = 7, // 诛仙塔副本
    INST_TYPE_EQUIPMENT = 8, // 装备副本
    INST_TYPE_PET = 9, // 宠物副本
    INST_TYPE_COIN = 10, // 金币副本
    INST_TYPE_ISLAND = 11, // 仙灵岛(跨服)
    INST_TYPE_COUPLE = 12, // 仙侣副本
    INST_TYPE_GANG_BEAST = 13, // 集团神兽副本
    INST_TYPE_HOOK = 14, // 挂机副本
    INST_TYPE_VIPTRIAL_INSTANCE = 15, // 魔王体验副本
    INST_TYPE_DUNGEON = 16, // 地下城
    INST_TYPE_BOSS_ARRIVAL = 17, // 魔王降临
    INST_TYPE_GANG_GUARD = 18, //集团守卫
    INST_TYPE_LIMIT_BOSS = 19, //限时魔王
    INST_RESULT_NONE = 0, // 未分胜负
    INST_RESULT_LOSE = 1, // 失败
    INST_RESULT_WIN = 2, // 胜利
    LAND_GRID = 1, //地格
    SKY_GRID = 2, //天格
    FATE_UNLOCK = 0, //解锁,未锁定
    FATE_LOCK = 1, //加锁,锁定
    DRESS_UP_CLOTHES = 7, //时装
    DRESS_UP_WEAPON = 8, //炫器
    DRESS_UP_LIGHT = 9, //炫光
    DRESS_UP_BUBBLE = 10, //气泡
    DRESS_UP_FRAME = 11, //相框
    DRESS_UP_HEAD = 12, //头像
    DRESS_UP_BG = 13, //背景
    DRESS_UP_UNLOCK = 0, //解锁,未锁定
    DRESS_UP_LOCK = 1, //加锁,锁定
    MEMBER_FULL = 1, // 成员已满
    NOT_MATCH_LEVEL_LIMIT = 2, // 等级不足申请条件
    NOT_MATCH_COMBAT_LIMIT = 3, // 战力不足申请条件
    ALREADY_HAVE_GANG = 4, // 已有集团
    GANG_NOT_EXIST = 5, // 集团不存在
    JOB_LEADER = 1, //盟主
    JOB_DEPUTY = 2, //副盟主
    JOB_ELDER = 3, //长老
    JOB_MEMBER = 4, //普通成员
    CONTRIBUTE = 1, //捐献
    EXCHANGE = 2, //兑换
    DESTROY = 3, //销毁
    STATE_NULL = 1, //未开始/结束
    STATE_WIN = 2, //胜利
    STATE_LOSE = 3, //失败
    MIDDLE = 1, //中立
    LEFT = 2, //左方
    RIGHT = 3, //右方
    PROPOSAL_YONGJIETONGXIN = 1, // 永结同心
    PROPOSAL_JINYULIANGYUAN = 2, // 金玉良缘
    PROPOSAL_SHENXIANJUANLV = 3, // 神仙眷侣
    WEDDING_CELEBRATION_0 = 0, // 婚礼拜堂进度0未开始，1正在进行，2已结束
    WEDDING_CELEBRATION_1 = 1, // 婚礼拜堂进度0未开始，1正在进行，2已结束
    WEDDING_CELEBRATION_2 = 2, // 婚礼拜堂进度0未开始，1正在进行，2已结束
    TREASURE_RUNE = 1, // 符文寻宝
    TREASURE_EQUIPMENT = 2, // 装备寻宝
    TREASURE_PEAK = 3, // 巅峰寻宝
    TREASURE_ARTIFACT = 4, // 神器寻宝
    TREASURE_SUPREMACY = 5, // 至尊寻宝
    TREASURE_SEVEN_DAY = 6, // 开服寻宝
    TREASURE_FIREWORKS = 7, // 烟花寻宝
    TREASURE_TIME_LIMIT = 13, //限时寻宝
    CHECKPOINT_AUTO_CHALLENGE_N = 0, // 自动挑战关闭
    CHECKPOINT_AUTO_CHALLENGE_Y = 1, // 自动挑战开启
    CHECKPOINT_CHALLENGE_FAIL = 0, // 挑战关卡失败 - 超时|被击败|自动退出
    CHECKPOINT_CHALLENGE_SUCC = 1, // 挑战关卡成功
}
