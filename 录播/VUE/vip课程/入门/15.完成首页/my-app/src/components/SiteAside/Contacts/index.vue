<template>
  <ul class="contacts-li">
    <li>
        <Contact type="github" text="lixiaochenCode" url="https://github.com/lixiaochen-code" />
    </li>
    <li>
        <Contact type="mail" text="2578804577@qq.com" url="mailto:2578804577@qq.com" />
    </li>
    <li>
        <Contact type="qq" text="2578804577" url="tencent://message/?uin=2578804577" imgUrl="https://qun.qq.com/qrcode/index?data=https%3A%2F%2Fqm.qq.com%2Fcgi-bin%2Fqm%2Fqr%3Fk%3DJKF9gl7p1-za_1Fmoze1zP32SyFaLad0%26jump_from%3Dwebapi%26qr%3D1&size=302&down=1" />
    </li>
    <li>
        <Contact text="Wx155852565" imgUrl="https://qun.qq.com/qrcode/index?data=https%3A%2F%2Fqm.qq.com%2Fcgi-bin%2Fqm%2Fqr%3Fk%3DJKF9gl7p1-za_1Fmoze1zP32SyFaLad0%26jump_from%3Dwebapi%26qr%3D1&size=302&down=1" />
    </li>
  </ul>
</template>

<script>
import Contact from "@/components/SiteAside/Contact/index.vue"
export default {
    components: {
        Contact
    }
}
</script>

<style scoped lang="less">
    .contacts-li {
        width: 100%;
        position: absolute;
        margin-left: 18px;
        list-style: none;
        margin: 0;
        li:nth-of-type(1) .contact-li {
            top: 0px;
        }
        li:nth-of-type(2) .contact-li {
            top: 50px;
        }
        li:nth-of-type(3) .contact-li {
            top: 100px;
        }
        li:nth-of-type(4) .contact-li {
            top: 150px;
        }
    }
</style>